
// CHECK-BEFORE-BUILD 
// Obtain following users from backend jest tests
let getUserId = 0;
const testUsers = [
	{"name":"1670597554562-4","email":"1670597554562-4@yopmail.com","middleName":"1670597554562-4","lastName":"1670597554562-4","password":"1670597554562-4","birthDate":"12.23.2022","gender":"Female","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQxMCwiZW1haWwiOiIxNjcwNTk3NTU0NTYyLTRAeW9wbWFpbC5jb20iLCJpYXQiOjE2NzA1OTc1NTksImV4cCI6MTY3MzI3NTk1OX0.pZTOo2O53VCeLjO5ZLSIBjbkRDLeluZz0poby5x4f78"},
	{"name":"1670597554562-5","email":"1670597554562-5@yopmail.com","middleName":"1670597554562-5","lastName":"1670597554562-5","password":"1670597554562-5","birthDate":"12.23.2021","gender":"Male","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQxMSwiZW1haWwiOiIxNjcwNTk3NTU0NTYyLTVAeW9wbWFpbC5jb20iLCJpYXQiOjE2NzA1OTc1NTksImV4cCI6MTY3MzI3NTk1OX0.qDdpy9CQZ2jqnhW9iPiZ-zknRNlNOiM6Zl03-lj4zIM"},
	{"name":"1670597554562-6","email":"1670597554562-6@yopmail.com","middleName":"1670597554562-6","lastName":"1670597554562-6","password":"1670597554562-6","birthDate":"12.23.2022","gender":"Female","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQxMiwiZW1haWwiOiIxNjcwNTk3NTU0NTYyLTZAeW9wbWFpbC5jb20iLCJpYXQiOjE2NzA1OTc1NjAsImV4cCI6MTY3MzI3NTk2MH0.NqJN7lp-RJgGUjJq4nA2JikSrzMywxfdzYBjig9Eju0"},
	{"name":"1670597554562-7","email":"1670597554562-7@yopmail.com","middleName":"1670597554562-7","lastName":"1670597554562-7","password":"1670597554562-7","birthDate":"12.23.2021","gender":"Male","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQxMywiZW1haWwiOiIxNjcwNTk3NTU0NTYyLTdAeW9wbWFpbC5jb20iLCJpYXQiOjE2NzA1OTc1NjEsImV4cCI6MTY3MzI3NTk2MX0.n2qBRE7cVcTcnHGj-KOwwHkErA4Q8eRaUiROj7LzwdE"},
	{"name":"1670597554562-8","email":"1670597554562-8@yopmail.com","middleName":"1670597554562-8","lastName":"1670597554562-8","password":"1670597554562-8","birthDate":"12.23.2022","gender":"Female","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQxNCwiZW1haWwiOiIxNjcwNTk3NTU0NTYyLThAeW9wbWFpbC5jb20iLCJpYXQiOjE2NzA1OTc1NjIsImV4cCI6MTY3MzI3NTk2Mn0.A38EQgoArSpWlPrCHN0CMl_78qGvaGTlVLJQ4kDHFlo"},
	{"name":"1670597554562-9","email":"1670597554562-9@yopmail.com","middleName":"1670597554562-9","lastName":"1670597554562-9","password":"1670597554562-9","birthDate":"12.23.2021","gender":"Male","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQxNSwiZW1haWwiOiIxNjcwNTk3NTU0NTYyLTlAeW9wbWFpbC5jb20iLCJpYXQiOjE2NzA1OTc1NjMsImV4cCI6MTY3MzI3NTk2M30.sn4XTRLm2ub9DjEVzI-pqfx9xdY2cqqfQKTAM3hA1EI"},
	{"name":"1670597554562-10","email":"1670597554562-10@yopmail.com","middleName":"1670597554562-10","lastName":"1670597554562-10","password":"1670597554562-10","birthDate":"12.23.2022","gender":"Female","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQxNiwiZW1haWwiOiIxNjcwNTk3NTU0NTYyLTEwQHlvcG1haWwuY29tIiwiaWF0IjoxNjcwNTk3NTY0LCJleHAiOjE2NzMyNzU5NjR9.1ierd9jxSUoKtd_CVIVmfcf65wEf47w_yo2VDVu0auM"},
	{"name":"1670597554562-11","email":"1670597554562-11@yopmail.com","middleName":"1670597554562-11","lastName":"1670597554562-11","password":"1670597554562-11","birthDate":"12.23.2021","gender":"Male","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQxNywiZW1haWwiOiIxNjcwNTk3NTU0NTYyLTExQHlvcG1haWwuY29tIiwiaWF0IjoxNjcwNTk3NTY1LCJleHAiOjE2NzMyNzU5NjV9.8H9K8PjeGNQaRBWhkDc4yHB9ln21_dh5QHWLzOKKCiE"},
	{"name":"1670597554562-12","email":"1670597554562-12@yopmail.com","middleName":"1670597554562-12","lastName":"1670597554562-12","password":"1670597554562-12","birthDate":"12.23.2022","gender":"Female","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQxOCwiZW1haWwiOiIxNjcwNTk3NTU0NTYyLTEyQHlvcG1haWwuY29tIiwiaWF0IjoxNjcwNTk3NTY2LCJleHAiOjE2NzMyNzU5NjZ9.-i5Yvwq5IQix8HmsYRGbH6z5P4L2wpdvQzL06mAevg4"},
	{"name":"1670597554562-13","email":"1670597554562-13@yopmail.com","middleName":"1670597554562-13","lastName":"1670597554562-13","password":"1670597554562-13","birthDate":"12.23.2021","gender":"Male","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQxOSwiZW1haWwiOiIxNjcwNTk3NTU0NTYyLTEzQHlvcG1haWwuY29tIiwiaWF0IjoxNjcwNTk3NTY3LCJleHAiOjE2NzMyNzU5Njd9.HQu24_utpumyoSFX0HtXMi1Aw3IOvCGhgbs6Pgo96go"},
	{"name":"1670597554562-14","email":"1670597554562-14@yopmail.com","middleName":"1670597554562-14","lastName":"1670597554562-14","password":"1670597554562-14","birthDate":"12.23.2022","gender":"Female","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQyMCwiZW1haWwiOiIxNjcwNTk3NTU0NTYyLTE0QHlvcG1haWwuY29tIiwiaWF0IjoxNjcwNTk3NTY4LCJleHAiOjE2NzMyNzU5Njh9.KrAIhsuJ4pFtNAYW5eTy3_lmREYc6B8XrvQj7W2Aq08"},
	{"name":"1670597554562-15","email":"1670597554562-15@yopmail.com","middleName":"1670597554562-15","lastName":"1670597554562-15","password":"1670597554562-15","birthDate":"12.23.2021","gender":"Male","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQyMSwiZW1haWwiOiIxNjcwNTk3NTU0NTYyLTE1QHlvcG1haWwuY29tIiwiaWF0IjoxNjcwNTk3NTY4LCJleHAiOjE2NzMyNzU5Njh9.jiCqudzW8k3JOZ4ro1jrGRkpDfYiMQixIrs371MH_Ns"},
	{"name":"1670597554562-16","email":"1670597554562-16@yopmail.com","middleName":"1670597554562-16","lastName":"1670597554562-16","password":"1670597554562-16","birthDate":"12.23.2022","gender":"Female","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQyMiwiZW1haWwiOiIxNjcwNTk3NTU0NTYyLTE2QHlvcG1haWwuY29tIiwiaWF0IjoxNjcwNTk3NTY5LCJleHAiOjE2NzMyNzU5Njl9.4gewIoW3IFWXPiSvp1to1vZ31UeP1L5yWZ7JGFmfx7o"},
	{"name":"1670597554562-17","email":"1670597554562-17@yopmail.com","middleName":"1670597554562-17","lastName":"1670597554562-17","password":"1670597554562-17","birthDate":"12.23.2021","gender":"Male","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQyMywiZW1haWwiOiIxNjcwNTk3NTU0NTYyLTE3QHlvcG1haWwuY29tIiwiaWF0IjoxNjcwNTk3NTcwLCJleHAiOjE2NzMyNzU5NzB9.IrHguKBZvQBoYdRx98xjhqw9icI20T6ETSYOU2ecPQA"},
	{"name":"1670597554562-18","email":"1670597554562-18@yopmail.com","middleName":"1670597554562-18","lastName":"1670597554562-18","password":"1670597554562-18","birthDate":"12.23.2022","gender":"Female","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQyNCwiZW1haWwiOiIxNjcwNTk3NTU0NTYyLTE4QHlvcG1haWwuY29tIiwiaWF0IjoxNjcwNTk3NTcxLCJleHAiOjE2NzMyNzU5NzF9.8jJtVqu131Ui7KeqUtPXH8muangr6I3QicLZ3kWeQkQ"},
	{"name":"1670597554562-19","email":"1670597554562-19@yopmail.com","middleName":"1670597554562-19","lastName":"1670597554562-19","password":"1670597554562-19","birthDate":"12.23.2021","gender":"Male","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQyNSwiZW1haWwiOiIxNjcwNTk3NTU0NTYyLTE5QHlvcG1haWwuY29tIiwiaWF0IjoxNjcwNTk3NTcyLCJleHAiOjE2NzMyNzU5NzJ9.76RDVuNkqHlV10G-7GyT0oI9s6CrcXd33c9kl_PRTJQ"},
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
