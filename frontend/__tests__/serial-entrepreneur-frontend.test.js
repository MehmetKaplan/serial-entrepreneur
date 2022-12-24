
// CHECK-BEFORE-BUILD 
// Obtain following users from backend jest tests
let getUserId = 0;
const testUsers = [
	{"name":"1671879529957-2","email":"1671879529957-2@yopmail.com","middlename":"1671879529957-2","lastname":"1671879529957-2","password":"1671879529957-2","birthdate":"12.23.2022","gender":"Female","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUxMCwiZW1haWwiOiIxNjcxODc5NTI5OTU3LTJAeW9wbWFpbC5jb20iLCJpYXQiOjE2NzE4Nzk1MzIsImV4cCI6MTY3NDU1NzkzMn0.rLWaoySNVXsJ2Xo6rKfdGE1JCU0ymZ4W2-WakLUJbhQ"},
	{"name":"1671879529957-3","email":"1671879529957-3@yopmail.com","middlename":"1671879529957-3","lastname":"1671879529957-3","password":"1671879529957-3","birthdate":"12.23.2021","gender":"Male","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUxMSwiZW1haWwiOiIxNjcxODc5NTI5OTU3LTNAeW9wbWFpbC5jb20iLCJpYXQiOjE2NzE4Nzk1MzMsImV4cCI6MTY3NDU1NzkzM30.t1hAxDaktSNu1rV3y4M2qgOdrLdohIslDY7odOrsMwE"},
	{"name":"1671879529957-4","email":"1671879529957-4@yopmail.com","middlename":"1671879529957-4","lastname":"1671879529957-4","password":"1671879529957-4","birthdate":"12.23.2022","gender":"Female","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUxMiwiZW1haWwiOiIxNjcxODc5NTI5OTU3LTRAeW9wbWFpbC5jb20iLCJpYXQiOjE2NzE4Nzk1MzQsImV4cCI6MTY3NDU1NzkzNH0.2knvvjLTGUIlq-XsUn2N7zp9BYi95nMb66QimAdYqDo"},
	{"name":"1671879529957-5","email":"1671879529957-5@yopmail.com","middlename":"1671879529957-5","lastname":"1671879529957-5","password":"1671879529957-5","birthdate":"12.23.2021","gender":"Male","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUxMywiZW1haWwiOiIxNjcxODc5NTI5OTU3LTVAeW9wbWFpbC5jb20iLCJpYXQiOjE2NzE4Nzk1MzUsImV4cCI6MTY3NDU1NzkzNX0.FWAY7mRmjeebpBsZPhj_8m9QrztC2rTlboF1CFZzRLk"},
	{"name":"1671879529957-6","email":"1671879529957-6@yopmail.com","middlename":"1671879529957-6","lastname":"1671879529957-6","password":"1671879529957-6","birthdate":"12.23.2022","gender":"Female","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUxNCwiZW1haWwiOiIxNjcxODc5NTI5OTU3LTZAeW9wbWFpbC5jb20iLCJpYXQiOjE2NzE4Nzk1MzYsImV4cCI6MTY3NDU1NzkzNn0.sG7s9b38HmPAWSU3np5UZN14R3tlBjmgkEQnAip2HaU"},
	{"name":"1671879529957-7","email":"1671879529957-7@yopmail.com","middlename":"1671879529957-7","lastname":"1671879529957-7","password":"1671879529957-7","birthdate":"12.23.2021","gender":"Male","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUxNSwiZW1haWwiOiIxNjcxODc5NTI5OTU3LTdAeW9wbWFpbC5jb20iLCJpYXQiOjE2NzE4Nzk1MzcsImV4cCI6MTY3NDU1NzkzN30.ohxkgJkyHal6yXMwh9uynFy3eJoCRQ3IJlqV2lO6MOg"},
	{"name":"1671879529957-8","email":"1671879529957-8@yopmail.com","middlename":"1671879529957-8","lastname":"1671879529957-8","password":"1671879529957-8","birthdate":"12.23.2022","gender":"Female","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUxNiwiZW1haWwiOiIxNjcxODc5NTI5OTU3LThAeW9wbWFpbC5jb20iLCJpYXQiOjE2NzE4Nzk1MzcsImV4cCI6MTY3NDU1NzkzN30.6gEeFfpXjV4D7GTTQeZ5k11Jo2L8EazXu5NtERDcvFw"},
	{"name":"1671879529957-9","email":"1671879529957-9@yopmail.com","middlename":"1671879529957-9","lastname":"1671879529957-9","password":"1671879529957-9","birthdate":"12.23.2021","gender":"Male","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUxNywiZW1haWwiOiIxNjcxODc5NTI5OTU3LTlAeW9wbWFpbC5jb20iLCJpYXQiOjE2NzE4Nzk1MzgsImV4cCI6MTY3NDU1NzkzOH0.Wr69WOIa8KGZjNjw_zG-qIFbhR7T8k7E9BpJv91Vo9k"},
	{"name":"1671879529957-10","email":"1671879529957-10@yopmail.com","middlename":"1671879529957-10","lastname":"1671879529957-10","password":"1671879529957-10","birthdate":"12.23.2022","gender":"Female","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUxOCwiZW1haWwiOiIxNjcxODc5NTI5OTU3LTEwQHlvcG1haWwuY29tIiwiaWF0IjoxNjcxODc5NTM5LCJleHAiOjE2NzQ1NTc5Mzl9.ertxENNC4jKrGMwGOcgxZrMWmWlBT4maBWaLr8fMHf4"},
	{"name":"1671879529957-11","email":"1671879529957-11@yopmail.com","middlename":"1671879529957-11","lastname":"1671879529957-11","password":"1671879529957-11","birthdate":"12.23.2021","gender":"Male","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUxOSwiZW1haWwiOiIxNjcxODc5NTI5OTU3LTExQHlvcG1haWwuY29tIiwiaWF0IjoxNjcxODc5NTQwLCJleHAiOjE2NzQ1NTc5NDB9.xgzvHSrNy2526ogUwN6n46Y7hGHCII1I9boEr165WPI"},
	{"name":"1671879529957-12","email":"1671879529957-12@yopmail.com","middlename":"1671879529957-12","lastname":"1671879529957-12","password":"1671879529957-12","birthdate":"12.23.2022","gender":"Female","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUyMCwiZW1haWwiOiIxNjcxODc5NTI5OTU3LTEyQHlvcG1haWwuY29tIiwiaWF0IjoxNjcxODc5NTQxLCJleHAiOjE2NzQ1NTc5NDF9.DxhTIf1PCrqQYXjvlhRqrepBV_1BF9zXyeOF1TywsAg"},
	{"name":"1671879529957-13","email":"1671879529957-13@yopmail.com","middlename":"1671879529957-13","lastname":"1671879529957-13","password":"1671879529957-13","birthdate":"12.23.2021","gender":"Male","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUyMSwiZW1haWwiOiIxNjcxODc5NTI5OTU3LTEzQHlvcG1haWwuY29tIiwiaWF0IjoxNjcxODc5NTQyLCJleHAiOjE2NzQ1NTc5NDJ9.93sSnnJQ2vufsuWVW1Mi-aVBGAquQL0s0SVyMYg1eoM"},
	{"name":"1671879529957-14","email":"1671879529957-14@yopmail.com","middlename":"1671879529957-14","lastname":"1671879529957-14","password":"1671879529957-14","birthdate":"12.23.2022","gender":"Female","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUyMiwiZW1haWwiOiIxNjcxODc5NTI5OTU3LTE0QHlvcG1haWwuY29tIiwiaWF0IjoxNjcxODc5NTQzLCJleHAiOjE2NzQ1NTc5NDN9.DMtwgukcbSoHlPDYxhMlCliJPPLF6QdxKtovxfXSBB8"},
	{"name":"1671879529957-15","email":"1671879529957-15@yopmail.com","middlename":"1671879529957-15","lastname":"1671879529957-15","password":"1671879529957-15","birthdate":"12.23.2021","gender":"Male","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUyMywiZW1haWwiOiIxNjcxODc5NTI5OTU3LTE1QHlvcG1haWwuY29tIiwiaWF0IjoxNjcxODc5NTQ0LCJleHAiOjE2NzQ1NTc5NDR9.ABvzO5cdnMmGKvUSOS8B9tBtUGOm4ggM-ou_5UBKWnI"},
	{"name":"1671879529957-16","email":"1671879529957-16@yopmail.com","middlename":"1671879529957-16","lastname":"1671879529957-16","password":"1671879529957-16","birthdate":"12.23.2022","gender":"Female","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUyNCwiZW1haWwiOiIxNjcxODc5NTI5OTU3LTE2QHlvcG1haWwuY29tIiwiaWF0IjoxNjcxODc5NTQ1LCJleHAiOjE2NzQ1NTc5NDV9.b6lUI_J8B2dzjNuXApiMBPdJt_ON2AxM2HT__2zeNCg"},
	{"name":"1671879529957-17","email":"1671879529957-17@yopmail.com","middlename":"1671879529957-17","lastname":"1671879529957-17","password":"1671879529957-17","birthdate":"12.23.2021","gender":"Male","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUyNSwiZW1haWwiOiIxNjcxODc5NTI5OTU3LTE3QHlvcG1haWwuY29tIiwiaWF0IjoxNjcxODc5NTQ2LCJleHAiOjE2NzQ1NTc5NDZ9.Opc60sRFQIX6tAVzh5yzOzsk-JFYwXoh7JN8chtkUwQ"},
	{"name":"1671879529957-18","email":"1671879529957-18@yopmail.com","middlename":"1671879529957-18","lastname":"1671879529957-18","password":"1671879529957-18","birthdate":"12.23.2022","gender":"Female","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUyNiwiZW1haWwiOiIxNjcxODc5NTI5OTU3LTE4QHlvcG1haWwuY29tIiwiaWF0IjoxNjcxODc5NTQ2LCJleHAiOjE2NzQ1NTc5NDZ9.fGoa4yxxjV17zohd8KfoWwsc0yvNEb5hcnsrZ7bAcE4"},
	{"name":"1671879529957-19","email":"1671879529957-19@yopmail.com","middlename":"1671879529957-19","lastname":"1671879529957-19","password":"1671879529957-19","birthdate":"12.23.2021","gender":"Male","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUyNywiZW1haWwiOiIxNjcxODc5NTI5OTU3LTE5QHlvcG1haWwuY29tIiwiaWF0IjoxNjcxODc5NTQ3LCJleHAiOjE2NzQ1NTc5NDd9.ijToLA06H1tNaiK7kIbYZVJ8G9pdRWbV0l-f3PbEWmg"},
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
	let middlename = `test ${now}`;
	let lastname = `test ${now}`;
	let birthdate = "2012-12-23"
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
	await serialEntrepreneurFrontendHandlers.registerUserStep1(name, middlename, lastname, email, password, birthdate, gender, fSuccess, fFail);
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
	await serialEntrepreneurFrontendHandlers.changePassword(testUsers[userIndex].token, testUsers[userIndex].password, testUsers[userIndex].password, fSuccess, fFail);
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
	tickLog.info(`updateuserdata: index ${userIndex} name: ${JSON.stringify(testUsers[userIndex].name)} middlename: ${JSON.stringify(testUsers[userIndex].middlename)} lastname: ${JSON.stringify(testUsers[userIndex].lastname)} birthdate: ${JSON.stringify(testUsers[userIndex].birthdate)} gender: ${JSON.stringify(testUsers[userIndex].gender)}`);
	const fSuccess = (props, retval) => {
		tickLog.info(`fSuccess: ${JSON.stringify(props)} ${JSON.stringify(retval)}`);
		expect(retval).toMatchObject({"result":"OK"})
	}
	const fFail = (props, error) => {
		tickLog.error(`fFail: ${JSON.stringify(props)} ${JSON.stringify(error)}`);
		expect(true).toBe(false);
	}
	await serialEntrepreneurFrontendHandlers.updateUserData(testUsers[userIndex].token, "SOME NEW NAME", "SOME NEW middlename", "SOME NEW lastname", "2022-12-20", "new-gender", fSuccess, fFail);
});

test('getuserdata', async () => {
	let userIndex = ++getUserId;
	tickLog.info(`updateuserdata: index ${userIndex} name: ${JSON.stringify(testUsers[userIndex].name)} middlename: ${JSON.stringify(testUsers[userIndex].middlename)} lastname: ${JSON.stringify(testUsers[userIndex].lastname)} birthdate: ${JSON.stringify(testUsers[userIndex].birthdate)} gender: ${JSON.stringify(testUsers[userIndex].gender)}`);
	const fSuccess = (props, retval) => {
		tickLog.info(`fSuccess: ${JSON.stringify(props)} ${JSON.stringify(retval)}`);
		expect(retval).toMatchObject({"result":"OK"})
	}
	const fFail = (props, error) => {
		tickLog.error(`fFail: ${JSON.stringify(props)} ${JSON.stringify(error)}`);
		expect(true).toBe(false);
	}
	await serialEntrepreneurFrontendHandlers.updateUserData(testUsers[userIndex].token, "SOME NEW NAME", "SOME NEW middlename", "SOME NEW lastname", "2022-12-20", "new-gender", fSuccess, fFail);

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
