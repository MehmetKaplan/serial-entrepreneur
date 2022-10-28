
// CHECK-BEFORE-BUILD 
// Obtain following users from backend jest tests
let getUserId = 8;
const testUsers = [
	{"name":"1666982550049-0","email":"1666982550049-0@yopmail.com","password":"1666982550049-0","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMxOCwiZW1haWwiOiIxNjY2OTgyNTUwMDQ5LTBAeW9wbWFpbC5jb20iLCJpYXQiOjE2NjY5ODI1NTAsImV4cCI6MTY2OTY2MDk1MH0.-WmCARmCmYTVyqn4lRG5yDRZpvzJvqJfrfVCK9FmjQ8"},
	{"name":"1666982550049-1","email":"1666982550049-1@yopmail.com","password":"1666982550049-1","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMxOSwiZW1haWwiOiIxNjY2OTgyNTUwMDQ5LTFAeW9wbWFpbC5jb20iLCJpYXQiOjE2NjY5ODI1NTEsImV4cCI6MTY2OTY2MDk1MX0.2ZakL-E036y7jYrmDjS5033-gnGK2OAg6D8LAd8YBVs"},
	{"name":"1666982550049-2","email":"1666982550049-2@yopmail.com","password":"1666982550049-2","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMyMCwiZW1haWwiOiIxNjY2OTgyNTUwMDQ5LTJAeW9wbWFpbC5jb20iLCJpYXQiOjE2NjY5ODI1NTIsImV4cCI6MTY2OTY2MDk1Mn0.2YL-bNHGzG3b3z1hZj4wr1WWfLrvdx-it79kBVx2Kg4"},
	{"name":"1666982550049-3","email":"1666982550049-3@yopmail.com","password":"1666982550049-3","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMyMSwiZW1haWwiOiIxNjY2OTgyNTUwMDQ5LTNAeW9wbWFpbC5jb20iLCJpYXQiOjE2NjY5ODI1NTMsImV4cCI6MTY2OTY2MDk1M30.PNo1UhsnDvOiMi3_R9yT0YptIMU_0ztpFXrub2w7Rqg"},
	{"name":"1666982550049-4","email":"1666982550049-4@yopmail.com","password":"1666982550049-4","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMyMiwiZW1haWwiOiIxNjY2OTgyNTUwMDQ5LTRAeW9wbWFpbC5jb20iLCJpYXQiOjE2NjY5ODI1NTQsImV4cCI6MTY2OTY2MDk1NH0.rA0--5q57ky3sDM0Uz0Elxos93eBuHr3oqwToPAUuhQ"},
	{"name":"1666982550049-5","email":"1666982550049-5@yopmail.com","password":"1666982550049-5","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMyMywiZW1haWwiOiIxNjY2OTgyNTUwMDQ5LTVAeW9wbWFpbC5jb20iLCJpYXQiOjE2NjY5ODI1NTUsImV4cCI6MTY2OTY2MDk1NX0.vxUdSNMkYKhmGXi4qgF1316Wgexe9xBVhUX--kmt-DE"},
	{"name":"1666982550049-6","email":"1666982550049-6@yopmail.com","password":"1666982550049-6","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMyNCwiZW1haWwiOiIxNjY2OTgyNTUwMDQ5LTZAeW9wbWFpbC5jb20iLCJpYXQiOjE2NjY5ODI1NTYsImV4cCI6MTY2OTY2MDk1Nn0.EjeIwrQdGsZPAq4bObX81GrKR7PFaDWmvFCz_nQcsQQ"},
	{"name":"1666982550049-7","email":"1666982550049-7@yopmail.com","password":"1666982550049-7","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMyNSwiZW1haWwiOiIxNjY2OTgyNTUwMDQ5LTdAeW9wbWFpbC5jb20iLCJpYXQiOjE2NjY5ODI1NTcsImV4cCI6MTY2OTY2MDk1N30.TB_aIJiPk_FHVU0D3FPEFryE25lL_S6slqS1EyMT20A"},
	{"name":"1666982550049-8","email":"1666982550049-8@yopmail.com","password":"1666982550049-8","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMyNiwiZW1haWwiOiIxNjY2OTgyNTUwMDQ5LThAeW9wbWFpbC5jb20iLCJpYXQiOjE2NjY5ODI1NTgsImV4cCI6MTY2OTY2MDk1OH0.-tMVrUbYsYucEv8nMYvrGlOLNjmeBxiqAi4Op2anZZw"},
	{"name":"1666982550049-9","email":"1666982550049-9@yopmail.com","password":"1666982550049-9","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMyNywiZW1haWwiOiIxNjY2OTgyNTUwMDQ5LTlAeW9wbWFpbC5jb20iLCJpYXQiOjE2NjY5ODI1NTksImV4cCI6MTY2OTY2MDk1OX0.53MKgtEcm3c6ic_RIqCpdSmjIwnrhyj3vDKlctlYs7c"},
	{"name":"1666982550049-10","email":"1666982550049-10@yopmail.com","password":"1666982550049-10","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMyOCwiZW1haWwiOiIxNjY2OTgyNTUwMDQ5LTEwQHlvcG1haWwuY29tIiwiaWF0IjoxNjY2OTgyNTYwLCJleHAiOjE2Njk2NjA5NjB9.A36yzE0oi8ZQ_RP8Id8THf3Mk8n5vIhio9OM3oBDOk8"},
	{"name":"1666982550049-11","email":"1666982550049-11@yopmail.com","password":"1666982550049-11","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMyOSwiZW1haWwiOiIxNjY2OTgyNTUwMDQ5LTExQHlvcG1haWwuY29tIiwiaWF0IjoxNjY2OTgyNTYxLCJleHAiOjE2Njk2NjA5NjF9.Q_huRIJ-Gb25TG9L1Zt-cf-pHMzykOSZqvezv3rF79M"},
	{"name":"1666982550049-12","email":"1666982550049-12@yopmail.com","password":"1666982550049-12","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMzMCwiZW1haWwiOiIxNjY2OTgyNTUwMDQ5LTEyQHlvcG1haWwuY29tIiwiaWF0IjoxNjY2OTgyNTYxLCJleHAiOjE2Njk2NjA5NjF9.ZVApPyN3MBaLif148jv86D8A8Qhp__B039fa1C7L3eA"},
	{"name":"1666982550049-13","email":"1666982550049-13@yopmail.com","password":"1666982550049-13","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMzMSwiZW1haWwiOiIxNjY2OTgyNTUwMDQ5LTEzQHlvcG1haWwuY29tIiwiaWF0IjoxNjY2OTgyNTYyLCJleHAiOjE2Njk2NjA5NjJ9.1W1s48c3bjWxwJI2tN0mP2enTGJZ6HeaYOjHWv3_bBk"},
	{"name":"1666982550049-14","email":"1666982550049-14@yopmail.com","password":"1666982550049-14","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMzMiwiZW1haWwiOiIxNjY2OTgyNTUwMDQ5LTE0QHlvcG1haWwuY29tIiwiaWF0IjoxNjY2OTgyNTYzLCJleHAiOjE2Njk2NjA5NjN9.cb9WpzzFZZaLFco3jbsK82bm1V6bFDvhzyUQmsLF6xk"},
	{"name":"1666982550049-15","email":"1666982550049-15@yopmail.com","password":"1666982550049-15","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMzMywiZW1haWwiOiIxNjY2OTgyNTUwMDQ5LTE1QHlvcG1haWwuY29tIiwiaWF0IjoxNjY2OTgyNTY0LCJleHAiOjE2Njk2NjA5NjR9.IZrXfogUYrDOIN5FV__0fXbqv0MvdMUIcnElLfo58lU"},
	{"name":"1666982550049-16","email":"1666982550049-16@yopmail.com","password":"1666982550049-16","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMzNCwiZW1haWwiOiIxNjY2OTgyNTUwMDQ5LTE2QHlvcG1haWwuY29tIiwiaWF0IjoxNjY2OTgyNTY1LCJleHAiOjE2Njk2NjA5NjV9.tV6OiXx_z1GQQvZoqLOqIO0cUzLZg77gvpKElK99exw"},
	{"name":"1666982550049-17","email":"1666982550049-17@yopmail.com","password":"1666982550049-17","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMzNSwiZW1haWwiOiIxNjY2OTgyNTUwMDQ5LTE3QHlvcG1haWwuY29tIiwiaWF0IjoxNjY2OTgyNTY2LCJleHAiOjE2Njk2NjA5NjZ9.3VMr4rRWVtjiNjBhePn56_LzK16gWCaac4FFdbVdnWU"},
	{"name":"1666982550049-18","email":"1666982550049-18@yopmail.com","password":"1666982550049-18","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMzNiwiZW1haWwiOiIxNjY2OTgyNTUwMDQ5LTE4QHlvcG1haWwuY29tIiwiaWF0IjoxNjY2OTgyNTY3LCJleHAiOjE2Njk2NjA5Njd9.xZZasp58dpN-PwzlUm6RUHRP6Wf1V--5zBIkgXBNM-Q"},
	{"name":"1666982550049-19","email":"1666982550049-19@yopmail.com","password":"1666982550049-19","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMzNywiZW1haWwiOiIxNjY2OTgyNTUwMDQ5LTE5QHlvcG1haWwuY29tIiwiaWF0IjoxNjY2OTgyNTY4LCJleHAiOjE2Njk2NjA5Njh9.SSyxogz1YrLqbooCF7hQFcyv0DwopKMwQL1Em8g3Zmw"},
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
		expect(retval).toMatchObject({"result":"OK"})
	}
	const fFail = (props, error) => {
		tickLog.error(`fFail: ${JSON.stringify(props)} ${JSON.stringify(error)}`);
		expect(true).toBe(false);
	}
	await serialEntrepreneurFrontendHandlers.loginUserViaMail(testUsers[userIndex].email, testUsers[userIndex].password, fSuccess, fFail);
});

test('loginuserviatoken', async () => {
	let userIndex = getUserId;
	tickLog.info(`loginuserviatoken: index ${userIndex} name: ${JSON.stringify(testUsers[userIndex].name)}`);
	const fSuccess = (props, retval) => {
		tickLog.info(`fSuccess: ${JSON.stringify(props)} ${JSON.stringify(retval)}`);
		expect(retval).toMatchObject({"result":"OK"})
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