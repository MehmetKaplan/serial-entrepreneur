
// CHECK-BEFORE-BUILD 
// Obtain following users from backend jest tests
let getUserId = 0;
const testUsers = [
	{"name":"1668262651053-8","email":"1668262651053-8@yopmail.com","password":"1668262651053-8","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjc1MywiZW1haWwiOiIxNjY4MjYyNjUxMDUzLThAeW9wbWFpbC5jb20iLCJpYXQiOjE2NjgyNjI2NTksImV4cCI6MTY3MDk0MTA1OX0.R3i4oPraRwoIdbI4GaPZCl5nrx-GQz-e2YO0U6GW5-0"},
	{"name":"1668262651053-9","email":"1668262651053-9@yopmail.com","password":"1668262651053-9","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjc1NCwiZW1haWwiOiIxNjY4MjYyNjUxMDUzLTlAeW9wbWFpbC5jb20iLCJpYXQiOjE2NjgyNjI2NjAsImV4cCI6MTY3MDk0MTA2MH0.ciEAMaFOfeV5FtLEw_ICDfja1g2B3_TlFqmkTznYC9Y"},
	{"name":"1668262651053-10","email":"1668262651053-10@yopmail.com","password":"1668262651053-10","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjc1NSwiZW1haWwiOiIxNjY4MjYyNjUxMDUzLTEwQHlvcG1haWwuY29tIiwiaWF0IjoxNjY4MjYyNjYxLCJleHAiOjE2NzA5NDEwNjF9.EzKl7PsedrksY3dcQrhNpoTZQCSinzAM3378QUZQREg"},
	{"name":"1668262651053-11","email":"1668262651053-11@yopmail.com","password":"1668262651053-11","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjc1NiwiZW1haWwiOiIxNjY4MjYyNjUxMDUzLTExQHlvcG1haWwuY29tIiwiaWF0IjoxNjY4MjYyNjYyLCJleHAiOjE2NzA5NDEwNjJ9.GN7rq3OfcwPCEPpUOq_xctKCmJa4VS7FC0gLt8nUYfU"},
	{"name":"1668262651053-12","email":"1668262651053-12@yopmail.com","password":"1668262651053-12","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjc1NywiZW1haWwiOiIxNjY4MjYyNjUxMDUzLTEyQHlvcG1haWwuY29tIiwiaWF0IjoxNjY4MjYyNjYzLCJleHAiOjE2NzA5NDEwNjN9.HjbuBgaOoNYkoMVA3U2DjAN13xTmQhrygiXsje69S84"},
	{"name":"1668262651053-13","email":"1668262651053-13@yopmail.com","password":"1668262651053-13","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjc1OCwiZW1haWwiOiIxNjY4MjYyNjUxMDUzLTEzQHlvcG1haWwuY29tIiwiaWF0IjoxNjY4MjYyNjY0LCJleHAiOjE2NzA5NDEwNjR9.kol6-tZN623UeSJqNrwzY-UpAFLd67g0n2n-E-VGQlE"},
	{"name":"1668262651053-14","email":"1668262651053-14@yopmail.com","password":"1668262651053-14","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjc1OSwiZW1haWwiOiIxNjY4MjYyNjUxMDUzLTE0QHlvcG1haWwuY29tIiwiaWF0IjoxNjY4MjYyNjY1LCJleHAiOjE2NzA5NDEwNjV9.nY7wImQ4vH_vINwP7_HgaQk0IrvOPcmDn5WGyqv8MnQ"},
	{"name":"1668262651053-15","email":"1668262651053-15@yopmail.com","password":"1668262651053-15","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjc2MCwiZW1haWwiOiIxNjY4MjYyNjUxMDUzLTE1QHlvcG1haWwuY29tIiwiaWF0IjoxNjY4MjYyNjY2LCJleHAiOjE2NzA5NDEwNjZ9.Fuza1jTL-R_TqbyEJ2EM52dcX2mTcqltz9SDvbIGPEw"},
	{"name":"1668262651053-16","email":"1668262651053-16@yopmail.com","password":"1668262651053-16","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjc2MSwiZW1haWwiOiIxNjY4MjYyNjUxMDUzLTE2QHlvcG1haWwuY29tIiwiaWF0IjoxNjY4MjYyNjY3LCJleHAiOjE2NzA5NDEwNjd9.wvuQKTEM4X3ENdjM7QB9iFniRfhieJKE_oKE-5ltUns"},
	{"name":"1668262651053-17","email":"1668262651053-17@yopmail.com","password":"1668262651053-17","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjc2MiwiZW1haWwiOiIxNjY4MjYyNjUxMDUzLTE3QHlvcG1haWwuY29tIiwiaWF0IjoxNjY4MjYyNjY4LCJleHAiOjE2NzA5NDEwNjh9.c2FZpXtnqMMFQE6FlKq9FHsN3kfE0Lxy9VV_arVHuYE"},
	{"name":"1668262651053-18","email":"1668262651053-18@yopmail.com","password":"1668262651053-18","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjc2MywiZW1haWwiOiIxNjY4MjYyNjUxMDUzLTE4QHlvcG1haWwuY29tIiwiaWF0IjoxNjY4MjYyNjY5LCJleHAiOjE2NzA5NDEwNjl9.ZfApgjOtr3uKV1PwfW_5VDT6m1JSHaa1qUvLyA-vzas"},
	{"name":"1668262651053-19","email":"1668262651053-19@yopmail.com","password":"1668262651053-19","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjc2NCwiZW1haWwiOiIxNjY4MjYyNjUxMDUzLTE5QHlvcG1haWwuY29tIiwiaWF0IjoxNjY4MjYyNjY5LCJleHAiOjE2NzA5NDEwNjl9.K3mLixN_0vWJqmUBfeOBKhXt3hkJcZTF3e86K88woB4"},
];



const apiBackend = 'http://development.computatus.com:61976'; // modify this with your backend

const tickLog = require('tick-log');
const serialEntrepreneurFrontendHandlers = require('../serial-entrepreneur-frontend');

beforeAll(async () => {
	serialEntrepreneurFrontendHandlers.init({
		apiBackend: apiBackend,
		debugMode: true,
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
