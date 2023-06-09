
// CHECK-BEFORE-BUILD 
// Obtain following users from backend jest tests
let getUserId = 0;
const testUsers = [
	{ "name": "1686322241239-6", "email": "1686322241239-6@yopmail.com", "middlename": "1686322241239-6", "lastname": "1686322241239-6", "password": "1686322241239-6", "birthdate": "12.23.2022", "gender": "Female", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUyLCJlbWFpbCI6IjE2ODYzMjIyNDEyMzktNkB5b3BtYWlsLmNvbSIsImlhdCI6MTY4NjMyMjI0NywiZXhwIjoxNjg5MDAwNjQ3fQ.NCvCIOREkv0PRHlRkg8nCey0t18xNK2EkPy6q-9Q8cc" },
	{ "name": "1686322241239-7", "email": "1686322241239-7@yopmail.com", "middlename": "1686322241239-7", "lastname": "1686322241239-7", "password": "1686322241239-7", "birthdate": "12.23.2021", "gender": "Male", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUzLCJlbWFpbCI6IjE2ODYzMjIyNDEyMzktN0B5b3BtYWlsLmNvbSIsImlhdCI6MTY4NjMyMjI0OCwiZXhwIjoxNjg5MDAwNjQ4fQ.ykwqq_aF0KibV4Q9aRCPwWvipuw5ZV3a03QJCnI2zYs" },
	{ "name": "1686322241239-8", "email": "1686322241239-8@yopmail.com", "middlename": "1686322241239-8", "lastname": "1686322241239-8", "password": "1686322241239-8", "birthdate": "12.23.2022", "gender": "Female", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjU0LCJlbWFpbCI6IjE2ODYzMjIyNDEyMzktOEB5b3BtYWlsLmNvbSIsImlhdCI6MTY4NjMyMjI0OSwiZXhwIjoxNjg5MDAwNjQ5fQ.VFozdUJeW9GKUWsouQB6tT5Bq5bB9JBmOaSWJdFSzWI" },
	{ "name": "1686322241239-9", "email": "1686322241239-9@yopmail.com", "middlename": "1686322241239-9", "lastname": "1686322241239-9", "password": "1686322241239-9", "birthdate": "12.23.2021", "gender": "Male", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjU1LCJlbWFpbCI6IjE2ODYzMjIyNDEyMzktOUB5b3BtYWlsLmNvbSIsImlhdCI6MTY4NjMyMjI1MCwiZXhwIjoxNjg5MDAwNjUwfQ.iNRr3m-N-wHAZPfP-WKBfa4w5RkXdI5fYhiCUAbeXxs" },
	{ "name": "1686322241239-10", "email": "1686322241239-10@yopmail.com", "middlename": "1686322241239-10", "lastname": "1686322241239-10", "password": "1686322241239-10", "birthdate": "12.23.2022", "gender": "Female", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjU2LCJlbWFpbCI6IjE2ODYzMjIyNDEyMzktMTBAeW9wbWFpbC5jb20iLCJpYXQiOjE2ODYzMjIyNTEsImV4cCI6MTY4OTAwMDY1MX0.jGgRB-m-gknvpQU_VgnLCW498uT-rVcz59TmRZUNpGE" },
	{ "name": "1686322241239-11", "email": "1686322241239-11@yopmail.com", "middlename": "1686322241239-11", "lastname": "1686322241239-11", "password": "1686322241239-11", "birthdate": "12.23.2021", "gender": "Male", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjU3LCJlbWFpbCI6IjE2ODYzMjIyNDEyMzktMTFAeW9wbWFpbC5jb20iLCJpYXQiOjE2ODYzMjIyNTIsImV4cCI6MTY4OTAwMDY1Mn0.pqg_zFGQj65Rw9lHi1K4p_bdcp0e-QwOiofn2uVuIlg" },
	{ "name": "1686322241239-12", "email": "1686322241239-12@yopmail.com", "middlename": "1686322241239-12", "lastname": "1686322241239-12", "password": "1686322241239-12", "birthdate": "12.23.2022", "gender": "Female", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjU4LCJlbWFpbCI6IjE2ODYzMjIyNDEyMzktMTJAeW9wbWFpbC5jb20iLCJpYXQiOjE2ODYzMjIyNTMsImV4cCI6MTY4OTAwMDY1M30.0fUWlXJiOggj_EbLSmSqOiMCRc-byCjwT-tPdz7dMBI" },
	{ "name": "1686322241239-13", "email": "1686322241239-13@yopmail.com", "middlename": "1686322241239-13", "lastname": "1686322241239-13", "password": "1686322241239-13", "birthdate": "12.23.2021", "gender": "Male", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjU5LCJlbWFpbCI6IjE2ODYzMjIyNDEyMzktMTNAeW9wbWFpbC5jb20iLCJpYXQiOjE2ODYzMjIyNTQsImV4cCI6MTY4OTAwMDY1NH0.wl4VVhptdYI9GGM0CUexKmtmPwMkUyLO_2vp3RiiADs" },
	{ "name": "1686322241239-14", "email": "1686322241239-14@yopmail.com", "middlename": "1686322241239-14", "lastname": "1686322241239-14", "password": "1686322241239-14", "birthdate": "12.23.2022", "gender": "Female", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYwLCJlbWFpbCI6IjE2ODYzMjIyNDEyMzktMTRAeW9wbWFpbC5jb20iLCJpYXQiOjE2ODYzMjIyNTUsImV4cCI6MTY4OTAwMDY1NX0.tRKXO4xw0KAhKlx53IZKN4fG9y2MQT-JxHLQlNys1X8" },
	{ "name": "1686322241239-15", "email": "1686322241239-15@yopmail.com", "middlename": "1686322241239-15", "lastname": "1686322241239-15", "password": "1686322241239-15", "birthdate": "12.23.2021", "gender": "Male", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYxLCJlbWFpbCI6IjE2ODYzMjIyNDEyMzktMTVAeW9wbWFpbC5jb20iLCJpYXQiOjE2ODYzMjIyNTYsImV4cCI6MTY4OTAwMDY1Nn0.OrXDg2AogodMotOtSXdvLg2iMHg-4IcVwGCOnvvH3ug" },
	{ "name": "1686322241239-16", "email": "1686322241239-16@yopmail.com", "middlename": "1686322241239-16", "lastname": "1686322241239-16", "password": "1686322241239-16", "birthdate": "12.23.2022", "gender": "Female", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYyLCJlbWFpbCI6IjE2ODYzMjIyNDEyMzktMTZAeW9wbWFpbC5jb20iLCJpYXQiOjE2ODYzMjIyNTcsImV4cCI6MTY4OTAwMDY1N30.BtTfDc8-VWPXZsTNZfHZYcUmia0SNYGva6D1W8xQmwg" },
	{ "name": "1686322241239-17", "email": "1686322241239-17@yopmail.com", "middlename": "1686322241239-17", "lastname": "1686322241239-17", "password": "1686322241239-17", "birthdate": "12.23.2021", "gender": "Male", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYzLCJlbWFpbCI6IjE2ODYzMjIyNDEyMzktMTdAeW9wbWFpbC5jb20iLCJpYXQiOjE2ODYzMjIyNTgsImV4cCI6MTY4OTAwMDY1OH0.ADaHC28OKe2BcwbsbXXc2bHPXPYMdSW38BZUAgtOv2c" },
	{ "name": "1686322241239-18", "email": "1686322241239-18@yopmail.com", "middlename": "1686322241239-18", "lastname": "1686322241239-18", "password": "1686322241239-18", "birthdate": "12.23.2022", "gender": "Female", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY0LCJlbWFpbCI6IjE2ODYzMjIyNDEyMzktMThAeW9wbWFpbC5jb20iLCJpYXQiOjE2ODYzMjIyNTksImV4cCI6MTY4OTAwMDY1OX0.C6QTmPygHri62HgZE5_Z2tD69MB91KhTYZq5TjqVbT4" },
	{ "name": "1686322241239-19", "email": "1686322241239-19@yopmail.com", "middlename": "1686322241239-19", "lastname": "1686322241239-19", "password": "1686322241239-19", "birthdate": "12.23.2021", "gender": "Male", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY1LCJlbWFpbCI6IjE2ODYzMjIyNDEyMzktMTlAeW9wbWFpbC5jb20iLCJpYXQiOjE2ODYzMjIyNjAsImV4cCI6MTY4OTAwMDY2MH0.W0Vm_HFbC09Gq5YaLD69mtRTO9mwwHkXee1aZ3f1Ugk" }
];



const apiBackend = 'http://development.computatus.com:61981'; // modify this with your backend

const tickLog = require('tick-log');
const serialEntrepreneurFrontendHandlers = require('../serial-entrepreneur-frontend');

beforeAll(async () => {
	serialEntrepreneurFrontendHandlers.init({
		apiBackend: apiBackend,
		debugMode: true,
	});
	jest.setTimeout(10000);
});

// jest.setTimeout(10000)

test('Test testHandler', async () => {
	const fSuccess = (props, retval) => {
		tickLog.info(`fSuccess: ${JSON.stringify(props)} ${JSON.stringify(retval)}`, true);
		expect(retval).toBeTruthy();
	}
	const fFail = (props, error) => {
		tickLog.error(`fFail: ${JSON.stringify(props)} ${JSON.stringify(error)}`, true);
		expect(true).toBe(false);
	}
	await serialEntrepreneurFrontendHandlers.testHandler('name123', 'email123', 'password123', fSuccess, fFail);
});

test('Test registerUserStep1', async () => {
	let now = Date.now();
	let email = `${now}@yopmail.com`;
	let name = `test ${now}`;
	let middlename = `test ${now}`;
	let lastname = `test ${now}`;
	let birthdate = "2012-12-23"
	let gender = (now % 2 === 0) ? 'Male' : 'Female';
	let password = `password-${now}`;
	const fSuccess = (props, retval) => {
		tickLog.info(`fSuccess: ${JSON.stringify(props)} ${JSON.stringify(retval)}`, true);
		expect(retval).toBeTruthy();
	}
	const fFail = (props, e_) => {
		tickLog.error(`fFail: ${JSON.stringify(props)} ${JSON.stringify(e_)}`, true);
		expect(true).toBe(false);
	}
	await serialEntrepreneurFrontendHandlers.registerUserStep1(name, middlename, lastname, email, password, birthdate, gender, fSuccess, fFail);
});

test('Test registerUserStep2 should fail because we don\'t know the confirmation code without checking the email', async () => {
	let now = Date.now();
	let email = `${now}@yopmail.com`;
	let confirmationCode = 'SOME-GARBAGE-CONFIRMATION-CODE';
	const fSuccess = (props, retval) => {
		tickLog.info(`fSuccess: ${JSON.stringify(props)} ${JSON.stringify(retval)}`, true);
		expect(true).toBe(false); // different than normal scenarios, we want this to fail
	}
	const fFail = (props, error) => {
		tickLog.error(`fFail: ${JSON.stringify(props)} ${JSON.stringify(error)}`, true);
		expect(error).toMatchObject({
			"result": "FAIL",
			"error": "Invalid confirmation code."
		});
	}
	try {
		await serialEntrepreneurFrontendHandlers.registerUserStep2(email, confirmationCode, fSuccess, fFail);
	} catch (error) {
		expect(error).toMatchObject({
			"result": "FAIL",
			"error": "Invalid confirmation code."
		});
	}
});

test('removeUser', async () => {
	let userIndex = getUserId++;
	tickLog.info(`removeUser: index ${userIndex} name: ${JSON.stringify(testUsers[userIndex].name)}`, true);
	const fSuccess = (props, retval) => {
		tickLog.info(`fSuccess: ${JSON.stringify(props)} ${JSON.stringify(retval)}`, true);
		expect(retval).toMatchObject({ "result": "OK" })
	}
	const fFail = (props, error) => {
		tickLog.error(`fFail: ${JSON.stringify(props)} ${JSON.stringify(error)}`, true);
		expect(true).toBe(false);
	}
	await serialEntrepreneurFrontendHandlers.removeUser(testUsers[userIndex].email, testUsers[userIndex].token, fSuccess, fFail);
});

test('loginuserviamail', async () => {
	let userIndex = getUserId;
	tickLog.info(`loginuserviamail: index ${userIndex} name: ${JSON.stringify(testUsers[userIndex].name)}`, true);
	const fSuccess = (props, retval) => {
		tickLog.info(`fSuccess: ${JSON.stringify(props)} ${JSON.stringify(retval)}`, true);
		expect(retval).toMatchObject({ "result": "OK" });
		expect(retval).toHaveProperty('payload');
		expect(retval.payload.token.length).toBeGreaterThan(0);
	}
	const fFail = (props, error) => {
		tickLog.error(`fFail: ${JSON.stringify(props, null, '\t')}\n${JSON.stringify(error, null, '\t')}`, true);
		expect(true).toBe(false);
	}
	await serialEntrepreneurFrontendHandlers.loginUserViaMail(testUsers[userIndex].email, testUsers[userIndex].password, fSuccess, fFail);
});

test('loginuserviatoken', async () => {
	let userIndex = getUserId;
	tickLog.info(`loginuserviatoken: index ${userIndex} name: ${JSON.stringify(testUsers[userIndex].name)}`, true);
	const fSuccess = (props, retval) => {
		tickLog.info(`fSuccess: ${JSON.stringify(props)} ${JSON.stringify(retval)}`, true);
		expect(retval).toMatchObject({ "result": "OK" });
		expect(retval).toHaveProperty('payload');
		expect(retval.payload.token.length).toBeGreaterThan(0);
	}
	const fFail = (props, error) => {
		tickLog.error(`fFail: ${JSON.stringify(props)} ${JSON.stringify(error)}`, true);
		expect(true).toBe(false);
	}
	await serialEntrepreneurFrontendHandlers.loginUserViaToken(testUsers[userIndex].token, fSuccess, fFail);
});

test('changepassword', async () => {
	let userIndex = getUserId;
	tickLog.info(`changepassword: index ${userIndex} name: ${JSON.stringify(testUsers[userIndex].name)}`, true);
	const fSuccess = (props, retval) => {
		tickLog.info(`fSuccess: ${JSON.stringify(props)} ${JSON.stringify(retval)}`, true);
		expect(retval).toMatchObject({ "result": "OK" })
	}
	const fFail = (props, error) => {
		tickLog.error(`fFail: ${JSON.stringify(props)} ${JSON.stringify(error)}`, true);
		expect(true).toBe(false);
	}
	// change to the same password so that test data can be reused.
	await serialEntrepreneurFrontendHandlers.changePassword(testUsers[userIndex].token, testUsers[userIndex].password, testUsers[userIndex].password, fSuccess, fFail);
});


test('resetPasswordStep1', async () => {
	let userIndex = getUserId;
	tickLog.info(`resetPasswordStep1: index ${userIndex} name: ${JSON.stringify(testUsers[userIndex].name)}`, true);
	const fSuccess = (props, retval) => {
		tickLog.info(`fSuccess: ${JSON.stringify(props)} ${JSON.stringify(retval)}`, true);
		expect(retval).toMatchObject({ "result": "OK" })
	}
	const fFail = (props, error) => {
		tickLog.error(`fFail: ${JSON.stringify(props)} ${JSON.stringify(error)}`, true);
		expect(true).toBe(false);
	}
	await serialEntrepreneurFrontendHandlers.resetPasswordStep1(testUsers[userIndex].email, fSuccess, fFail);
});

test('resetPasswordStep2', async () => {
	let userIndex = getUserId;
	tickLog.info(`resetPasswordStep2: index ${userIndex} name: ${JSON.stringify(testUsers[userIndex].name)}`, true);
	const fSuccess = (props, retval) => {
		tickLog.info(`fSuccess: ${JSON.stringify(props)} ${JSON.stringify(retval)}`, true);
		expect(true).toBe(false);
	}
	const fFail = (props, error) => {
		tickLog.error(`fFail: ${JSON.stringify(props)} ${JSON.stringify(error)}`, true);
		expect(error).toMatchObject({ "result": "FAIL", "error": "Invalid confirmation code." })
	}
	try {
		await serialEntrepreneurFrontendHandlers.resetPasswordStep2(testUsers[userIndex].email, 'SOME-GARBAGE-CONFIRMATION-CODE', testUsers[userIndex].password, fSuccess, fFail);
	} catch (error) {
		tickLog.error(`Correctly caught exception: ${JSON.stringify(error)}`, true);
		expect(error).toMatchObject({ "result": "FAIL", "error": "Invalid confirmation code." })
	}
});

test('updateuserdata', async () => {
	let userIndex = getUserId;
	tickLog.info(`updateuserdata: index ${userIndex} name: ${JSON.stringify(testUsers[userIndex].name)} middlename: ${JSON.stringify(testUsers[userIndex].middlename)} lastname: ${JSON.stringify(testUsers[userIndex].lastname)} birthdate: ${JSON.stringify(testUsers[userIndex].birthdate)} gender: ${JSON.stringify(testUsers[userIndex].gender)}`, true);
	const fSuccess = (props, retval) => {
		tickLog.info(`fSuccess: ${JSON.stringify(props)} ${JSON.stringify(retval)}`, true);
		expect(retval).toMatchObject({ "result": "OK" })
	}
	const fFail = (props, error) => {
		tickLog.error(`fFail: ${JSON.stringify(props)} ${JSON.stringify(error)}`, true);
		expect(true).toBe(false);
	}
	await serialEntrepreneurFrontendHandlers.updateUserData(testUsers[userIndex].token, "SOME NEW NAME", "SOME NEW middlename", "SOME NEW lastname", "2022-12-20", "new-gender", fSuccess, fFail);
});

test('getuserdata', async () => {
	let userIndex = ++getUserId;
	tickLog.info(`updateuserdata: index ${userIndex} name: ${JSON.stringify(testUsers[userIndex].name)} middlename: ${JSON.stringify(testUsers[userIndex].middlename)} lastname: ${JSON.stringify(testUsers[userIndex].lastname)} birthdate: ${JSON.stringify(testUsers[userIndex].birthdate)} gender: ${JSON.stringify(testUsers[userIndex].gender)}`, true);
	const fSuccess = (props, retval) => {
		tickLog.info(`fSuccess: ${JSON.stringify(props)} ${JSON.stringify(retval)}`, true);
		expect(retval).toMatchObject({ "result": "OK" })
	}
	const fFail = (props, error) => {
		tickLog.error(`fFail: ${JSON.stringify(props)} ${JSON.stringify(error)}`, true);
		expect(true).toBe(false);
	}
	await serialEntrepreneurFrontendHandlers.updateUserData(testUsers[userIndex].token, "SOME NEW NAME", "SOME NEW middlename", "SOME NEW lastname", "2022-12-20", "new-gender", fSuccess, fFail);

	const fSuccess2 = (props, retval) => {
		tickLog.info(`fSuccess: ${JSON.stringify(props)} ${JSON.stringify(retval)}`, true);
		expect(retval).toMatchObject({ "result": "OK" })
	}
	const fFail2 = (props, error) => {
		tickLog.error(`fFail: ${JSON.stringify(props)} ${JSON.stringify(error)}`, true);
		expect(true).toBe(false);
	}
	await serialEntrepreneurFrontendHandlers.getUserData(testUsers[userIndex].token, fSuccess2, fFail2);
});
