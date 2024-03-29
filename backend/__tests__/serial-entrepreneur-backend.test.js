const serialEntrepreneurBackendHandlers = require('../serial-entrepreneur-backend.js');
const uiTexts = require('../ui-texts-english.json');
const sqls = require('../sqls.json');

const { runSQL, } = require('tamed-pg');

const tickLog = require('tick-log');
tickLog.forceColor(true);

let poolName;

beforeAll(async () => {
	await serialEntrepreneurBackendHandlers.init({
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
	poolName = serialEntrepreneurBackendHandlers.exportedForTesting.poolInfoForTests.poolName;
});

jest.setTimeout(20000);

test('Verify passwords are hashed', async () => {
	let response = await serialEntrepreneurBackendHandlers.exportedForTesting.hashPassword('dummyPassword');
	tickLog.info(`Hashed password: ${response}`, true);
	// jest expect greater than
	expect(response.length).toBeGreaterThan(10);
});

test('Get confirmation code', async () => {

	let now = Date.now();
	let name = `${now}`;
	let middlename = `${now}`;
	let lastname = `${now}`;
	let email = `${now}@yopmail.com`;
	let password = `${now}`;
	let birthdate = `12.23.1912`; // Format is DD.MM.YYYY
	let gender = `${now % 2 === 0 ? 'female' : 'male'}`;

	let response1 = await serialEntrepreneurBackendHandlers.registerUserStep1(name, middlename, lastname, email, password, birthdate, gender);
	tickLog.info(`Confirmation code: ${response1}`, true);
	let response2 = await serialEntrepreneurBackendHandlers.registerUserStep1(name, middlename, lastname, email, password, birthdate, gender);
	tickLog.info(`Confirmation code: ${response2}`, true);
	expect(response1.length).toEqual(7);
	expect(response2.length).toEqual(7);
	expect(response1).not.toEqual(response2);
});

test('Register user', async () => {
	let now = Date.now();
	let name = `${now}`;
	let middlename = `${now}`;
	let lastname = `${now}`;
	let email = `${now}@yopmail.com`;
	let password = `${now}`;
	let birthdate = `12.23.1912`; // Format is DD.MM.YYYY
	let gender = `${now % 2 === 0 ? 'female' : 'male'}`;
	let response1a = await serialEntrepreneurBackendHandlers.registerUserStep1(name, middlename, lastname, email, password, birthdate, gender);
	tickLog.info(`Confirmation code: ${response1a}`, true);
	let response1b = await serialEntrepreneurBackendHandlers.registerUserStep1(name, middlename, lastname, email, password, birthdate, gender);
	tickLog.info(`Confirmation code: ${response1b}`, true);
	let response2 = await serialEntrepreneurBackendHandlers.registerUserStep2(email, response1a);
	expect(response2).toBeDefined();
	expect(response2.length).toBeGreaterThan(0);
	let l_decodedToken = serialEntrepreneurBackendHandlers.exportedForTesting.jwtDecode(response2);
	expect(l_decodedToken).toHaveProperty("userId");
	let response3 = await runSQL(poolName, sqls.selectUser, [`${email}`]);
	tickLog.success(`User: ${JSON.stringify(response3.rows)}`, true);
	expect(response3.rows.length).toEqual(1);
});

test('Invalid confirmation code', async () => {
	let now = Date.now();
	let name = `${now}`;
	let middlename = `${now}`;
	let lastname = `${now}`;
	let email = `${now}@yopmail.com`;
	let password = `${now}`;
	let birthdate = `12.23.1912`; // Format is DD.MM.YYYY
	let gender = `${now % 2 === 0 ? 'female' : 'male'}`;
	let response1a = await serialEntrepreneurBackendHandlers.registerUserStep1(name, middlename, lastname, email, password, birthdate, gender);
	tickLog.info(`Confirmation code: ${response1a}`, true);
	let confirmationCode = `${response1a}-SOME-GARBAGE-DATA`;
	expect(serialEntrepreneurBackendHandlers.registerUserStep2(email, confirmationCode)).rejects.toEqual(uiTexts.invalidConfirmationCode);
	let response3 = await runSQL(poolName, sqls.selectUser, [`${email}`]);
	tickLog.success(`User: ${JSON.stringify(response3.rows)}`, true);
	expect(response3.rows.length).toEqual(0);
});

test('Email already exists', async () => {
	let now = Date.now();
	let name = `${now}`;
	let middlename = `${now}`;
	let lastname = `${now}`;
	let email = `${now}@yopmail.com`;
	let password = `${now}`;
	let birthdate = `12.23.1912`; // Format is DD.MM.YYYY
	let gender = `${now % 2 === 0 ? 'female' : 'male'}`;
	let response1a = await serialEntrepreneurBackendHandlers.registerUserStep1(name, middlename, lastname, email, password, birthdate, gender);
	tickLog.info(`Confirmation code: ${response1a}`, true);
	let response2a = await serialEntrepreneurBackendHandlers.registerUserStep2(email, response1a);
	try {
		await serialEntrepreneurBackendHandlers.registerUserStep1(name, middlename, lastname, email, password, birthdate, gender);
	} catch (error) {
		expect(error).toEqual(uiTexts.emailAlreadyExists);
	}
});

test('JWT functions', async () => {
	let now = Date.now();
	let payload = {
		userId: `${now}`,
	};
	let token = serialEntrepreneurBackendHandlers.exportedForTesting.jwtEncode(payload);
	tickLog.info(`JWT token: ${token}`, true);
	expect(token).toBeDefined();
	expect(token.length).toBeGreaterThan(0);
	let decoded = serialEntrepreneurBackendHandlers.exportedForTesting.jwtDecode(token);
	tickLog.info(`Decoded JWT token: ${JSON.stringify(decoded)}`, true);
	expect(decoded).toBeDefined();
	expect(decoded.userId).toEqual(`${now}`);
});

test('Successfull login user', async () => {
	let now = Date.now();
	let name = `${now}`;
	let middlename = `${now}`;
	let lastname = `${now}`;
	let email = `${now}@yopmail.com`;
	let password = `${now}`;
	let birthdate = `12.23.1912`; // Format is DD.MM.YYYY
	let gender = `${now % 2 === 0 ? 'female' : 'male'}`;
	let response1 = await serialEntrepreneurBackendHandlers.registerUserStep1(name, middlename, lastname, email, password, birthdate, gender);
	tickLog.info(`Confirmation code: ${response1}`, true);
	let response2 = await serialEntrepreneurBackendHandlers.registerUserStep2(email, response1);
	let response3 = await serialEntrepreneurBackendHandlers.loginUserViaMail(email, password);
	tickLog.info(`JWT token: ${response3}`, true);
	expect(response3).toBeDefined();
	expect(response3.payload.token.length).toBeGreaterThan(0);
	let decoded = serialEntrepreneurBackendHandlers.exportedForTesting.jwtDecode(response3.payload.token);
	tickLog.info(`Decoded JWT token: ${JSON.stringify(decoded)}`, true);
	expect(decoded).toBeDefined();
	expect(decoded.email).toEqual(email);
});

test('Invalid password', async () => {
	let now = Date.now();
	let name = `${now}`;
	let middlename = `${now}`;
	let lastname = `${now}`;
	let email = `${now}@yopmail.com`;
	let password = `${now}`;
	let birthdate = `12.23.1912`; // Format is DD.MM.YYYY
	let gender = `${now % 2 === 0 ? 'female' : 'male'}`;
	let wrongPassword = `${now}-SOME-GARBAGE-DATA`;
	let response1 = await serialEntrepreneurBackendHandlers.registerUserStep1(name, middlename, lastname, email, password, birthdate, gender);
	tickLog.info(`Confirmation code: ${response1}`, true);
	let response2 = await serialEntrepreneurBackendHandlers.registerUserStep2(email, response1);
	try {
		await serialEntrepreneurBackendHandlers.loginUserViaMail(email, wrongPassword);
		expect(true).toEqual(false); // should not reach this line
	} catch (error) {
		expect(error).toEqual(uiTexts.invalidEmailOrPassword);
	}
});

test('Invalid email', async () => {
	let now = Date.now();
	let name = `${now}`;
	let middlename = `${now}`;
	let lastname = `${now}`;
	let email = `${now}@yopmail.com`;
	let password = `${now}`;
	let birthdate = `12.23.1912`; // Format is DD.MM.YYYY
	let gender = `${now % 2 === 0 ? 'female' : 'male'}`;
	let wrongEmail = `${now}-SOME-GARBAGE-DATA`;
	let response1 = await serialEntrepreneurBackendHandlers.registerUserStep1(name, middlename, lastname, email, password, birthdate, gender);
	tickLog.info(`Confirmation code: ${response1}`, true);
	let response2 = await serialEntrepreneurBackendHandlers.registerUserStep2(email, response1);
	try {
		await serialEntrepreneurBackendHandlers.loginUserViaMail(wrongEmail, password);
		expect(true).toEqual(false); // should not reach this line
	}
	catch (error) {
		expect(error).toEqual(uiTexts.invalidEmailOrPassword);
	}
});

test('Successfull login user via JWT', async () => {
	let now = Date.now();
	let name = `${now}`;
	let middlename = `${now}`;
	let lastname = `${now}`;
	let email = `${now}@yopmail.com`;
	let password = `${now}`;
	let birthdate = `12.23.1912`; // Format is DD.MM.YYYY
	let gender = `${now % 2 === 0 ? 'female' : 'male'}`;
	let response1 = await serialEntrepreneurBackendHandlers.registerUserStep1(name, middlename, lastname, email, password, birthdate, gender);
	tickLog.info(`Confirmation code: ${response1}`, true);
	let response2 = await serialEntrepreneurBackendHandlers.registerUserStep2(email, response1);
	let response3 = await serialEntrepreneurBackendHandlers.loginUserViaMail(email, password);
	tickLog.info(`JWT token: ${response3}`, true);
	expect(response3).toBeDefined();
	expect(response3.payload.token.length).toBeGreaterThan(0);
	let decoded = serialEntrepreneurBackendHandlers.exportedForTesting.jwtDecode(response3.payload.token);
	tickLog.info(`Decoded JWT token: ${JSON.stringify(decoded)}`, true);
	expect(decoded).toBeDefined();
	expect(decoded.email).toEqual(email);
	let response4 = await serialEntrepreneurBackendHandlers.loginUserViaToken(response3.payload.token);
	tickLog.info(`New JWT token: ${JSON.stringify(response4.payload.token)}`, true);
	expect(response4.payload.token).toBeDefined();
	expect(response4.payload.token.length).toBeGreaterThan(0);
	let decoded2 = serialEntrepreneurBackendHandlers.exportedForTesting.jwtDecode(response4.payload.token);
	tickLog.info(`Decoded JWT token: ${JSON.stringify(decoded2)}`, true);
	expect(decoded2).toBeDefined();
	expect(decoded2.email).toEqual(email);
});

test('Invalid JWT', async () => {
	let garbageJWT = 'SOME-GARBAGE-DATA';
	try {
		tickLog.info(`#############################################`, true);
		tickLog.info(`IT IS NORMAL THAT YOU SEE AN ERROR IN BELOW FOR FAILURE OF THE JWT: ${garbageJWT}`, true);
		await serialEntrepreneurBackendHandlers.loginUserViaToken(garbageJWT);
		expect(true).toEqual(false); // should not reach this line
	} catch (error) {
		tickLog.info(`#############################################`, true);
		expect(error).toEqual(uiTexts.invalidJWTToken);
	}
});

test('Remove user', async () => {
	let now = Date.now();
	let name = `${now}`;
	let middlename = `${now}`;
	let lastname = `${now}`;
	let email = `${now}@yopmail.com`;
	let password = `${now}`;
	let birthdate = `12.23.1912`; // Format is DD.MM.YYYY
	let gender = `${now % 2 === 0 ? 'female' : 'male'}`;
	let response1 = await serialEntrepreneurBackendHandlers.registerUserStep1(name, middlename, lastname, email, password, birthdate, gender);
	tickLog.info(`Confirmation code: ${response1}`, true);
	let response2 = await serialEntrepreneurBackendHandlers.registerUserStep2(email, response1);
	let response3 = await serialEntrepreneurBackendHandlers.loginUserViaMail(email, password);
	tickLog.info(`JWT token: ${response3}`, true);
	expect(response3).toBeDefined();
	expect(response3.payload.token.length).toBeGreaterThan(0);
	let decoded = serialEntrepreneurBackendHandlers.exportedForTesting.jwtDecode(response3.payload.token);
	tickLog.info(`Decoded JWT token: ${JSON.stringify(decoded)}`, true);
	expect(decoded).toBeDefined();
	expect(decoded.email).toEqual(email);
	let response4 = await serialEntrepreneurBackendHandlers.removeUser(email, response3.payload.token);
	tickLog.info(`Remove user response: ${JSON.stringify(response4)}`, true);
	expect(response4).toBeDefined();
	expect(response4).toEqual(uiTexts.userRemoved);
});

test('Remove user - invalid email', async () => {
	let now = Date.now();
	let name = `${now}`;
	let middlename = `${now}`;
	let lastname = `${now}`;
	let email = `${now}@yopmail.com`;
	let password = `${now}`;
	let birthdate = `12.23.1912`; // Format is DD.MM.YYYY
	let gender = `${now % 2 === 0 ? 'female' : 'male'}`;
	let response1 = await serialEntrepreneurBackendHandlers.registerUserStep1(name, middlename, lastname, email, password, birthdate, gender);
	tickLog.info(`Confirmation code: ${response1}`, true);
	let response2 = await serialEntrepreneurBackendHandlers.registerUserStep2(email, response1);
	let response3 = await serialEntrepreneurBackendHandlers.loginUserViaMail(email, password);
	tickLog.info(`JWT token: ${response3}`, true);
	expect(response3).toBeDefined();
	expect(response3.payload.token.length).toBeGreaterThan(0);
	let decoded = serialEntrepreneurBackendHandlers.exportedForTesting.jwtDecode(response3.payload.token);
	tickLog.info(`Decoded JWT token: ${JSON.stringify(decoded)}`, true);
	expect(decoded).toBeDefined();
	expect(decoded.email).toEqual(email);
	try {
		await serialEntrepreneurBackendHandlers.removeUser(`${email}-SOME-GARBAGE-DATA`, response3.payload.token);
		expect(true).toEqual(false); // should not reach this line
	}
	catch (error) {
		expect(error).toEqual(uiTexts.invalidEmail);
	}
});

test('Password change', async () => {
	let now = Date.now();
	let name = `${now}`;
	let middlename = `${now}`;
	let lastname = `${now}`;
	let email = `${now}@yopmail.com`;
	let password = `${now}`;
	let newPassword = `${now}-NEW`;
	let birthdate = `12.23.1912`; // Format is DD.MM.YYYY
	let gender = `${now % 2 === 0 ? 'female' : 'male'}`;
	let response1 = await serialEntrepreneurBackendHandlers.registerUserStep1(name, middlename, lastname, email, password, birthdate, gender);
	tickLog.info(`Confirmation code: ${response1}`, true);
	let response2 = await serialEntrepreneurBackendHandlers.registerUserStep2(email, response1);
	let response3 = await serialEntrepreneurBackendHandlers.loginUserViaMail(email, password);
	tickLog.info(`JWT token: ${response3}`, true);
	expect(response3).toBeDefined();
	expect(response3.payload.token.length).toBeGreaterThan(0);
	let decoded = serialEntrepreneurBackendHandlers.exportedForTesting.jwtDecode(response3.payload.token);
	tickLog.info(`Decoded JWT token: ${JSON.stringify(decoded)}`, true);
	expect(decoded).toBeDefined();
	expect(decoded.email).toEqual(email);
	try {
		await serialEntrepreneurBackendHandlers.changePassword(response3.payload.token, 'wrong-old-password', newPassword);
		expect(true).toEqual(false); // should not reach this line
	} catch (error) {
		expect(error).toEqual(uiTexts.invalidOldPassword);
	}
	let response4 = await serialEntrepreneurBackendHandlers.changePassword(response3.payload.token, password, newPassword);
	tickLog.info(`Change password response: ${JSON.stringify(response4)}`, true);
	expect(response4).toBeDefined();
	expect(response4).toEqual(uiTexts.passwordChanged);
	let response5 = await serialEntrepreneurBackendHandlers.loginUserViaMail(email, newPassword);
	tickLog.info(`New JWT token: ${JSON.stringify(response5)}`, true);
	expect(response5).toBeDefined();
	expect(response5.payload.token.length).toBeGreaterThan(0);
	let decoded2 = serialEntrepreneurBackendHandlers.exportedForTesting.jwtDecode(response5.payload.token);
	tickLog.info(`Decoded JWT token: ${JSON.stringify(decoded2)}`, true);
	expect(decoded2).toBeDefined();
	expect(decoded2.email).toEqual(email);
});

test('Password change - invalid email', async () => {
	let now = Date.now();
	let name = `${now}`;
	let middlename = `${now}`;
	let lastname = `${now}`;
	let email = `${now}@yopmail.com`;
	let password = `${now}`;
	let newPassword = `${now}-NEW`;
	let birthdate = `12.23.1912`; // Format is DD.MM.YYYY
	let gender = `${now % 2 === 0 ? 'female' : 'male'}`;
	let response1 = await serialEntrepreneurBackendHandlers.registerUserStep1(name, middlename, lastname, email, password, birthdate, gender);
	tickLog.info(`Confirmation code: ${response1}`, true);
	let response2 = await serialEntrepreneurBackendHandlers.registerUserStep2(email, response1);
	let response3 = await serialEntrepreneurBackendHandlers.loginUserViaMail(email, password);
	tickLog.info(`JWT token: ${response3}`, true);
	expect(response3).toBeDefined();
	expect(response3.payload.token.length).toBeGreaterThan(0);
	let decoded = serialEntrepreneurBackendHandlers.exportedForTesting.jwtDecode(response3.payload.token);
	tickLog.info(`Decoded JWT token: ${JSON.stringify(decoded)}`, true);
	expect(decoded).toBeDefined();
	expect(decoded.email).toEqual(email);
	try {
		tickLog.info(`#############################################`, true);
		let garbageJWT = `SOME-GARBAGE-TOKEN`;
		tickLog.info(`IT IS NORMAL THAT YOU SEE AN ERROR IN BELOW FOR FAILURE OF THE JWT: ${garbageJWT}`, true);
		await serialEntrepreneurBackendHandlers.changePassword(garbageJWT, password, newPassword);
		expect(true).toEqual(false); // should not reach this line
	} catch (error) {
		tickLog.info(`#############################################`, true);
		expect(error).toEqual(uiTexts.unknownError);
	}
});

test('Password reset', async () => {
	let now = Date.now();
	let name = `${now}`;
	let middlename = `${now}`;
	let lastname = `${now}`;
	let email = `${now}@yopmail.com`;
	let password = `${now}`;
	let newPassword = `${now}-NEW`;
	let birthdate = `12.23.1912`; // Format is DD.MM.YYYY
	let gender = `${now % 2 === 0 ? 'female' : 'male'}`;
	let response1 = await serialEntrepreneurBackendHandlers.registerUserStep1(name, middlename, lastname, email, password, birthdate, gender);
	tickLog.info(`Confirmation code: ${response1}`, true);
	let response2 = await serialEntrepreneurBackendHandlers.registerUserStep2(email, response1);
	let response3 = await serialEntrepreneurBackendHandlers.loginUserViaMail(email, password);
	tickLog.info(`JWT token: ${response3}`, true);
	expect(response3).toBeDefined();
	expect(response3.payload.token.length).toBeGreaterThan(0);
	let decoded = serialEntrepreneurBackendHandlers.exportedForTesting.jwtDecode(response3.payload.token);
	tickLog.info(`Decoded JWT token: ${JSON.stringify(decoded)}`, true);
	expect(decoded).toBeDefined();
	expect(decoded.email).toEqual(email);
	let response4 = await serialEntrepreneurBackendHandlers.resetPasswordStep1(email);
	tickLog.info(`Reset password step 1 confirmation code: ${JSON.stringify(response4)}`, true);
	expect(response4).toBeDefined();
	expect(response4.length).toEqual(7);
	let response5 = await serialEntrepreneurBackendHandlers.resetPasswordStep2(email, response4, newPassword);
	tickLog.info(`Reset password step 2 response: ${JSON.stringify(response5)}`, true);
	expect(response5).toBeDefined();
	expect(response5).toEqual(uiTexts.passwordChanged);
	let response6 = await serialEntrepreneurBackendHandlers.loginUserViaMail(email, newPassword);
	tickLog.info(`New JWT token: ${JSON.stringify(response6)}`, true);
	expect(response6).toBeDefined();
	expect(response6.payload.token.length).toBeGreaterThan(0);
	let decoded2 = serialEntrepreneurBackendHandlers.exportedForTesting.jwtDecode(response6.payload.token);
	tickLog.info(`Decoded JWT token: ${JSON.stringify(decoded2)}`, true);
	expect(decoded2).toBeDefined();
	expect(decoded2.email).toEqual(email);
});

test('Update user data', async () => {
	let now = Date.now();
	let name = `${now}`;
	let middlename = `${now}`;
	let lastname = `${now}`;
	let email = `${now}@yopmail.com`;
	let password = `${now}`;
	let birthdate = `12.23.1912`; // Format is DD.MM.YYYY
	let gender = `${now % 2 === 0 ? 'female' : 'male'}`;
	let response1 = await serialEntrepreneurBackendHandlers.registerUserStep1(name, middlename, lastname, email, password, birthdate, gender);
	tickLog.info(`Confirmation code: ${response1}`, true);
	let response2 = await serialEntrepreneurBackendHandlers.registerUserStep2(email, response1);
	let response3 = await serialEntrepreneurBackendHandlers.loginUserViaMail(email, password);
	tickLog.info(`JWT token: ${response3}`, true);
	expect(response3).toBeDefined();
	expect(response3.payload.token.length).toBeGreaterThan(0);
	let decoded = serialEntrepreneurBackendHandlers.exportedForTesting.jwtDecode(response3.payload.token);
	tickLog.info(`Decoded JWT token: ${JSON.stringify(decoded)}`, true);
	expect(decoded).toBeDefined();
	expect(decoded.email).toEqual(email);
	let response4 = await serialEntrepreneurBackendHandlers.updateUserData(response3.payload.token, 'new-name', 'new-middlename', 'new-lastname', '12.31.1980', 'new-gender');
	tickLog.info(`Update user data response: ${JSON.stringify(response4)}`, true);
	expect(response4).toBeDefined();
	expect(response4).toEqual(uiTexts.userDataUpdated);
	let response4_1 = await runSQL(poolName, sqls.selectUser, [email]);
	tickLog.info(`User data from DB: ${JSON.stringify(response4_1)}`, true);
	expect(response4_1).toBeDefined();
	expect(response4_1.rows.length).toEqual(1);
	expect(response4_1.rows[0].name).toEqual('new-name');
	expect(response4_1.rows[0].middlename).toEqual('new-middlename');
	expect(response4_1.rows[0].lastname).toEqual('new-lastname');
	expect(response4_1.rows[0].birthdate).toEqual(new Date('1980-12-31'));
	expect(response4_1.rows[0].gender).toEqual('new-gender');
	let response5 = await serialEntrepreneurBackendHandlers.loginUserViaMail(email, password);
	tickLog.info(`New JWT token: ${JSON.stringify(response5)}`, true);
	expect(response5).toBeDefined();
	expect(response5.payload.token.length).toBeGreaterThan(0);
	let decoded2 = serialEntrepreneurBackendHandlers.exportedForTesting.jwtDecode(response5.payload.token);
	tickLog.info(`Decoded JWT token: ${JSON.stringify(decoded2)}`, true);
	expect(decoded2).toBeDefined();
	expect(decoded2.email).toEqual(email);
});

test('Get user data', async () => {
	let now = Date.now();
	let name = `${now}`;
	let middlename = `${now}`;
	let lastname = `${now}`;
	let email = `${now}@yopmail.com`;
	let password = `${now}`;
	let birthdate = `12.23.1912`; // Format is DD.MM.YYYY
	let gender = `${now % 2 === 0 ? 'female' : 'male'}`;
	let response1 = await serialEntrepreneurBackendHandlers.registerUserStep1(name, middlename, lastname, email, password, birthdate, gender);
	tickLog.info(`Confirmation code: ${response1}`, true);
	let response2 = await serialEntrepreneurBackendHandlers.registerUserStep2(email, response1);
	let response3 = await serialEntrepreneurBackendHandlers.loginUserViaMail(email, password);
	tickLog.info(`JWT token: ${response3}`, true);
	expect(response3).toBeDefined();
	expect(response3.payload.token.length).toBeGreaterThan(0);
	let decoded = serialEntrepreneurBackendHandlers.exportedForTesting.jwtDecode(response3.payload.token);
	tickLog.info(`Decoded JWT token: ${JSON.stringify(decoded)}`, true);
	expect(decoded).toBeDefined();
	expect(decoded.email).toEqual(email);
	let response4 = await serialEntrepreneurBackendHandlers.updateUserData(response3.payload.token, 'new-name', 'new-middlename', 'new-lastname', '12.31.1980', 'new-gender');
	tickLog.info(`Update user data response: ${JSON.stringify(response4)}`, true);
	expect(response4).toBeDefined();
	expect(response4).toEqual(uiTexts.userDataUpdated);
	let response4_1 = await runSQL(poolName, sqls.selectUser, [email]);
	tickLog.info(`User data from DB: ${JSON.stringify(response4_1)}`, true);
	expect(response4_1).toBeDefined();
	expect(response4_1.rows.length).toEqual(1);
	expect(response4_1.rows[0].name).toEqual('new-name');
	expect(response4_1.rows[0].middlename).toEqual('new-middlename');
	expect(response4_1.rows[0].lastname).toEqual('new-lastname');
	expect(response4_1.rows[0].birthdate).toEqual(new Date('1980-12-31'));
	expect(response4_1.rows[0].gender).toEqual('new-gender');
	let response5 = await serialEntrepreneurBackendHandlers.loginUserViaMail(email, password);
	tickLog.info(`New JWT token: ${JSON.stringify(response5)}`, true);
	expect(response5).toBeDefined();
	expect(response5.payload.token.length).toBeGreaterThan(0);
	let decoded2 = serialEntrepreneurBackendHandlers.exportedForTesting.jwtDecode(response5.payload.token);
	tickLog.info(`Decoded JWT token: ${JSON.stringify(decoded2)}`, true);
	expect(decoded2).toBeDefined();
	expect(decoded2.email).toEqual(email);
	let response6 = await serialEntrepreneurBackendHandlers.getUserData(response5.payload.token);
	tickLog.info(`User data: ${JSON.stringify(response6)}`, true);
	expect(response6).toBeDefined();
	expect(response6.rows[0].name).toEqual('new-name');
	expect(response6.rows[0].middlename).toEqual('new-middlename');
	expect(response6.rows[0].lastname).toEqual('new-lastname');
	expect(response6.rows[0].birthdate).toEqual(new Date('1980-12-31'));
	expect(response6.rows[0].email).toEqual(email);
});


test('Prepare users for frontend tests', async () => {
	let now = Date.now();
	let testUserCount = 20
	let names = [...Array(testUserCount).keys()].map(v => `${now}-${v}`);
	let middlenames = [...Array(testUserCount).keys()].map(v => `${now}-${v}`);
	let lastnames = [...Array(testUserCount).keys()].map(v => `${now}-${v}`);
	let emails = [...Array(testUserCount).keys()].map(v => `${now}-${v}@yopmail.com`);
	let passwords = [...Array(testUserCount).keys()].map(v => `${now}-${v}`);
	let birthdates = [...Array(testUserCount).keys()].map((v, i) => `${i % 2 === 0 ? '12.23.2022' : '12.23.2021'}`);
	let genders = [...Array(testUserCount).keys()].map((v, i) => `${i % 2 === 0 ? 'Female' : 'Male'}`);

	let outputText = '\FRONTEND TEST USERS';
	for (let i = 0; i < names.length; i++) {
		let response1 = await serialEntrepreneurBackendHandlers.registerUserStep1(names[i], middlenames[i], lastnames[i], emails[i], passwords[i], birthdates[i], genders[i]);
		let response2 = await serialEntrepreneurBackendHandlers.registerUserStep2(emails[i], response1);
		let l_decodedToken = serialEntrepreneurBackendHandlers.exportedForTesting.jwtDecode(response2);
		expect(l_decodedToken).toHaveProperty("userId");
		expect(response2).toBeDefined();
		expect(response2.length).toBeGreaterThan(0);
		let response3 = await runSQL(poolName, sqls.selectUser, [`${emails[i]}`]);
		expect(response3.rows.length).toEqual(1);
		let l_curUserData = {
			name: names[i],
			email: emails[i],
			middlename: middlenames[i],
			lastname: lastnames[i],			
			password: passwords[i],
			birthdate: birthdates[i],
			gender: genders[i],
			token: response2,
		}
		outputText += `\n\x1b[0;32m${JSON.stringify(l_curUserData)}\x1b[0m`;
	}
	tickLog.info(outputText, true);
}, 120000);

test('ssoBridgeViaEmail', async () => {
	let now = Date.now();
	let name = `${now}`;
	let middlename = `${now}`;
	let lastname = `${now}`;
	let email = `${now}@yopmail.com`;
	let password = `${now}`;
	let birthdate = `12.23.1912`; // Format is DD.MM.YYYY
	let gender = `${now % 2 === 0 ? 'female' : 'male'}`;
	// normally this user should have been generated by the SSO flow but for testing purposes we generate it here
	let response1 = await serialEntrepreneurBackendHandlers.registerUserStep1(name, middlename, lastname, email, password, birthdate, gender);
	tickLog.info(`Confirmation code: ${response1}`, true);
	let response2 = await serialEntrepreneurBackendHandlers.registerUserStep2(email, response1);
	let response3 = await serialEntrepreneurBackendHandlers.ssoBridgeViaEmail(email); 
	tickLog.info(`JWT token: ${response3}`, true);
	expect(response3).toBeDefined();
	expect(response3.payload.token.length).toBeGreaterThan(0);
	let decoded = serialEntrepreneurBackendHandlers.exportedForTesting.jwtDecode(response3.payload.token);
	tickLog.info(`Decoded JWT token: ${JSON.stringify(decoded)}`, true);
	expect(decoded).toBeDefined();
	expect(decoded.email).toEqual(email);
});