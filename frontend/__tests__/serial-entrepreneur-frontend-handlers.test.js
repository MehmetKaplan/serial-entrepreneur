
// CHECK-BEFORE-BUILD 
// Obtain following users from backend jest tests
let getUserId = 0;
const testUsers = [
	{"name":"1666991317985-8","email":"1666991317985-8@yopmail.com","password":"1666991317985-8","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYxMiwiZW1haWwiOiIxNjY2OTkxMzE3OTg1LThAeW9wbWFpbC5jb20iLCJpYXQiOjE2NjY5OTEzMjYsImV4cCI6MTY2OTY2OTcyNn0.rSwpuPnwLMqbc-psfi_p9Iofm8oGgBOXfFa8AKTO5ac"},
	{"name":"1666991317985-9","email":"1666991317985-9@yopmail.com","password":"1666991317985-9","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYxMywiZW1haWwiOiIxNjY2OTkxMzE3OTg1LTlAeW9wbWFpbC5jb20iLCJpYXQiOjE2NjY5OTEzMjcsImV4cCI6MTY2OTY2OTcyN30.4oy8jRU3thAOfLpySCt4cNCXEkZWHyy98vKipRXMTuU"},
	{"name":"1666991317985-10","email":"1666991317985-10@yopmail.com","password":"1666991317985-10","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYxNCwiZW1haWwiOiIxNjY2OTkxMzE3OTg1LTEwQHlvcG1haWwuY29tIiwiaWF0IjoxNjY2OTkxMzI4LCJleHAiOjE2Njk2Njk3Mjh9.QQEXKDIqfYA-vpEZNwIlZHCyAYE27U-mjrkb4z_hBYQ"},
	{"name":"1666991317985-11","email":"1666991317985-11@yopmail.com","password":"1666991317985-11","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYxNSwiZW1haWwiOiIxNjY2OTkxMzE3OTg1LTExQHlvcG1haWwuY29tIiwiaWF0IjoxNjY2OTkxMzI5LCJleHAiOjE2Njk2Njk3Mjl9.NE4ym9rSAYB3UJgWHZKlrXVI6Jfr1MEF14ljSJ5m7j4"},
	{"name":"1666991317985-12","email":"1666991317985-12@yopmail.com","password":"1666991317985-12","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYxNiwiZW1haWwiOiIxNjY2OTkxMzE3OTg1LTEyQHlvcG1haWwuY29tIiwiaWF0IjoxNjY2OTkxMzI5LCJleHAiOjE2Njk2Njk3Mjl9.e4aW2T8iFTczP_hdwR8FLc5IGDfxW9C8EKgJhGH4jfY"},
	{"name":"1666991317985-13","email":"1666991317985-13@yopmail.com","password":"1666991317985-13","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYxNywiZW1haWwiOiIxNjY2OTkxMzE3OTg1LTEzQHlvcG1haWwuY29tIiwiaWF0IjoxNjY2OTkxMzMwLCJleHAiOjE2Njk2Njk3MzB9.rOZKvBZKvo4V8wNJZY-fvSYothDCNUNmZ-ViavZ3V3M"},
	{"name":"1666991317985-14","email":"1666991317985-14@yopmail.com","password":"1666991317985-14","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYxOCwiZW1haWwiOiIxNjY2OTkxMzE3OTg1LTE0QHlvcG1haWwuY29tIiwiaWF0IjoxNjY2OTkxMzMxLCJleHAiOjE2Njk2Njk3MzF9.T8ryT63AkUkY1y_88HmiDYWHJhOywphQfA2edEcX49M"},
	{"name":"1666991317985-15","email":"1666991317985-15@yopmail.com","password":"1666991317985-15","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYxOSwiZW1haWwiOiIxNjY2OTkxMzE3OTg1LTE1QHlvcG1haWwuY29tIiwiaWF0IjoxNjY2OTkxMzMyLCJleHAiOjE2Njk2Njk3MzJ9.fDs2pCnkwDzqHWWiNHSuOWBC4mfXmbKf-Rdpb9pOX90"},
	{"name":"1666991317985-16","email":"1666991317985-16@yopmail.com","password":"1666991317985-16","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYyMCwiZW1haWwiOiIxNjY2OTkxMzE3OTg1LTE2QHlvcG1haWwuY29tIiwiaWF0IjoxNjY2OTkxMzMzLCJleHAiOjE2Njk2Njk3MzN9.U8xVxp7TVytjRonzxSh8YCsn9EEieux9uMajEMvgFPE"},
	{"name":"1666991317985-17","email":"1666991317985-17@yopmail.com","password":"1666991317985-17","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYyMSwiZW1haWwiOiIxNjY2OTkxMzE3OTg1LTE3QHlvcG1haWwuY29tIiwiaWF0IjoxNjY2OTkxMzM0LCJleHAiOjE2Njk2Njk3MzR9.h8ARy0QPFX88gbW3QVHNmeH2SvtDEWiKSi6_XLbuYKQ"},
	{"name":"1666991317985-18","email":"1666991317985-18@yopmail.com","password":"1666991317985-18","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYyMiwiZW1haWwiOiIxNjY2OTkxMzE3OTg1LTE4QHlvcG1haWwuY29tIiwiaWF0IjoxNjY2OTkxMzM1LCJleHAiOjE2Njk2Njk3MzV9.YAgqKJ3Wmz1ZDvt6cELsi8rbkVrIvGKcI7SrlPftIZQ"},
	{"name":"1666991317985-19","email":"1666991317985-19@yopmail.com","password":"1666991317985-19","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYyMywiZW1haWwiOiIxNjY2OTkxMzE3OTg1LTE5QHlvcG1haWwuY29tIiwiaWF0IjoxNjY2OTkxMzM2LCJleHAiOjE2Njk2Njk3MzZ9.8MstofRKF1H9xQ3O5Y5fVIOMitZeVXuLFz1SLDjPBJA"},
];



