const userReqHandlers = require('../backend/user-req-handlers.js');
const uiTexts = require('../backend/ui-texts-english.json');
const sqls = require('../backend/sqls.json');

const {runSQL, } = require('tamed-pg');

const tickLog = require('tick-log');
tickLog.forceColor(true);

beforeAll(async () => {
	 await userReqHandlers.init({
		jwtKeys: {
			secret: 'REPLACE-THIS-SECRET',
			jwt_expiresIn: '31 days',
		},
		bcryptKeys: {
			saltRounds: 10,
		},
		emailKeys: {
			use: 'gmail',
			credentials: {
				user: process.env.TAMED_MAILER_GMAIL_USER,
				app_password: process.env.TAMED_MAILER_GMAIL_APP_PASSWORD,
			},
		},
		pgKeys: {
			user: 'serialentrepreneurapp',
			password: 'serialentrepreneurapp.', // coming from database-setup/step00001.sql
			database: 'serialentdb',
			host: 'localhost',
			port: 5432,
		},
	});
});




jest.setTimeout(20000);

test('Verify passwords are hashed', async () => {
	let response = await userReqHandlers.exportedForTesting.hashPassword('dummyPassword');
	tickLog.info(`Hashed password: ${response}`);
	// jest expect greater than
	expect(response.length).toBeGreaterThan(10);
});

test('Get confirmation code', async () => {
	let now = Date.now();
	let response1 = await userReqHandlers.registerUserStep1(`${now}`, `${now}@yopmail.com`, `${now}`);
	tickLog.info(`Confirmation code: ${response1}`);
	let response2 = await userReqHandlers.registerUserStep1(`${now}`, `${now}@yopmail.com`, `${now}`);
	tickLog.info(`Confirmation code: ${response2}`);
	expect(response1.length).toEqual(7);
	expect(response2.length).toEqual(7);
	expect(response1).not.toEqual(response2);
});



test('Register customer', async () => {
	let now = Date.now();
	let email = `${now}@yopmail.com`;
	let response1a = await userReqHandlers.registerUserStep1(`${now}`, email, `${now}`);
	tickLog.info(`Confirmation code: ${response1a}`);
	let response1b = await userReqHandlers.registerUserStep1(`${now}`, email, `${now}`);
	tickLog.info(`Confirmation code: ${response1b}`);
	let response2 = await userReqHandlers.registerUserStep2(email, response1a);
	expect(response2).toBeDefined();
	expect(response2.length).toBeGreaterThan(0);
	let l_decodedToken = userReqHandlers.jwtDecode(response2);
	expect(l_decodedToken).toHaveProperty("userId");
	let response3 = await runSQL(sqls.selectCustomer, [`${email}`]);
	tickLog.success(`Customer: ${JSON.stringify(response3.rows)}`);
	expect(response3.rows.length).toEqual(1);
});

test('Invalid confirmation code', async () => {
	let now = Date.now();
	let email = `${now}@yopmail.com`;
	let response1a = await userReqHandlers.registerUserStep1(`${now}`, email, `${now}`);
	tickLog.info(`Confirmation code: ${response1a}`);
	let confirmationCode = `${response1a}-SOME-GARBAGE-DATA`;
	expect(userReqHandlers.registerUserStep2(email, confirmationCode)).rejects.toEqual(uiTexts.invalidConfirmationCode);
	let response3 = await runSQL(sqls.selectCustomer, [`${email}`]);
	tickLog.success(`Customer: ${JSON.stringify(response3.rows)}`);
	expect(response3.rows.length).toEqual(0);
});

test('Email already exists', async () => {
	let now = Date.now();
	let email = `${now}@yopmail.com`;
	let response1a = await userReqHandlers.registerUserStep1(`${now}`, email, `${now}`);
	tickLog.info(`Confirmation code: ${response1a}`);
	let response2a = await userReqHandlers.registerUserStep2(email, response1a);
	try {
		await userReqHandlers.registerUserStep1(`${now}`, email, `${now}`);
	} catch (error) {
		expect(error).toEqual(uiTexts.emailAlreadyExists);
	}
});

