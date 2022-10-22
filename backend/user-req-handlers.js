const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const tickLog = require('tick-log');

const runSQL = require('../db-pg').runSQL;
const { sendMailviaOffice } = require('tamed-mailer');

const jwtKeys = require('../keys/jwt.json');
const bcryptKeys = require('../keys/bcrypt.json');

const sqls = require('./sqls.json');
const uiTexts = require('./ui-texts-english.json');

const jwtDecode = (p_token) => {
	try {
		let decoded = jwt.verify(p_token, jwtKeys.secret);
		return decoded;
	} catch (error) /* istanbul ignore next */ {
		tickLog.error(`Function jwtDecode failed. Error: ${JSON.stringify(error)}`);
		return undefined;
	}
};

const jwtEncode = (p_data) => {
	try {
		let newToken = jwt.sign(p_data, jwtKeys.secret, { expiresIn: jwtKeys.jwt_expiresIn });
		return newToken;
	} catch (error) /* istanbul ignore next */ {
		tickLog.error(`Function jwtEncode failed. Error: ${JSON.stringify(error)}`);
		return undefined;
	}
};

const hashPassword = (plaintextPassword) => new Promise(async (resolve, reject) => {
	try {
		bcrypt.genSalt(bcryptKeys.saltRounds, function (err, salt) {
			/* istanbul ignore if */
			if (err) return reject(err);
			bcrypt.hash(plaintextPassword, salt, function (err, hash) {
				/* istanbul ignore if */
				if (err) return reject(err);
				return resolve(hash);
			});
		});
	} catch (error) /* istanbul ignore next */ {
		return reject(error);
	}
});

const registerUserStep1 = (p_name, p_email, p_password) => new Promise(async (resolve, reject) => {
	try {
		let l_retval;
		l_retval = await runSQL(sqls.selectCustomer, [p_email]);
		if (l_retval.rows.length > 0) {
			return reject(uiTexts.emailAlreadyExists);
		};
		let l_randomNumber1 = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
		let l_randomNumber2 = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
		let l_code = `${l_randomNumber1}-${l_randomNumber2}`;
		let l_hashedPassword = await hashPassword(p_password);
		await runSQL(sqls.insertCustomerRegistrations, [l_code, p_name, p_email, l_hashedPassword]);
		let l_mailBody = uiTexts.confirmationCodeMailContent
			.replace(/\{0\}/g, p_name)
			.replace(/\{1\}/g, uiTexts.applicationName)
			.replace(/\{2\}/g, l_code);
		await sendMailviaOffice([p_email], uiTexts.confirmationCodeMailSubject.replace(/\{0\}/g, uiTexts.applicationName), l_mailBody, 'html');
		return resolve(l_code);
	} catch (error) /* istanbul ignore next */ {
		tickLog.error(`Function registerUserStep1 failed. Error: ${JSON.stringify(error)}`);
		return reject(uiTexts.unknownError);
	}
});

const generateUserToken = (p_userid, p_email) => {
	let l_payload = {
		userId: p_userid,
		email: p_email
	};
	let l_token = jwtEncode(l_payload);
	return l_token;
}

const registerUserStep2 = (p_email, p_confirmationCode) => new Promise(async (resolve, reject) => {
	try {
		let l_retval;
		l_retval = await runSQL(sqls.selectCustomerRegistrations, [p_email, p_confirmationCode]);
		if (l_retval.rows.length === 0) {
			return reject(uiTexts.invalidConfirmationCode);
		};
		await runSQL(sqls.insertCustomer, [l_retval.rows[0].name, p_email, l_retval.rows[0].password]);
		await runSQL(sqls.deleteCustomerRegistrations, [p_email]);
		runSQL(sqls.deleteExpiredCustomerRegistrations, []);
		let l_insertedCustomersRow = await runSQL(sqls.selectCustomer, [p_email]);
		let l_token = generateUserToken(l_insertedCustomersRow.rows[0].id, p_email);
		return resolve(l_token);
	} catch (error) /* istanbul ignore next */ {
		tickLog.error(`Function registerUserStep2 failed. Error: ${JSON.stringify(error)}`);
		return reject(uiTexts.unknownError);
	}
});

const removeUser = (p_email) => new Promise(async (resolve, reject) => {
	try {
		let l_retval;
		l_retval = await runSQL(sqls.selectCustomer, [p_email]);
		if (l_retval.rows.length === 0) {
			return reject(uiTexts.invalidEmail);
		};
		await runSQL(sqls.deleteCustomer, [p_email]);
		return resolve(uiTexts.userRemoved);
	} catch (error) /* istanbul ignore next */ {
		tickLog.error(`Function removeUser failed. Error: ${JSON.stringify(error)}`);
		return reject(uiTexts.unknownError);
	}
});

const loginUserViaMail = (p_email, p_password) => new Promise(async (resolve, reject) => {
	try {
		let l_retval;
		l_retval = await runSQL(sqls.selectCustomer, [p_email]);
		if (l_retval.rows.length === 0) {
			return reject(uiTexts.invalidEmailOrPassword);
		};
		let l_hashedPassword = l_retval.rows[0].password;
		let l_passwordMatch = await bcrypt.compare(p_password, l_hashedPassword);
		if (!l_passwordMatch) {
			return reject(uiTexts.invalidEmailOrPassword);
		};
		let l_token = generateUserToken(l_retval.rows[0].id, p_email);
		return resolve(l_token);
	} catch (error) /* istanbul ignore next */ {
		tickLog.error(`Function mailLogin failed. Error: ${JSON.stringify(error)}`);
		return reject(uiTexts.unknownError);
	}
});

const loginUserViaToken = (p_token) => new Promise(async (resolve, reject) => {
	try {
		let l_decodedToken = jwtDecode(p_token);
		if (!l_decodedToken) {
			return reject(uiTexts.invalidJWTToken);
		};
		let l_retval = await runSQL(sqls.selectCustomer, [l_decodedToken.email]);
		/* istanbul ignore if */
		if (l_retval.rows.length === 0) {
			return reject(uiTexts.invalidJWTToken);
		};
		let l_token = generateUserToken(l_retval.rows[0].id, l_decodedToken.email);
		return resolve(l_token);
	} catch (error) /* istanbul ignore next */ {
		tickLog.error(`Function tokenLogin failed. Error: ${JSON.stringify(error)}`);
		return reject(uiTexts.unknownError);
	}
});

module.exports = {
	registerUserStep1: registerUserStep1,
	registerUserStep2: registerUserStep2,
	jwtEncode: jwtEncode,
	jwtDecode: jwtDecode,
	loginUserViaMail: loginUserViaMail,
	loginUserViaToken: loginUserViaToken,
	removeUser: removeUser,
	exportedForTesting: {
		hashPassword: hashPassword
	}
}
