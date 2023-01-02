
// CHECK-BEFORE-BUILD 
// Obtain following users from backend jest tests
let getUserId = 0;
const testUsers = [
	{"name":"1672649494593-0","email":"1672649494593-0@yopmail.com","middlename":"1672649494593-0","lastname":"1672649494593-0","password":"1672649494593-0","birthdate":"12.23.2022","gender":"Female","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYwNCwiZW1haWwiOiIxNjcyNjQ5NDk0NTkzLTBAeW9wbWFpbC5jb20iLCJpYXQiOjE2NzI2NDk0OTUsImV4cCI6MTY3NTMyNzg5NX0.dPJZ1TVc6KRtGAi4DKgo-qZEItedTzRcsmeuQwXrNV0"},
	{"name":"1672649494593-1","email":"1672649494593-1@yopmail.com","middlename":"1672649494593-1","lastname":"1672649494593-1","password":"1672649494593-1","birthdate":"12.23.2021","gender":"Male","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYwNSwiZW1haWwiOiIxNjcyNjQ5NDk0NTkzLTFAeW9wbWFpbC5jb20iLCJpYXQiOjE2NzI2NDk0OTYsImV4cCI6MTY3NTMyNzg5Nn0._9ph3RtK4urm4PkoEwaXtGPKbTYLYFcr71bo79PAlnA"},
	{"name":"1672649494593-2","email":"1672649494593-2@yopmail.com","middlename":"1672649494593-2","lastname":"1672649494593-2","password":"1672649494593-2","birthdate":"12.23.2022","gender":"Female","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYwNiwiZW1haWwiOiIxNjcyNjQ5NDk0NTkzLTJAeW9wbWFpbC5jb20iLCJpYXQiOjE2NzI2NDk0OTcsImV4cCI6MTY3NTMyNzg5N30.0BB2ds5VeruvryWB1sp66W3WLMBlpTf_vdpEIGzmEJI"},
	{"name":"1672649494593-3","email":"1672649494593-3@yopmail.com","middlename":"1672649494593-3","lastname":"1672649494593-3","password":"1672649494593-3","birthdate":"12.23.2021","gender":"Male","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYwNywiZW1haWwiOiIxNjcyNjQ5NDk0NTkzLTNAeW9wbWFpbC5jb20iLCJpYXQiOjE2NzI2NDk0OTgsImV4cCI6MTY3NTMyNzg5OH0.xGAEEA2r8PqQkS5Fvp3DTFm9sfgPd6J_muiUxYy9SRk"},
	{"name":"1672649494593-4","email":"1672649494593-4@yopmail.com","middlename":"1672649494593-4","lastname":"1672649494593-4","password":"1672649494593-4","birthdate":"12.23.2022","gender":"Female","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYwOCwiZW1haWwiOiIxNjcyNjQ5NDk0NTkzLTRAeW9wbWFpbC5jb20iLCJpYXQiOjE2NzI2NDk0OTgsImV4cCI6MTY3NTMyNzg5OH0.f7QrUjhHVLb7cjB9R2gGK9FNEwwP4wQW_msiWjDA4H8"},
	{"name":"1672649494593-5","email":"1672649494593-5@yopmail.com","middlename":"1672649494593-5","lastname":"1672649494593-5","password":"1672649494593-5","birthdate":"12.23.2021","gender":"Male","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYwOSwiZW1haWwiOiIxNjcyNjQ5NDk0NTkzLTVAeW9wbWFpbC5jb20iLCJpYXQiOjE2NzI2NDk0OTksImV4cCI6MTY3NTMyNzg5OX0.CH2XlkoFOtU1qYgDzuirOdpOVI-dcX96Ax2vl4uIoJE"},
	{"name":"1672649494593-6","email":"1672649494593-6@yopmail.com","middlename":"1672649494593-6","lastname":"1672649494593-6","password":"1672649494593-6","birthdate":"12.23.2022","gender":"Female","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYxMCwiZW1haWwiOiIxNjcyNjQ5NDk0NTkzLTZAeW9wbWFpbC5jb20iLCJpYXQiOjE2NzI2NDk1MDAsImV4cCI6MTY3NTMyNzkwMH0.HrG2AQAlMK6rjBmbcjGiMxFhciFPdSpeIfIQJ4AWmZM"},
	{"name":"1672649494593-7","email":"1672649494593-7@yopmail.com","middlename":"1672649494593-7","lastname":"1672649494593-7","password":"1672649494593-7","birthdate":"12.23.2021","gender":"Male","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYxMSwiZW1haWwiOiIxNjcyNjQ5NDk0NTkzLTdAeW9wbWFpbC5jb20iLCJpYXQiOjE2NzI2NDk1MDEsImV4cCI6MTY3NTMyNzkwMX0.sq5ALVM8N1CNE4GPpPB0svBH-eHrs76aK6p3vpD9tKU"},
	{"name":"1672649494593-8","email":"1672649494593-8@yopmail.com","middlename":"1672649494593-8","lastname":"1672649494593-8","password":"1672649494593-8","birthdate":"12.23.2022","gender":"Female","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYxMiwiZW1haWwiOiIxNjcyNjQ5NDk0NTkzLThAeW9wbWFpbC5jb20iLCJpYXQiOjE2NzI2NDk1MDIsImV4cCI6MTY3NTMyNzkwMn0.IlDloSwq2DOZmXd90AX81mrFc2j3p6Sa63rIja_1Th0"},
	{"name":"1672649494593-9","email":"1672649494593-9@yopmail.com","middlename":"1672649494593-9","lastname":"1672649494593-9","password":"1672649494593-9","birthdate":"12.23.2021","gender":"Male","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYxMywiZW1haWwiOiIxNjcyNjQ5NDk0NTkzLTlAeW9wbWFpbC5jb20iLCJpYXQiOjE2NzI2NDk1MDMsImV4cCI6MTY3NTMyNzkwM30._rCalbQN0ud4cPDv22loqb6vVZaZDXtRbqObXNbL0wg"},
	{"name":"1672649494593-10","email":"1672649494593-10@yopmail.com","middlename":"1672649494593-10","lastname":"1672649494593-10","password":"1672649494593-10","birthdate":"12.23.2022","gender":"Female","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYxNCwiZW1haWwiOiIxNjcyNjQ5NDk0NTkzLTEwQHlvcG1haWwuY29tIiwiaWF0IjoxNjcyNjQ5NTA0LCJleHAiOjE2NzUzMjc5MDR9.pdmpW7bp-E_kUfQS1YaLt7VbV4cuwhQrVMWfhGdnFr8"},
	{"name":"1672649494593-11","email":"1672649494593-11@yopmail.com","middlename":"1672649494593-11","lastname":"1672649494593-11","password":"1672649494593-11","birthdate":"12.23.2021","gender":"Male","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYxNSwiZW1haWwiOiIxNjcyNjQ5NDk0NTkzLTExQHlvcG1haWwuY29tIiwiaWF0IjoxNjcyNjQ5NTA1LCJleHAiOjE2NzUzMjc5MDV9.g-gp7AfiMqpkmziGGC-Fchv1rBEs-roSfEAOucMsvzA"},
	{"name":"1672649494593-12","email":"1672649494593-12@yopmail.com","middlename":"1672649494593-12","lastname":"1672649494593-12","password":"1672649494593-12","birthdate":"12.23.2022","gender":"Female","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYxNiwiZW1haWwiOiIxNjcyNjQ5NDk0NTkzLTEyQHlvcG1haWwuY29tIiwiaWF0IjoxNjcyNjQ5NTA1LCJleHAiOjE2NzUzMjc5MDV9.CEuX8T6MXHnA5eYyVeP_dfjYZ-RXVcajC3bW2x9zErE"},
	{"name":"1672649494593-13","email":"1672649494593-13@yopmail.com","middlename":"1672649494593-13","lastname":"1672649494593-13","password":"1672649494593-13","birthdate":"12.23.2021","gender":"Male","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYxNywiZW1haWwiOiIxNjcyNjQ5NDk0NTkzLTEzQHlvcG1haWwuY29tIiwiaWF0IjoxNjcyNjQ5NTA2LCJleHAiOjE2NzUzMjc5MDZ9.AArvWovJuuiyD_3u7OGJ421Q3TErw6fxmZKVQCMJJwE"},
	{"name":"1672649494593-14","email":"1672649494593-14@yopmail.com","middlename":"1672649494593-14","lastname":"1672649494593-14","password":"1672649494593-14","birthdate":"12.23.2022","gender":"Female","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYxOCwiZW1haWwiOiIxNjcyNjQ5NDk0NTkzLTE0QHlvcG1haWwuY29tIiwiaWF0IjoxNjcyNjQ5NTA3LCJleHAiOjE2NzUzMjc5MDd9.i_CCLl5PYP6H14xJByTBzDLIwdjtcW8N_fA1FHnKGbg"},
	{"name":"1672649494593-15","email":"1672649494593-15@yopmail.com","middlename":"1672649494593-15","lastname":"1672649494593-15","password":"1672649494593-15","birthdate":"12.23.2021","gender":"Male","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYxOSwiZW1haWwiOiIxNjcyNjQ5NDk0NTkzLTE1QHlvcG1haWwuY29tIiwiaWF0IjoxNjcyNjQ5NTA4LCJleHAiOjE2NzUzMjc5MDh9.tdSBfnreVDIEQ3NIoLdot61yf1nU9gaxX22xqJo4Hys"},
	{"name":"1672649494593-16","email":"1672649494593-16@yopmail.com","middlename":"1672649494593-16","lastname":"1672649494593-16","password":"1672649494593-16","birthdate":"12.23.2022","gender":"Female","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYyMCwiZW1haWwiOiIxNjcyNjQ5NDk0NTkzLTE2QHlvcG1haWwuY29tIiwiaWF0IjoxNjcyNjQ5NTA5LCJleHAiOjE2NzUzMjc5MDl9.D3whmMc3y6TNhDsxwbPEX6eniRYAL0bzhMyaA3_aLQE"},
	{"name":"1672649494593-17","email":"1672649494593-17@yopmail.com","middlename":"1672649494593-17","lastname":"1672649494593-17","password":"1672649494593-17","birthdate":"12.23.2021","gender":"Male","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYyMSwiZW1haWwiOiIxNjcyNjQ5NDk0NTkzLTE3QHlvcG1haWwuY29tIiwiaWF0IjoxNjcyNjQ5NTEwLCJleHAiOjE2NzUzMjc5MTB9.g4tmykUh6bRoc9eWwyR01MF_BT-iBM3ipon3Xi4aZOE"},
	{"name":"1672649494593-18","email":"1672649494593-18@yopmail.com","middlename":"1672649494593-18","lastname":"1672649494593-18","password":"1672649494593-18","birthdate":"12.23.2022","gender":"Female","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYyMiwiZW1haWwiOiIxNjcyNjQ5NDk0NTkzLTE4QHlvcG1haWwuY29tIiwiaWF0IjoxNjcyNjQ5NTExLCJleHAiOjE2NzUzMjc5MTF9.C4AESAQghsLvJ6Ap0M_2EKztgbvJ-tcdukaqgoYoSTI"},
	{"name":"1672649494593-19","email":"1672649494593-19@yopmail.com","middlename":"1672649494593-19","lastname":"1672649494593-19","password":"1672649494593-19","birthdate":"12.23.2021","gender":"Male","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYyMywiZW1haWwiOiIxNjcyNjQ5NDk0NTkzLTE5QHlvcG1haWwuY29tIiwiaWF0IjoxNjcyNjQ5NTExLCJleHAiOjE2NzUzMjc5MTF9.b107SN0RTyU40YhDXYsjVjYvchga1AnZ-FSGJdpKeWA"},
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
		expect(retval).toMatchObject({"result":"OK"})
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
		expect(retval).toMatchObject({"result":"OK"});
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
		expect(retval).toMatchObject({"result":"OK"});
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
		expect(retval).toMatchObject({"result":"OK"})
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
		expect(retval).toMatchObject({"result":"OK"})
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
		expect(error).toMatchObject({"result":"FAIL", "error":"Invalid confirmation code."})
	}
	try {
		await serialEntrepreneurFrontendHandlers.resetPasswordStep2(testUsers[userIndex].email, 'SOME-GARBAGE-CONFIRMATION-CODE', testUsers[userIndex].password, fSuccess, fFail);
	} catch (error) {
		tickLog.error(`Correctly caught exception: ${JSON.stringify(error)}`, true);
		expect(error).toMatchObject({"result":"FAIL", "error":"Invalid confirmation code."})		
	}
});