test('JWT functions', async () => {
	let now = Date.now();
	let payload = {
		userId: `${now}`,
	};
	let token = userReqHandlers.jwtEncode(payload);
	tickLog.info(`JWT token: ${token}`);
	expect(token).toBeDefined();
	expect(token.length).toBeGreaterThan(0);
	let decoded = userReqHandlers.jwtDecode(token);
	tickLog.info(`Decoded JWT token: ${JSON.stringify(decoded)}`);
	expect(decoded).toBeDefined();
	expect(decoded.userId).toEqual(`${now}`);
});

test('Successfull login customer', async () => {
	let now = Date.now();
	let email = `${now}@yopmail.com`;
	let password = `${now}`;
	let response1 = await userReqHandlers.registerUserStep1(`${now}`, email, password);
	tickLog.info(`Confirmation code: ${response1}`);
	let response2 = await userReqHandlers.registerUserStep2(email, response1);
	let response3 = await userReqHandlers.loginUserViaMail(email, password);
	tickLog.info(`JWT token: ${response3}`);
	expect(response3).toBeDefined();
	expect(response3.length).toBeGreaterThan(0);
	let decoded = userReqHandlers.jwtDecode(response3);
	tickLog.info(`Decoded JWT token: ${JSON.stringify(decoded)}`);
	expect(decoded).toBeDefined();
	expect(decoded.email).toEqual(email);
});

test('Invalid password', async () => {
	let now = Date.now();
	let email = `${now}@yopmail.com`;
	let wrongPassword = `${now}-SOME-GARBAGE-DATA`;
	let password = `${now}`;
	let response1 = await userReqHandlers.registerUserStep1(`${now}`, email, password);
	tickLog.info(`Confirmation code: ${response1}`);
	let response2 = await userReqHandlers.registerUserStep2(email, response1);
	try {
		await userReqHandlers.loginUserViaMail(email, wrongPassword);
		expect(true).toEqual(false); // should not reach this line
	} catch (error) {
		expect(error).toEqual(uiTexts.invalidEmailOrPassword);
	}
});

test('Invalid email', async () => {
	let now = Date.now();
	let email = `${now}@yopmail.com`;
	let wrongEmail = `${now}-SOME-GARBAGE-DATA`;
	let password = `${now}`;
	let response1 = await userReqHandlers.registerUserStep1(`${now}`, email, password);
	tickLog.info(`Confirmation code: ${response1}`);
	let response2 = await userReqHandlers.registerUserStep2(email, response1);
	try {
		await userReqHandlers.loginUserViaMail(wrongEmail, password);
		expect(true).toEqual(false); // should not reach this line
	}
	catch (error) {
		expect(error).toEqual(uiTexts.invalidEmailOrPassword);
	}
});

test('Successfull login customer via JWT', async () => {
	let now = Date.now();
	let email = `${now}@yopmail.com`;
	let password = `${now}`;
	let response1 = await userReqHandlers.registerUserStep1(`${now}`, email, password);
	tickLog.info(`Confirmation code: ${response1}`);
	let response2 = await userReqHandlers.registerUserStep2(email, response1);
	let response3 = await userReqHandlers.loginUserViaMail(email, password);
	tickLog.info(`JWT token: ${response3}`);
	expect(response3).toBeDefined();
	expect(response3.length).toBeGreaterThan(0);
	let decoded = userReqHandlers.jwtDecode(response3);
	tickLog.info(`Decoded JWT token: ${JSON.stringify(decoded)}`);
	expect(decoded).toBeDefined();
	expect(decoded.email).toEqual(email);
	let response4 = await userReqHandlers.loginUserViaToken(response3);
	tickLog.info(`New JWT token: ${JSON.stringify(response4)}`);
	expect(response4).toBeDefined();
	expect(response4.length).toBeGreaterThan(0);
	let decoded2 = userReqHandlers.jwtDecode(response4);
	tickLog.info(`Decoded JWT token: ${JSON.stringify(decoded2)}`);
	expect(decoded2).toBeDefined();
	expect(decoded2.email).toEqual(email);
});

test('Invalid JWT', async () => {
	let garbageJWT = 'SOME-GARBAGE-DATA';
	try {
		tickLog.info(`#############################################`);
		tickLog.info(`IT IS NORMAL THAT YOU SEE AN ERROR IN BELOW FOR FAILURE OF THE JWT: ${garbageJWT}`);
		await userReqHandlers.loginUserViaToken(garbageJWT);
		expect(true).toEqual(false); // should not reach this line
	} catch (error) {
		tickLog.info(`#############################################`);
		expect(error).toEqual(uiTexts.invalidJWTToken);
	}
});

