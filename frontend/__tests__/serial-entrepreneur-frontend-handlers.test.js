
// CHECK-BEFORE-BUILD 
// Obtain following users from backend jest tests
let getUserId = 0;
const testUsers = [
	{"name":"1666994655996-0","email":"1666994655996-0@yopmail.com","password":"1666994655996-0","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYzNiwiZW1haWwiOiIxNjY2OTk0NjU1OTk2LTBAeW9wbWFpbC5jb20iLCJpYXQiOjE2NjY5OTQ2NTYsImV4cCI6MTY2OTY3MzA1Nn0.mRmiHwrKYl9gltSLWYkg4SrK7aEw2WH3H0LUaZ_J-YY"},
	{"name":"1666994655996-1","email":"1666994655996-1@yopmail.com","password":"1666994655996-1","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYzNywiZW1haWwiOiIxNjY2OTk0NjU1OTk2LTFAeW9wbWFpbC5jb20iLCJpYXQiOjE2NjY5OTQ2NTcsImV4cCI6MTY2OTY3MzA1N30.xgMqIaswYZQ5hAkDVK3eSftOguGexZiU8hZsuCjBNXk"},
	{"name":"1666994655996-2","email":"1666994655996-2@yopmail.com","password":"1666994655996-2","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYzOCwiZW1haWwiOiIxNjY2OTk0NjU1OTk2LTJAeW9wbWFpbC5jb20iLCJpYXQiOjE2NjY5OTQ2NTgsImV4cCI6MTY2OTY3MzA1OH0.90P_XYwmbjkYAOSDfvy4hJIyNG08hGgkOwDYop-uYXs"},
	{"name":"1666994655996-3","email":"1666994655996-3@yopmail.com","password":"1666994655996-3","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYzOSwiZW1haWwiOiIxNjY2OTk0NjU1OTk2LTNAeW9wbWFpbC5jb20iLCJpYXQiOjE2NjY5OTQ2NTksImV4cCI6MTY2OTY3MzA1OX0.jedIqElFyduHd0SdATUsZisJgiNI9Z08Ab06W9jGdI0"},
	{"name":"1666994655996-4","email":"1666994655996-4@yopmail.com","password":"1666994655996-4","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY0MCwiZW1haWwiOiIxNjY2OTk0NjU1OTk2LTRAeW9wbWFpbC5jb20iLCJpYXQiOjE2NjY5OTQ2NjAsImV4cCI6MTY2OTY3MzA2MH0.z0dzrcQ-nLJ_HawQrLpYNTvK_5aqJhzh9kTc_0ahKWs"},
	{"name":"1666994655996-5","email":"1666994655996-5@yopmail.com","password":"1666994655996-5","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY0MSwiZW1haWwiOiIxNjY2OTk0NjU1OTk2LTVAeW9wbWFpbC5jb20iLCJpYXQiOjE2NjY5OTQ2NjEsImV4cCI6MTY2OTY3MzA2MX0.A8MBgfeTSXXEdDGVjsaA1o9VcFjBvEI0h6CKW5eXpZk"},
	{"name":"1666994655996-6","email":"1666994655996-6@yopmail.com","password":"1666994655996-6","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY0MiwiZW1haWwiOiIxNjY2OTk0NjU1OTk2LTZAeW9wbWFpbC5jb20iLCJpYXQiOjE2NjY5OTQ2NjIsImV4cCI6MTY2OTY3MzA2Mn0.wowWlVMObo9qju3kJkasEaLDYsowmIOYt0slyoJUJ3E"},
	{"name":"1666994655996-7","email":"1666994655996-7@yopmail.com","password":"1666994655996-7","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY0MywiZW1haWwiOiIxNjY2OTk0NjU1OTk2LTdAeW9wbWFpbC5jb20iLCJpYXQiOjE2NjY5OTQ2NjMsImV4cCI6MTY2OTY3MzA2M30.nY3g1KDd6D2bThvVF1pIAKoK25tSP1983T8PRPTkuaI"},
	{"name":"1666994655996-8","email":"1666994655996-8@yopmail.com","password":"1666994655996-8","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY0NCwiZW1haWwiOiIxNjY2OTk0NjU1OTk2LThAeW9wbWFpbC5jb20iLCJpYXQiOjE2NjY5OTQ2NjQsImV4cCI6MTY2OTY3MzA2NH0.g8VwJSjgbUbOZm-OzZK-yzfd75p-Z12hUBDJy_jjm0k"},
	{"name":"1666994655996-9","email":"1666994655996-9@yopmail.com","password":"1666994655996-9","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY0NSwiZW1haWwiOiIxNjY2OTk0NjU1OTk2LTlAeW9wbWFpbC5jb20iLCJpYXQiOjE2NjY5OTQ2NjUsImV4cCI6MTY2OTY3MzA2NX0.xrPvtCGGXStQT_ljp14jqjSSknUEAeAqT3teXFvHnAs"},
	{"name":"1666994655996-10","email":"1666994655996-10@yopmail.com","password":"1666994655996-10","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY0NiwiZW1haWwiOiIxNjY2OTk0NjU1OTk2LTEwQHlvcG1haWwuY29tIiwiaWF0IjoxNjY2OTk0NjY2LCJleHAiOjE2Njk2NzMwNjZ9.qOFIEAzgENdPvEEjOBiYBe69zHMFW-0kXP-A6nGNbz0"},
	{"name":"1666994655996-11","email":"1666994655996-11@yopmail.com","password":"1666994655996-11","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY0NywiZW1haWwiOiIxNjY2OTk0NjU1OTk2LTExQHlvcG1haWwuY29tIiwiaWF0IjoxNjY2OTk0NjY3LCJleHAiOjE2Njk2NzMwNjd9.6DCcuEljen4PV-7ovQWIUN4_VdRmfEWRNDMPtfFvTIg"},
	{"name":"1666994655996-12","email":"1666994655996-12@yopmail.com","password":"1666994655996-12","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY0OCwiZW1haWwiOiIxNjY2OTk0NjU1OTk2LTEyQHlvcG1haWwuY29tIiwiaWF0IjoxNjY2OTk0NjY4LCJleHAiOjE2Njk2NzMwNjh9.J-tz0RXSzyvChLYjCMQ5-2WjllRlHpHjdOepa8g4Tsw"},
	{"name":"1666994655996-13","email":"1666994655996-13@yopmail.com","password":"1666994655996-13","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY0OSwiZW1haWwiOiIxNjY2OTk0NjU1OTk2LTEzQHlvcG1haWwuY29tIiwiaWF0IjoxNjY2OTk0NjY5LCJleHAiOjE2Njk2NzMwNjl9.HB_MK9N7Pau1C7YuH2H_bT-5rNff9JHuBUp3qlLArsg"},
	{"name":"1666994655996-14","email":"1666994655996-14@yopmail.com","password":"1666994655996-14","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY1MCwiZW1haWwiOiIxNjY2OTk0NjU1OTk2LTE0QHlvcG1haWwuY29tIiwiaWF0IjoxNjY2OTk0NjcwLCJleHAiOjE2Njk2NzMwNzB9.JTddTpxvJeovgrm9Iy3h4yyGn1xJE0yw2IUqX9j58HQ"},
	{"name":"1666994655996-15","email":"1666994655996-15@yopmail.com","password":"1666994655996-15","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY1MSwiZW1haWwiOiIxNjY2OTk0NjU1OTk2LTE1QHlvcG1haWwuY29tIiwiaWF0IjoxNjY2OTk0NjcxLCJleHAiOjE2Njk2NzMwNzF9.Dxm-CA4OvwhofyLMWR1e099bUEvXGfM4k-OkIjzav6w"},
	{"name":"1666994655996-16","email":"1666994655996-16@yopmail.com","password":"1666994655996-16","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY1MiwiZW1haWwiOiIxNjY2OTk0NjU1OTk2LTE2QHlvcG1haWwuY29tIiwiaWF0IjoxNjY2OTk0NjcyLCJleHAiOjE2Njk2NzMwNzJ9.kO1vPJD0-R7LiQsxvaXwXlbh46XM_B4zJorL8S1LBMs"},
	{"name":"1666994655996-17","email":"1666994655996-17@yopmail.com","password":"1666994655996-17","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY1MywiZW1haWwiOiIxNjY2OTk0NjU1OTk2LTE3QHlvcG1haWwuY29tIiwiaWF0IjoxNjY2OTk0NjczLCJleHAiOjE2Njk2NzMwNzN9.-uECi4qRxWn7HSLh7rnD7Yltb6n-qgtMyTQad-Npg6k"},
	{"name":"1666994655996-18","email":"1666994655996-18@yopmail.com","password":"1666994655996-18","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY1NCwiZW1haWwiOiIxNjY2OTk0NjU1OTk2LTE4QHlvcG1haWwuY29tIiwiaWF0IjoxNjY2OTk0Njc0LCJleHAiOjE2Njk2NzMwNzR9.J6DNVXlOMwRuQ0ncvm07AoPMugVEu5E46w2xBddnRiE"},
	{"name":"1666994655996-19","email":"1666994655996-19@yopmail.com","password":"1666994655996-19","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY1NSwiZW1haWwiOiIxNjY2OTk0NjU1OTk2LTE5QHlvcG1haWwuY29tIiwiaWF0IjoxNjY2OTk0Njc1LCJleHAiOjE2Njk2NzMwNzV9.8OfB7q42HfPuJZFkworWWiRifmcE3TIM7tR4K7BCw-o"},
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