test('updateuserdata', async () => {
	let userIndex = getUserId;
	tickLog.info(`updateuserdata: index ${userIndex} name: ${JSON.stringify(testUsers[userIndex].name)} middlename: ${JSON.stringify(testUsers[userIndex].middlename)} lastname: ${JSON.stringify(testUsers[userIndex].lastname)} birthdate: ${JSON.stringify(testUsers[userIndex].birthdate)} gender: ${JSON.stringify(testUsers[userIndex].gender)}`, true);
	const fSuccess = (props, retval) => {
		tickLog.info(`fSuccess: ${JSON.stringify(props)} ${JSON.stringify(retval)}`, true);
		expect(retval).toMatchObject({"result":"OK"})
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
		expect(retval).toMatchObject({"result":"OK"})
	}
	const fFail = (props, error) => {
		tickLog.error(`fFail: ${JSON.stringify(props)} ${JSON.stringify(error)}`, true);
		expect(true).toBe(false);
	}
	await serialEntrepreneurFrontendHandlers.updateUserData(testUsers[userIndex].token, "SOME NEW NAME", "SOME NEW middlename", "SOME NEW lastname", "2022-12-20", "new-gender", fSuccess, fFail);

	const fSuccess2 = (props, retval) => {
		tickLog.info(`fSuccess: ${JSON.stringify(props)} ${JSON.stringify(retval)}`, true);
		expect(retval).toMatchObject({"result":"OK"})
	}
	const fFail2 = (props, error) => {
		tickLog.error(`fFail: ${JSON.stringify(props)} ${JSON.stringify(error)}`, true);
		expect(true).toBe(false);
	}
	await serialEntrepreneurFrontendHandlers.getUserData(testUsers[userIndex].token, fSuccess2, fFail2);
});