test('Remove customer', async () => {
	let now = Date.now();
	let email = `${now}@yopmail.com`;
	let password = `${now}`;
	let response1 = await userReqHandlers.registerUserStep1(`${now}`, email, password);
	tickLog.info(`Confirmation code: ${response1}`);
	let response2 = await userReqHandlers.registerUserStep2(email, response1);
	let response3 = await userReqHandlers.loginUserViaMail(email, password);
	tickLog.info(`JWT token: ${response3}`);
	expect(response3).toBeDefined();
	expect(response3.length).toBeGreaterThan(0);
	let decoded = userReqHandlers.jwtDecode(response3);
	tickLog.info(`Decoded JWT token: ${JSON.stringify(decoded)}`);
	expect(decoded).toBeDefined();
	expect(decoded.email).toEqual(email);
	let response4 = await userReqHandlers.removeUser(email);
	tickLog.info(`Remove user response: ${JSON.stringify(response4)}`);
	expect(response4).toBeDefined();
	expect(response4).toEqual(uiTexts.userRemoved);
});

test('Remove customer - invalid email', async () => {
	let now = Date.now();
	let email = `${now}@yopmail.com`;
	let password = `${now}`;
	let response1 = await userReqHandlers.registerUserStep1(`${now}`, email, password);
	tickLog.info(`Confirmation code: ${response1}`);
	let response2 = await userReqHandlers.registerUserStep2(email, response1);
	let response3 = await userReqHandlers.loginUserViaMail(email, password);
	tickLog.info(`JWT token: ${response3}`);
	expect(response3).toBeDefined();
	expect(response3.length).toBeGreaterThan(0);
	let decoded = userReqHandlers.jwtDecode(response3);
	tickLog.info(`Decoded JWT token: ${JSON.stringify(decoded)}`);
	expect(decoded).toBeDefined();
	expect(decoded.email).toEqual(email);
	try {
		await userReqHandlers.removeUser(`${email}-SOME-GARBAGE-DATA`);
		expect(true).toEqual(false); // should not reach this line
	}
	catch (error) {
		expect(error).toEqual(uiTexts.invalidEmail);
	}
});

test('Password change', async () => {
	let now = Date.now();
	let email = `${now}@yopmail.com`;
	let password = `${now}`;
	let newPassword = `${now}-NEW`;
	let response1 = await userReqHandlers.registerUserStep1(`${now}`, email, password);
	tickLog.info(`Confirmation code: ${response1}`);
	let response2 = await userReqHandlers.registerUserStep2(email, response1);
	let response3 = await userReqHandlers.loginUserViaMail(email, password);
	tickLog.info(`JWT token: ${response3}`);
	expect(response3).toBeDefined();
	expect(response3.length).toBeGreaterThan(0);
	let decoded = userReqHandlers.jwtDecode(response3);
	tickLog.info(`Decoded JWT token: ${JSON.stringify(decoded)}`);
	expect(decoded).toBeDefined();
	expect(decoded.email).toEqual(email);
	try {
		await userReqHandlers.changePassword(email, 'wrong-old-password', newPassword);
		expect(true).toEqual(false); // should not reach this line
	} catch (error) {
		expect(error).toEqual(uiTexts.invalidOldPassword);
	}
	let response4 = await userReqHandlers.changePassword(email, password, newPassword);
	tickLog.info(`Change password response: ${JSON.stringify(response4)}`);
	expect(response4).toBeDefined();
	expect(response4).toEqual(uiTexts.passwordChanged);
	let response5 = await userReqHandlers.loginUserViaMail(email, newPassword);
	tickLog.info(`New JWT token: ${JSON.stringify(response5)}`);
	expect(response5).toBeDefined();
	expect(response5.length).toBeGreaterThan(0);
	let decoded2 = userReqHandlers.jwtDecode(response5);
	tickLog.info(`Decoded JWT token: ${JSON.stringify(decoded2)}`);
	expect(decoded2).toBeDefined();
	expect(decoded2.email).toEqual(email);
});