const apiBackend = 'http://development.computatus.com:61976'; // modify this with your backend

const tickLog = require('tick-log');
const serialEntrepreneurFrontendHandlers = require('../serial-entrepreneur-frontend-handlers');

beforeAll(async () => {
	serialEntrepreneurFrontendHandlers.init({
		apiBackend: apiBackend,
	});
});

// jest.setTimeout(10000)

test('Test testHandler', async () => {
	const fSuccess = (props, retval) => {
		tickLog.info(`fSuccess: ${JSON.stringify(props)} ${JSON.stringify(retval)}`);
		expect(retval).toBeTruthy();
	}
	const fFail = (props, error) => {
		tickLog.error(`fFail: ${JSON.stringify(props)} ${JSON.stringify(error)}`);
		expect(true).toBe(false);
	}
	await serialEntrepreneurFrontendHandlers.testHandler('name123', 'email123', 'password123', fSuccess, fFail);
});

test('Test registerUserStep1', async () => {
	let now = Date.now();
	let email = `${now}@yopmail.com`;
	let name = `test ${now}`;
	let password = `password-${now}`;
	const fSuccess = (props, retval) => {
		tickLog.info(`fSuccess: ${JSON.stringify(props)} ${JSON.stringify(retval)}`);
		expect(retval).toBeTruthy();
	}
	const fFail = (props, error) => {
		tickLog.error(`fFail: ${JSON.stringify(props)} ${JSON.stringify(error)}`);
		expect(true).toBe(false);
	}
	await serialEntrepreneurFrontendHandlers.registerUserStep1(name, email, password, fSuccess, fFail);
});

