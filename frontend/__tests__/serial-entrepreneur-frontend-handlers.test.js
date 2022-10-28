
// CHECK-BEFORE-BUILD 
// Obtain following users from backend jest tests
const testUsers = [
	{"name":"1666980976477-0","email":"1666980976477-0@yopmail.com","password":"1666980976477-0","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI5NiwiZW1haWwiOiIxNjY2OTgwOTc2NDc3LTBAeW9wbWFpbC5jb20iLCJpYXQiOjE2NjY5ODA5NzcsImV4cCI6MTY2OTY1OTM3N30.MnfZ4Cm5BH6Fv9tdWTA8AxvtDoU0mHjb5JjTfc8W_yQ"},
	{"name":"1666980976477-1","email":"1666980976477-1@yopmail.com","password":"1666980976477-1","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI5NywiZW1haWwiOiIxNjY2OTgwOTc2NDc3LTFAeW9wbWFpbC5jb20iLCJpYXQiOjE2NjY5ODA5NzgsImV4cCI6MTY2OTY1OTM3OH0.8RiRUkqC_R9uuK5KQb56wBn2MgebsOy7Zk6nh0DsIqk"},
	{"name":"1666980976477-2","email":"1666980976477-2@yopmail.com","password":"1666980976477-2","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI5OCwiZW1haWwiOiIxNjY2OTgwOTc2NDc3LTJAeW9wbWFpbC5jb20iLCJpYXQiOjE2NjY5ODA5NzksImV4cCI6MTY2OTY1OTM3OX0.a7NnFSo77q15-Cnbwqy8qcc97JwDTr0d5qrm05N8V3w"},
	{"name":"1666980976477-3","email":"1666980976477-3@yopmail.com","password":"1666980976477-3","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI5OSwiZW1haWwiOiIxNjY2OTgwOTc2NDc3LTNAeW9wbWFpbC5jb20iLCJpYXQiOjE2NjY5ODA5ODAsImV4cCI6MTY2OTY1OTM4MH0.LZAliTqLoYO4V78wGmeOLhA4_ZHuau1WvPFcuQjw6mE"},
	{"name":"1666980976477-4","email":"1666980976477-4@yopmail.com","password":"1666980976477-4","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMwMCwiZW1haWwiOiIxNjY2OTgwOTc2NDc3LTRAeW9wbWFpbC5jb20iLCJpYXQiOjE2NjY5ODA5ODEsImV4cCI6MTY2OTY1OTM4MX0.m-lFED54pv_Gz9JhLF4TG7SUKo4Y2V5iKYhvJYV54EA"},
	{"name":"1666980976477-5","email":"1666980976477-5@yopmail.com","password":"1666980976477-5","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMwMSwiZW1haWwiOiIxNjY2OTgwOTc2NDc3LTVAeW9wbWFpbC5jb20iLCJpYXQiOjE2NjY5ODA5ODEsImV4cCI6MTY2OTY1OTM4MX0.aaXDZGCAmcTi3BrH7VT9kWzY7qtfzXGRz731knHbqog"},
	{"name":"1666980976477-6","email":"1666980976477-6@yopmail.com","password":"1666980976477-6","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMwMiwiZW1haWwiOiIxNjY2OTgwOTc2NDc3LTZAeW9wbWFpbC5jb20iLCJpYXQiOjE2NjY5ODA5ODIsImV4cCI6MTY2OTY1OTM4Mn0.6fPOExGKbG4fC5LAy-SMgM5ZAdtjsWxVV26GS0Hbcdo"},
	{"name":"1666980976477-7","email":"1666980976477-7@yopmail.com","password":"1666980976477-7","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMwMywiZW1haWwiOiIxNjY2OTgwOTc2NDc3LTdAeW9wbWFpbC5jb20iLCJpYXQiOjE2NjY5ODA5ODMsImV4cCI6MTY2OTY1OTM4M30.aVzaYpXxYQZFrhEoQ39WUgWIFATbNvMGe5GX-Nc8G68"},
	{"name":"1666980976477-8","email":"1666980976477-8@yopmail.com","password":"1666980976477-8","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMwNCwiZW1haWwiOiIxNjY2OTgwOTc2NDc3LThAeW9wbWFpbC5jb20iLCJpYXQiOjE2NjY5ODA5ODQsImV4cCI6MTY2OTY1OTM4NH0.4MDN5D1YIm4qGFYVV8p13F95HzYcy-SczUy_vqJT5jI"},
	{"name":"1666980976477-9","email":"1666980976477-9@yopmail.com","password":"1666980976477-9","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMwNSwiZW1haWwiOiIxNjY2OTgwOTc2NDc3LTlAeW9wbWFpbC5jb20iLCJpYXQiOjE2NjY5ODA5ODUsImV4cCI6MTY2OTY1OTM4NX0.l01N1T4lMWFLWdEeaUx_Mu8Xw0uwwI9yUKDDcIYt4RA"},	
];

let getUserId = 5;


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
	let userIndex = getUserId++;
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

