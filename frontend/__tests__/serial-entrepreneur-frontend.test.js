
// CHECK-BEFORE-BUILD 
// Obtain following users from backend jest tests
let getUserId = 0;
const testUsers = [
	{"name":"1670173467995-0","email":"1670173467995-0@yopmail.com","password":"1670173467995-0","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjg3MywiZW1haWwiOiIxNjcwMTczNDY3OTk1LTBAeW9wbWFpbC5jb20iLCJpYXQiOjE2NzAxNzM0NjgsImV4cCI6MTY3Mjg1MTg2OH0.dUYMDKsgBhSD_oeW9XcskqTf4Mgzedc4qAZEq11r2Vs"},
	{"name":"1670173467995-1","email":"1670173467995-1@yopmail.com","password":"1670173467995-1","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjg3NCwiZW1haWwiOiIxNjcwMTczNDY3OTk1LTFAeW9wbWFpbC5jb20iLCJpYXQiOjE2NzAxNzM0NjksImV4cCI6MTY3Mjg1MTg2OX0.-9wXl79M89Drsom1hxdBFJPkSauujwr7N3aki2c9QDs"},
	{"name":"1670173467995-2","email":"1670173467995-2@yopmail.com","password":"1670173467995-2","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjg3NSwiZW1haWwiOiIxNjcwMTczNDY3OTk1LTJAeW9wbWFpbC5jb20iLCJpYXQiOjE2NzAxNzM0NzAsImV4cCI6MTY3Mjg1MTg3MH0.gzoUG4VhjoZuv6GgpU2cI6XHAmGNi0U-J49BeUvOWy8"},
	{"name":"1670173467995-3","email":"1670173467995-3@yopmail.com","password":"1670173467995-3","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjg3NiwiZW1haWwiOiIxNjcwMTczNDY3OTk1LTNAeW9wbWFpbC5jb20iLCJpYXQiOjE2NzAxNzM0NzEsImV4cCI6MTY3Mjg1MTg3MX0.Gjp-onUBhm3BKm5vyE6bQPBc_4hshsD7WiuuTe-l3R8"},
	{"name":"1670173467995-4","email":"1670173467995-4@yopmail.com","password":"1670173467995-4","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjg3NywiZW1haWwiOiIxNjcwMTczNDY3OTk1LTRAeW9wbWFpbC5jb20iLCJpYXQiOjE2NzAxNzM0NzIsImV4cCI6MTY3Mjg1MTg3Mn0.gj2eLpcmHA2TGi4hyheRrmUaDR0TP8otcNGD0gIOO-U"},
	{"name":"1670173467995-5","email":"1670173467995-5@yopmail.com","password":"1670173467995-5","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjg3OCwiZW1haWwiOiIxNjcwMTczNDY3OTk1LTVAeW9wbWFpbC5jb20iLCJpYXQiOjE2NzAxNzM0NzMsImV4cCI6MTY3Mjg1MTg3M30.HoEs-PT01DkJrs8i1gkwTrnEp4BZ4htdjA__qKmmnoI"},
	{"name":"1670173467995-6","email":"1670173467995-6@yopmail.com","password":"1670173467995-6","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjg3OSwiZW1haWwiOiIxNjcwMTczNDY3OTk1LTZAeW9wbWFpbC5jb20iLCJpYXQiOjE2NzAxNzM0NzQsImV4cCI6MTY3Mjg1MTg3NH0.zXXcTj5irP_iHEkicvdU5uWasomMla3FawrkGA93JLI"},
	{"name":"1670173467995-7","email":"1670173467995-7@yopmail.com","password":"1670173467995-7","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjg4MCwiZW1haWwiOiIxNjcwMTczNDY3OTk1LTdAeW9wbWFpbC5jb20iLCJpYXQiOjE2NzAxNzM0NzUsImV4cCI6MTY3Mjg1MTg3NX0.FumbrmHX_CSTmV1mC84sCnGYJBzpZV8vRW6sPOVQBxc"},
	{"name":"1670173467995-8","email":"1670173467995-8@yopmail.com","password":"1670173467995-8","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjg4MSwiZW1haWwiOiIxNjcwMTczNDY3OTk1LThAeW9wbWFpbC5jb20iLCJpYXQiOjE2NzAxNzM0NzUsImV4cCI6MTY3Mjg1MTg3NX0.VorvJJn1kw9PuJPJUj2TVCKFFwxGaXxH29tHeLxnKDg"},
	{"name":"1670173467995-9","email":"1670173467995-9@yopmail.com","password":"1670173467995-9","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjg4MiwiZW1haWwiOiIxNjcwMTczNDY3OTk1LTlAeW9wbWFpbC5jb20iLCJpYXQiOjE2NzAxNzM0NzYsImV4cCI6MTY3Mjg1MTg3Nn0.gu2LAL6hRN76H3yJsLZg2maDbPG-IpPGbnKmtlLPz5U"},
	{"name":"1670173467995-10","email":"1670173467995-10@yopmail.com","password":"1670173467995-10","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjg4MywiZW1haWwiOiIxNjcwMTczNDY3OTk1LTEwQHlvcG1haWwuY29tIiwiaWF0IjoxNjcwMTczNDc3LCJleHAiOjE2NzI4NTE4Nzd9.56xN23dOIjA-YxIM-I1CLUQp4BJXoaM0JzNb2vEEV68"},
	{"name":"1670173467995-11","email":"1670173467995-11@yopmail.com","password":"1670173467995-11","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjg4NCwiZW1haWwiOiIxNjcwMTczNDY3OTk1LTExQHlvcG1haWwuY29tIiwiaWF0IjoxNjcwMTczNDc4LCJleHAiOjE2NzI4NTE4Nzh9.6LVdNJuayjTgUNj1fSAqu5TXm0qjtZV-1PtiCzWMYgo"},
	{"name":"1670173467995-12","email":"1670173467995-12@yopmail.com","password":"1670173467995-12","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjg4NSwiZW1haWwiOiIxNjcwMTczNDY3OTk1LTEyQHlvcG1haWwuY29tIiwiaWF0IjoxNjcwMTczNDc5LCJleHAiOjE2NzI4NTE4Nzl9.LZxoWFWUky3Y93SNqDS5wZqtwTJUuIog_ODR6GvZ1cw"},
	{"name":"1670173467995-13","email":"1670173467995-13@yopmail.com","password":"1670173467995-13","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjg4NiwiZW1haWwiOiIxNjcwMTczNDY3OTk1LTEzQHlvcG1haWwuY29tIiwiaWF0IjoxNjcwMTczNDgwLCJleHAiOjE2NzI4NTE4ODB9.nNEJlESRaB8cdZagqkeTlpHGkOscK1LYq8zco-INrng"},
	{"name":"1670173467995-14","email":"1670173467995-14@yopmail.com","password":"1670173467995-14","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjg4NywiZW1haWwiOiIxNjcwMTczNDY3OTk1LTE0QHlvcG1haWwuY29tIiwiaWF0IjoxNjcwMTczNDgxLCJleHAiOjE2NzI4NTE4ODF9._n9jQy8eIVsLUJVvwwEhuYDDvm1ZrJfSDYfCzoBeYAE"},
	{"name":"1670173467995-15","email":"1670173467995-15@yopmail.com","password":"1670173467995-15","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjg4OCwiZW1haWwiOiIxNjcwMTczNDY3OTk1LTE1QHlvcG1haWwuY29tIiwiaWF0IjoxNjcwMTczNDgyLCJleHAiOjE2NzI4NTE4ODJ9.geHf1yp_cIxhvNm4gxSgcLq29aJN5Glp8E7pQZc7ZGI"},
	{"name":"1670173467995-16","email":"1670173467995-16@yopmail.com","password":"1670173467995-16","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjg4OSwiZW1haWwiOiIxNjcwMTczNDY3OTk1LTE2QHlvcG1haWwuY29tIiwiaWF0IjoxNjcwMTczNDgyLCJleHAiOjE2NzI4NTE4ODJ9.7mNzvHSWkJNeXXbPhl3Kt_BUQjfUqRY6xdiDdtOipr0"},
	{"name":"1670173467995-17","email":"1670173467995-17@yopmail.com","password":"1670173467995-17","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjg5MCwiZW1haWwiOiIxNjcwMTczNDY3OTk1LTE3QHlvcG1haWwuY29tIiwiaWF0IjoxNjcwMTczNDgzLCJleHAiOjE2NzI4NTE4ODN9.zLLfsuLqoqXcjNqPq_LygobiIVOXPqPRyijfU5FfMYA"},
	{"name":"1670173467995-18","email":"1670173467995-18@yopmail.com","password":"1670173467995-18","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjg5MSwiZW1haWwiOiIxNjcwMTczNDY3OTk1LTE4QHlvcG1haWwuY29tIiwiaWF0IjoxNjcwMTczNDg0LCJleHAiOjE2NzI4NTE4ODR9.MMXGdlpFr4kN4pJz3p-HJqOoTEpYrlxE6cyH1s85CIM"},
	{"name":"1670173467995-19","email":"1670173467995-19@yopmail.com","password":"1670173467995-19","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjg5MiwiZW1haWwiOiIxNjcwMTczNDY3OTk1LTE5QHlvcG1haWwuY29tIiwiaWF0IjoxNjcwMTczNDg1LCJleHAiOjE2NzI4NTE4ODV9.RvtviddLYZyiU3vvP9nT1jr6zk6qV4-H-ibJ1FC9pc8"},	
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