test('Test registerUserStep2 should fail because we don\'t know the confirmation code without checking the email', async () => {
	let now = Date.now();
	let email = `${now}@yopmail.com`;
	let confirmationCode = 'SOME-GARBAGE-CONFIRMATION-CODE';
	const fSuccess = (props, retval) => {
		tickLog.info(`fSuccess: ${JSON.stringify(props)} ${JSON.stringify(retval)}`);
		expect(true).toBe(false); // different than normal scenarios, we want this to fail
	}
	const fFail = (props, error) => {
		tickLog.error(`fFail: ${JSON.stringify(props)} ${JSON.stringify(error)}`);
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
	tickLog.info(`removeUser: index ${userIndex} name: ${JSON.stringify(testUsers[userIndex].name)}`);
	const fSuccess = (props, retval) => {
		tickLog.info(`fSuccess: ${JSON.stringify(props)} ${JSON.stringify(retval)}`);
		expect(retval).toMatchObject({"result":"OK"})
	}
	const fFail = (props, error) => {
		tickLog.error(`fFail: ${JSON.stringify(props)} ${JSON.stringify(error)}`);
		expect(true).toBe(false);
	}
	await serialEntrepreneurFrontendHandlers.removeUser(testUsers[userIndex].email, testUsers[userIndex].token, fSuccess, fFail);
});

test('loginuserviamail', async () => {
	let userIndex = getUserId;
	tickLog.info(`loginuserviamail: index ${userIndex} name: ${JSON.stringify(testUsers[userIndex].name)}`);
	const fSuccess = (props, retval) => {
		tickLog.info(`fSuccess: ${JSON.stringify(props)} ${JSON.stringify(retval)}`);
		expect(retval).toMatchObject({"result":"OK"});
		expect(retval).toHaveProperty('payload');
		expect(retval.payload.token.length).toBeGreaterThan(0);
	}
	const fFail = (props, error) => {
		tickLog.error(`fFail: ${JSON.stringify(props, null, '\t')}\n${JSON.stringify(error, null, '\t')}`);
		expect(true).toBe(false);
	}
	await serialEntrepreneurFrontendHandlers.loginUserViaMail(testUsers[userIndex].email, testUsers[userIndex].password, fSuccess, fFail);
});

test('loginuserviatoken', async () => {
	let userIndex = getUserId;
	tickLog.info(`loginuserviatoken: index ${userIndex} name: ${JSON.stringify(testUsers[userIndex].name)}`);
	const fSuccess = (props, retval) => {
		tickLog.info(`fSuccess: ${JSON.stringify(props)} ${JSON.stringify(retval)}`);
		expect(retval).toMatchObject({"result":"OK"});
		expect(retval).toHaveProperty('payload');
		expect(retval.payload.token.length).toBeGreaterThan(0);
	}
	const fFail = (props, error) => {
		tickLog.error(`fFail: ${JSON.stringify(props)} ${JSON.stringify(error)}`);
		expect(true).toBe(false);
	}
	await serialEntrepreneurFrontendHandlers.loginUserViaToken(testUsers[userIndex].token, fSuccess, fFail);
});

test('changepassword', async () => {
	let userIndex = getUserId;
	tickLog.info(`changepassword: index ${userIndex} name: ${JSON.stringify(testUsers[userIndex].name)}`);
	const fSuccess = (props, retval) => {
		tickLog.info(`fSuccess: ${JSON.stringify(props)} ${JSON.stringify(retval)}`);
		expect(retval).toMatchObject({"result":"OK"})
	}
	const fFail = (props, error) => {
		tickLog.error(`fFail: ${JSON.stringify(props)} ${JSON.stringify(error)}`);
		expect(true).toBe(false);
	}
	// change to the same password so that test data can be reused.
	await serialEntrepreneurFrontendHandlers.changePassword(testUsers[userIndex].email, testUsers[userIndex].password, testUsers[userIndex].password, fSuccess, fFail);
});


test('resetPasswordStep1', async () => {
	let userIndex = getUserId;
	tickLog.info(`resetPasswordStep1: index ${userIndex} name: ${JSON.stringify(testUsers[userIndex].name)}`);
	const fSuccess = (props, retval) => {
		tickLog.info(`fSuccess: ${JSON.stringify(props)} ${JSON.stringify(retval)}`);
		expect(retval).toMatchObject({"result":"OK"})
	}
	const fFail = (props, error) => {
		tickLog.error(`fFail: ${JSON.stringify(props)} ${JSON.stringify(error)}`);
		expect(true).toBe(false);
	}
	await serialEntrepreneurFrontendHandlers.resetPasswordStep1(testUsers[userIndex].email, fSuccess, fFail);
});

test('resetPasswordStep2', async () => {
	let userIndex = getUserId;
	tickLog.info(`resetPasswordStep2: index ${userIndex} name: ${JSON.stringify(testUsers[userIndex].name)}`);
	const fSuccess = (props, retval) => {
		tickLog.info(`fSuccess: ${JSON.stringify(props)} ${JSON.stringify(retval)}`);
		expect(true).toBe(false);
	}
	const fFail = (props, error) => {
		tickLog.error(`fFail: ${JSON.stringify(props)} ${JSON.stringify(error)}`);
		expect(error).toMatchObject({"result":"FAIL", "error":"Invalid confirmation code."})
	}
	try {
		await serialEntrepreneurFrontendHandlers.resetPasswordStep2(testUsers[userIndex].email, 'SOME-GARBAGE-CONFIRMATION-CODE', testUsers[userIndex].password, fSuccess, fFail);
	} catch (error) {
		tickLog.error(`Correctly caught exception: ${JSON.stringify(error)}`);
		expect(error).toMatchObject({"result":"FAIL", "error":"Invalid confirmation code."})		
	}
});

test('updateuserdata', async () => {
	let userIndex = getUserId;
	tickLog.info(`updateuserdata: index ${userIndex} name: ${JSON.stringify(testUsers[userIndex].name)}`);
	const fSuccess = (props, retval) => {
		tickLog.info(`fSuccess: ${JSON.stringify(props)} ${JSON.stringify(retval)}`);
		expect(retval).toMatchObject({"result":"OK"})
	}
	const fFail = (props, error) => {
		tickLog.error(`fFail: ${JSON.stringify(props)} ${JSON.stringify(error)}`);
		expect(true).toBe(false);
	}
	await serialEntrepreneurFrontendHandlers.updateUserData(testUsers[userIndex].token, "SOME NEW NAME", fSuccess, fFail);
});
