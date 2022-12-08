const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const tickLog = require('tick-log');

const { connect, runSQL } = require('tamed-pg');
const { tamedMailer } = require('tamed-mailer');

const sqls = require('./sqls.json');
const uiTexts = require('./ui-texts-english.json');

const keys = {};

let poolName;

const poolInfoForTests = {};

const init = (p_params) => new Promise(async (resolve, reject) => {
	try {
		keys.jwtKeys = p_params.jwtKeys;
		keys.bcryptKeys = p_params.bcryptKeys;
		keys.emailKeys = p_params.emailKeys;
		poolName = await connect(p_params.pgKeys);
		poolInfoForTests.poolName = poolName;
		return resolve(true);
	} catch (error) /* istanbul ignore next */ {
		tickLog.error(`Function init failed. Error: ${JSON.stringify(error)}`);
		return reject(uiTexts.unknownError);
	}
});

/* istanbul ignore next */
const testHandler = (name, email, password) => new Promise(async (resolve, reject) => {
	try {
		tickLog.success(`testHandler: name: ${name}, email: ${email}, password: ${password}`);
		return resolve();
	} catch (error) {
		return reject(error);
	}
});

const jwtDecode = (p_token) => {
	try {
		let decoded = jwt.verify(p_token, keys.jwtKeys.secret);
		return decoded;
	} catch (error) /* istanbul ignore next */ {
		tickLog.error(`Function jwtDecode failed. Error: ${JSON.stringify(error)}`);
		return undefined;
	}
};

const jwtEncode = (p_data) => {
	try {
		let newToken = jwt.sign(p_data, keys.jwtKeys.secret, { expiresIn: keys.jwtKeys.jwt_expiresIn });
		return newToken;
	} catch (error) /* istanbul ignore next */ {
		tickLog.error(`Function jwtEncode failed. Error: ${JSON.stringify(error)}`);
		return undefined;
	}
};

