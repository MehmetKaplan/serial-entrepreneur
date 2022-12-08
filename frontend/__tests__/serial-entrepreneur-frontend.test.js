
// CHECK-BEFORE-BUILD 
// Obtain following users from backend jest tests
let getUserId = 0;
const testUsers = [
	{"name":"1670466702209-15","email":"1670466702209-15@yopmail.com","middleName":"1670466702209-15","lastName":"1670466702209-15","password":"1670466702209-15","birthDate":"12.23.2021","gender":"Male","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI4OSwiZW1haWwiOiIxNjcwNDY2NzAyMjA5LTE1QHlvcG1haWwuY29tIiwiaWF0IjoxNjcwNDY2NzE2LCJleHAiOjE2NzMxNDUxMTZ9.GOL5O3oquzRl3cIWIFNWgPVVgWa3jSRIqQJ2F6dOocU"},
	{"name":"1670466702209-16","email":"1670466702209-16@yopmail.com","middleName":"1670466702209-16","lastName":"1670466702209-16","password":"1670466702209-16","birthDate":"12.23.2022","gender":"Female","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI5MCwiZW1haWwiOiIxNjcwNDY2NzAyMjA5LTE2QHlvcG1haWwuY29tIiwiaWF0IjoxNjcwNDY2NzE3LCJleHAiOjE2NzMxNDUxMTd9.dw7GbB0gACGbRR6jZCuZ2THzZwE1ruXZDITtGeU84X0"},
	{"name":"1670466702209-17","email":"1670466702209-17@yopmail.com","middleName":"1670466702209-17","lastName":"1670466702209-17","password":"1670466702209-17","birthDate":"12.23.2021","gender":"Male","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI5MSwiZW1haWwiOiIxNjcwNDY2NzAyMjA5LTE3QHlvcG1haWwuY29tIiwiaWF0IjoxNjcwNDY2NzE4LCJleHAiOjE2NzMxNDUxMTh9.0_-9asH65HlOh6DiZW50xZeSMVEhXb_1R2m_NiZMPmc"},
	{"name":"1670466702209-18","email":"1670466702209-18@yopmail.com","middleName":"1670466702209-18","lastName":"1670466702209-18","password":"1670466702209-18","birthDate":"12.23.2022","gender":"Female","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI5MiwiZW1haWwiOiIxNjcwNDY2NzAyMjA5LTE4QHlvcG1haWwuY29tIiwiaWF0IjoxNjcwNDY2NzE4LCJleHAiOjE2NzMxNDUxMTh9.q2WCHu4h9uxgiuTCcEmASb1ZDY1hMnx6pfRWeGliLK4"},
	{"name":"1670466702209-19","email":"1670466702209-19@yopmail.com","middleName":"1670466702209-19","lastName":"1670466702209-19","password":"1670466702209-19","birthDate":"12.23.2021","gender":"Male","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI5MywiZW1haWwiOiIxNjcwNDY2NzAyMjA5LTE5QHlvcG1haWwuY29tIiwiaWF0IjoxNjcwNDY2NzE5LCJleHAiOjE2NzMxNDUxMTl9.rE2lDy8Dskd_GY_alBHG5muJAIavR3DIPtfCwWJtpVY"},
];



const apiBackend = 'http://development.computatus.com:61976'; // modify this with your backend

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
	let middleName = `test ${now}`;
	let lastName = `test ${now}`;
	let birthDate = "2012-12-23"
	let gender = (now % 2 === 0) ? 'Male' : 'Female';
	let password = `password-${now}`;
	const fSuccess = (props, retval) => {
		tickLog.info(`fSuccess: ${JSON.stringify(props)} ${JSON.stringify(retval)}`);
		expect(retval).toBeTruthy();
	}
	const fFail = (props, e_) => {
		tickLog.error(`fFail: ${JSON.stringify(props)} ${JSON.stringify(e_)}`);
		expect(true).toBe(false);
	}
	await serialEntrepreneurFrontendHandlers.registerUserStep1(name, middleName, lastName, email, password, birthDate, gender, fSuccess, fFail);
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
	tickLog.info(`updateuserdata: index ${userIndex} name: ${JSON.stringify(testUsers[userIndex].name)} middleName: ${JSON.stringify(testUsers[userIndex].middleName)} lastName: ${JSON.stringify(testUsers[userIndex].lastName)} birthDate: ${JSON.stringify(testUsers[userIndex].birthDate)} gender: ${JSON.stringify(testUsers[userIndex].gender)}`);
	const fSuccess = (props, retval) => {
		tickLog.info(`fSuccess: ${JSON.stringify(props)} ${JSON.stringify(retval)}`);
		expect(retval).toMatchObject({"result":"OK"})
	}
	const fFail = (props, error) => {
		tickLog.error(`fFail: ${JSON.stringify(props)} ${JSON.stringify(error)}`);
		expect(true).toBe(false);
	}
	await serialEntrepreneurFrontendHandlers.updateUserData(testUsers[userIndex].token, "SOME NEW NAME", "SOME NEW MIDDLENAME", "SOME NEW LASTNAME", "2022-12-20", "new-gender", fSuccess, fFail);
});

test('getuserdata', async () => {
	let userIndex = ++getUserId;
	tickLog.info(`updateuserdata: index ${userIndex} name: ${JSON.stringify(testUsers[userIndex].name)} middleName: ${JSON.stringify(testUsers[userIndex].middleName)} lastName: ${JSON.stringify(testUsers[userIndex].lastName)} birthDate: ${JSON.stringify(testUsers[userIndex].birthDate)} gender: ${JSON.stringify(testUsers[userIndex].gender)}`);
	const fSuccess = (props, retval) => {
		tickLog.info(`fSuccess: ${JSON.stringify(props)} ${JSON.stringify(retval)}`);
		expect(retval).toMatchObject({"result":"OK"})
	}
	const fFail = (props, error) => {
		tickLog.error(`fFail: ${JSON.stringify(props)} ${JSON.stringify(error)}`);
		expect(true).toBe(false);
	}
	await serialEntrepreneurFrontendHandlers.updateUserData(testUsers[userIndex].token, "SOME NEW NAME", "SOME NEW MIDDLENAME", "SOME NEW LASTNAME", "2022-12-20", "new-gender", fSuccess, fFail);

	const fSuccess2 = (props, retval) => {
		tickLog.info(`fSuccess: ${JSON.stringify(props)} ${JSON.stringify(retval)}`);
		expect(retval).toMatchObject({"result":"OK"})
	}
	const fFail2 = (props, error) => {
		tickLog.error(`fFail: ${JSON.stringify(props)} ${JSON.stringify(error)}`);
		expect(true).toBe(false);
	}
	await serialEntrepreneurFrontendHandlers.getUserData(testUsers[userIndex].token, fSuccess2, fFail2);
});