const hashPassword = (plaintextPassword) => new Promise(async (resolve, reject) => {
	try {
		bcrypt.genSalt(keys.bcryptKeys.saltRounds, function (err, salt) {
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

const generateConfirmationCode = () => {
	let l_randomNumber1 = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
	let l_randomNumber2 = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
	return `${l_randomNumber1}-${l_randomNumber2}`;
}


const registerUserStep1 = (p_name, p_middleName, p_lastName, p_email, p_password, p_birthDate, p_gender) => new Promise(async (resolve, reject) => {
	try {
		let l_retval;
		l_retval = await runSQL(poolName, sqls.selectUser, [p_email]);
		if (l_retval.rows.length > 0) {
			return reject(uiTexts.emailAlreadyExists);
		};
		let l_confirmationCode = generateConfirmationCode();
		let l_hashedPassword = await hashPassword(p_password);
		await runSQL(poolName, sqls.insertUserRegistrations, [l_confirmationCode, p_name, p_middleName, p_lastName, p_email, l_hashedPassword, p_birthDate, p_gender]);
		let l_mailBody = uiTexts.confirmationCodeMailContent
			.replace(/\{0\}/g, p_name)
			.replace(/\{1\}/g, uiTexts.applicationName)
			.replace(/\{2\}/g, l_confirmationCode);
		let l_subject = uiTexts.confirmationCodeMailSubject.replace(/\{0\}/g, uiTexts.applicationName);
		await tamedMailer(keys.emailKeys.use, keys.emailKeys.credentials, p_email, l_subject, l_mailBody, 'html');
		return resolve(l_confirmationCode);
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
		l_retval = await runSQL(poolName, sqls.selectUserRegistrations, [p_email, p_confirmationCode]);
		if (l_retval.rows.length === 0) {
			return reject(uiTexts.invalidConfirmationCode);
		};
		await runSQL(poolName, sqls.insertUser, [l_retval.rows[0].name, l_retval.rows[0].middleName, l_retval.rows[0].lastName, p_email, l_retval.rows[0].password, l_retval.rows[0].birthDate, l_retval.rows[0].gender]);
		await runSQL(poolName, sqls.deleteUserRegistrations, [p_email]);
		runSQL(poolName, sqls.deleteExpiredUserRegistrations, []);
		let l_insertedUsersRow = await runSQL(poolName, sqls.selectUser, [p_email]);
		let l_token = generateUserToken(l_insertedUsersRow.rows[0].id, p_email);
		return resolve(l_token);
	} catch (error) /* istanbul ignore next */ {
		tickLog.error(`Function registerUserStep2 failed. Error: ${JSON.stringify(error)}`);
		return reject(uiTexts.unknownError);
	}
});

const removeUser = (p_email, p_token) => new Promise(async (resolve, reject) => {
	try {
		let l_decoded = jwtDecode(p_token);
		/* istanbul ignore if */
		if (!(l_decoded.email === l_decoded.email)) {
			return reject(uiTexts.invalidEmail);
		};
		let l_retval;
		l_retval = await runSQL(poolName, sqls.selectUser, [p_email]);
		if (l_retval.rows.length === 0) {
			return reject(uiTexts.invalidEmail);
		};
		await runSQL(poolName, sqls.deleteUser, [p_email]);
		return resolve(uiTexts.userRemoved);
	} catch (error) /* istanbul ignore next */ {
		tickLog.error(`Function removeUser failed. Error: ${JSON.stringify(error)}`);
		return reject(uiTexts.unknownError);
	}
});

const loginUserViaMail = (p_email, p_password) => new Promise(async (resolve, reject) => {
	try {
		let l_retval;
		l_retval = await runSQL(poolName, sqls.selectUser, [p_email]);
		if (l_retval.rows.length === 0) {
			return reject(uiTexts.invalidEmailOrPassword);
		};
		let l_hashedPassword = l_retval.rows[0].password;
		let l_passwordMatch = await bcrypt.compare(p_password, l_hashedPassword);
		if (!l_passwordMatch) {
			return reject(uiTexts.invalidEmailOrPassword);
		};
		let l_token = generateUserToken(l_retval.rows[0].id, p_email);
		let l_retval2 = {
			payload: {
				token: l_token
			}
		}
		return resolve(l_retval2);
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
		let l_retval = await runSQL(poolName, sqls.selectUser, [l_decodedToken.email]);
		/* istanbul ignore if */
		if (l_retval.rows.length === 0) {
			return reject(uiTexts.invalidJWTToken);
		};
		let l_token = generateUserToken(l_retval.rows[0].id, l_decodedToken.email);
		let l_retval2 = {
			payload: {
				token: l_token
			}
		}
		return resolve(l_retval2);
	} catch (error) /* istanbul ignore next */ {
		tickLog.error(`Function tokenLogin failed. Error: ${JSON.stringify(error)}`);
		return reject(uiTexts.unknownError);
	}
});

const changePassword = (p_email, p_oldPassword, p_newPassword) => new Promise(async (resolve, reject) => {
	try {
		let l_retval;
		l_retval = await runSQL(poolName, sqls.selectUser, [p_email]);
		/* istanbul ignore if */
		if (l_retval.rows.length === 0) {
			return reject(uiTexts.invalidEmail);
		};
		let l_hashedPassword = l_retval.rows[0].password;
		let l_passwordMatch = await bcrypt.compare(p_oldPassword, l_hashedPassword);
		if (!l_passwordMatch) {
			return reject(uiTexts.invalidOldPassword);
		};
		let l_newHashedPassword = await bcrypt.hash(p_newPassword, 10);
		await runSQL(poolName, sqls.updateUserPassword, [l_newHashedPassword, p_email]);
		return resolve(uiTexts.passwordChanged);
	} catch (error) /* istanbul ignore next */ {
		tickLog.error(`Function changePassword failed. Error: ${JSON.stringify(error)}`);
		return reject(uiTexts.unknownError);
	}
});

const resetPasswordStep1 = (p_email) => new Promise(async (resolve, reject) => {
	try {
		let l_user;
		l_user = await runSQL(poolName, sqls.selectUser, [p_email]);
		/* istanbul ignore if */
		if (l_user.rows.length === 0) {
			return reject(uiTexts.invalidEmail);
		};
		let l_confirmationCode = generateConfirmationCode();
		await runSQL(poolName, sqls.insertUserPasswordReset, [p_email, l_confirmationCode]);
		await runSQL(poolName, sqls.deleteExpiredUserPasswordResets, []);
		let l_subject = uiTexts.resetPasswordMailSubject
			.replace(/\{0\}/g, l_user.rows[0].name);
		let l_mailBody = uiTexts.passwordResetMailBody
			.replace(/\{0\}/g, l_user.rows[0].name)
			.replace(/\{1\}/g, uiTexts.applicationName)
			.replace(/\{2\}/g, l_confirmationCode);
		await tamedMailer(keys.emailKeys.use, keys.emailKeys.credentials,
			p_email, l_subject, l_mailBody, 'html');
		return resolve(l_confirmationCode);
	} catch (error) /* istanbul ignore next */ {
		tickLog.error(`Function resetPassword failed. Error: ${JSON.stringify(error)}`);
		return reject(uiTexts.unknownError);
	}
});

const resetPasswordStep2 = (p_email, p_confirmationCode, p_newPassword) => new Promise(async (resolve, reject) => {
	try {
		let l_user;
		l_user = await runSQL(poolName, sqls.selectUser, [p_email]);
		/* istanbul ignore if */
		if (l_user.rows.length === 0) {
			return reject(uiTexts.invalidEmail);
		};
		let l_passwordReset;
		l_passwordReset = await runSQL(poolName, sqls.selectUserPasswordReset, [p_email, p_confirmationCode]);
		/* istanbul ignore if */
		if (l_passwordReset.rows.length === 0) {
			return reject(uiTexts.invalidConfirmationCode);
		};
		let l_newHashedPassword = await bcrypt.hash(p_newPassword, 10);
		await runSQL(poolName, sqls.updateUserPassword, [l_newHashedPassword, p_email]);
		await runSQL(poolName, sqls.deleteUserPasswordReset, [p_email, p_confirmationCode]);
		return resolve(uiTexts.passwordChanged);
	} catch (error) /* istanbul ignore next */ {
		tickLog.error(`Function resetPassword failed. Error: ${JSON.stringify(error)}`);
		return reject(uiTexts.unknownError);
	}
});

const updateUserData = (p_token, p_name, p_middleName, p_lastName, p_birthDate, p_gender) => new Promise(async (resolve, reject) => {
	try {
		let l_decodedToken = jwtDecode(p_token);
		/* istanbul ignore if */
		if (!l_decodedToken) {
			return reject(uiTexts.invalidJWTToken);
		};
		let l_retval = await runSQL(poolName, sqls.selectUserFromId, [l_decodedToken.userId]);
		/* istanbul ignore if */
		if (l_retval.rows.length === 0) {
			return reject(uiTexts.invalidJWTToken);
		};
		await runSQL(poolName, sqls.updateUserData, [l_decodedToken.userId, p_name, p_middleName, p_lastName, p_birthDate, p_gender]);
		return resolve(uiTexts.userDataUpdated);
	} catch (error) /* istanbul ignore next */ {
		tickLog.error(`Function updateUserData failed. Error: ${JSON.stringify(error)}`);
		return reject(uiTexts.unknownError);
	}
});

const getUserData = (p_token) => new Promise(async (resolve, reject) => {
	try {
		let l_decodedToken = jwtDecode(p_token);
		/* istanbul ignore if */
		if (!l_decodedToken) {
			return reject(uiTexts.invalidJWTToken);
		};
		let l_retval = await runSQL(poolName, sqls.selectUserFromId, [l_decodedToken.userId]);
		/* istanbul ignore if */
		if (l_retval.rows.length === 0) {
			return reject(uiTexts.invalidJWTToken);
		};
		delete l_retval.rows[0].password;
		return resolve({
			rows: [l_retval.rows[0]] // assure only 1 row is returned
		});
	} catch (error) /* istanbul ignore next */ {
		tickLog.error(`Function getUserData failed. Error: ${JSON.stringify(error)}`);
		return reject(uiTexts.unknownError);
	}
});


module.exports = {
	init: init,
	testHandler: testHandler,
	registerUserStep1: registerUserStep1,
	registerUserStep2: registerUserStep2,
	loginUserViaMail: loginUserViaMail,
	loginUserViaToken: loginUserViaToken,
	removeUser: removeUser,
	changePassword: changePassword,
	resetPasswordStep1: resetPasswordStep1,
	resetPasswordStep2: resetPasswordStep2,
	updateUserData: updateUserData,
	getUserData: getUserData,
	exportedForTesting: {
		poolInfoForTests: poolInfoForTests,
		hashPassword: hashPassword,
		jwtEncode: jwtEncode,
		jwtDecode: jwtDecode
	}
}
