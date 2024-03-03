
// CHECK-BEFORE-BUILD 
// Obtain following users from backend jest tests
let getUserId = 0;
const testUsers = [
	{ "name": "1709487786289-0", "email": "1709487786289-0@yopmail.com", "middlename": "1709487786289-0", "lastname": "1709487786289-0", "password": "1709487786289-0", "birthdate": "12.23.2022", "gender": "Female", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyNjc4Yjk3Ni1iNWNlLTRkZWEtOWQxYS02ZmY5MDExMGJjYzMiLCJlbWFpbCI6IjE3MDk0ODc3ODYyODktMEB5b3BtYWlsLmNvbSIsImlhdCI6MTcwOTQ4Nzc4NywiZXhwIjoxNzEyMTY2MTg3fQ.CdfRM9rnBTY6RMyjYcAJSeEzIavbPbLksuetdwPlWcM" },
	{ "name": "1709487786289-1", "email": "1709487786289-1@yopmail.com", "middlename": "1709487786289-1", "lastname": "1709487786289-1", "password": "1709487786289-1", "birthdate": "12.23.2021", "gender": "Male", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyMDdkYzJlZC1lM2MyLTRhOTItODE2Yi03OGQyNGU1N2Q5ZTQiLCJlbWFpbCI6IjE3MDk0ODc3ODYyODktMUB5b3BtYWlsLmNvbSIsImlhdCI6MTcwOTQ4Nzc4NywiZXhwIjoxNzEyMTY2MTg3fQ.Tsi6mjVF_vNbB7xyMp0ExwSmjxyakUAVnxXkSC-pEAY" },
	{ "name": "1709487786289-2", "email": "1709487786289-2@yopmail.com", "middlename": "1709487786289-2", "lastname": "1709487786289-2", "password": "1709487786289-2", "birthdate": "12.23.2022", "gender": "Female", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmMDViNDU4Ny04MmVlLTQyNDAtOWI5Ny1mNzhjMTFiOWVkNTQiLCJlbWFpbCI6IjE3MDk0ODc3ODYyODktMkB5b3BtYWlsLmNvbSIsImlhdCI6MTcwOTQ4Nzc4OCwiZXhwIjoxNzEyMTY2MTg4fQ.ftOkEA8Wc5GjiPECHjLqpX5zfqkaEi367tybgnZAyW0" },
	{ "name": "1709487786289-3", "email": "1709487786289-3@yopmail.com", "middlename": "1709487786289-3", "lastname": "1709487786289-3", "password": "1709487786289-3", "birthdate": "12.23.2021", "gender": "Male", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJlMmM0ODgwNS1lM2RhLTQxNzktOGZjMi1lN2NjMDQ5ZmRjZDIiLCJlbWFpbCI6IjE3MDk0ODc3ODYyODktM0B5b3BtYWlsLmNvbSIsImlhdCI6MTcwOTQ4Nzc4OSwiZXhwIjoxNzEyMTY2MTg5fQ.i86CU6j1S5cn9Qize-9-jBmS5z7yApaOjJyNVP7whxc" },
	{ "name": "1709487786289-4", "email": "1709487786289-4@yopmail.com", "middlename": "1709487786289-4", "lastname": "1709487786289-4", "password": "1709487786289-4", "birthdate": "12.23.2022", "gender": "Female", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjFlZTdlZC01YTg0LTQ2M2ItYmFmMS04M2M2NTgxZDQ0Y2UiLCJlbWFpbCI6IjE3MDk0ODc3ODYyODktNEB5b3BtYWlsLmNvbSIsImlhdCI6MTcwOTQ4Nzc5MCwiZXhwIjoxNzEyMTY2MTkwfQ.PU_7rsPWYyo3FuFdxrMaEDUKuh6GO2BrRGki4Gsq99E" },
	{ "name": "1709487786289-5", "email": "1709487786289-5@yopmail.com", "middlename": "1709487786289-5", "lastname": "1709487786289-5", "password": "1709487786289-5", "birthdate": "12.23.2021", "gender": "Male", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2YWJiMDEyNC00ZTlmLTQ2MWQtOTQzNy00OTkzYWVmZWFiN2EiLCJlbWFpbCI6IjE3MDk0ODc3ODYyODktNUB5b3BtYWlsLmNvbSIsImlhdCI6MTcwOTQ4Nzc5MCwiZXhwIjoxNzEyMTY2MTkwfQ.50U-NHdSG24jllB3v187MJQhj46vVrd-9Mp8vu0NGXc" },
	{ "name": "1709487786289-6", "email": "1709487786289-6@yopmail.com", "middlename": "1709487786289-6", "lastname": "1709487786289-6", "password": "1709487786289-6", "birthdate": "12.23.2022", "gender": "Female", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ZmQ4ZDk3YS00YWFkLTQxNWEtYmFkYS1lMTNmZWU4Yjk2N2MiLCJlbWFpbCI6IjE3MDk0ODc3ODYyODktNkB5b3BtYWlsLmNvbSIsImlhdCI6MTcwOTQ4Nzc5MSwiZXhwIjoxNzEyMTY2MTkxfQ.MPAY-eGUzGiZzj2KLRUoGvftMHfe2FP27D6xA1QeP9o" },
	{ "name": "1709487786289-7", "email": "1709487786289-7@yopmail.com", "middlename": "1709487786289-7", "lastname": "1709487786289-7", "password": "1709487786289-7", "birthdate": "12.23.2021", "gender": "Male", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5YzY5OTVjOC0wN2QzLTQ5YzYtODIxMC1mOGY5MzA3NzRjODgiLCJlbWFpbCI6IjE3MDk0ODc3ODYyODktN0B5b3BtYWlsLmNvbSIsImlhdCI6MTcwOTQ4Nzc5MiwiZXhwIjoxNzEyMTY2MTkyfQ.RQzlqGQkUL_ExO87dPxEBWk7IJfdA3nTLrVpw3NMmG8" },
	{ "name": "1709487786289-8", "email": "1709487786289-8@yopmail.com", "middlename": "1709487786289-8", "lastname": "1709487786289-8", "password": "1709487786289-8", "birthdate": "12.23.2022", "gender": "Female", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjY2JmOGIyYS04YzViLTQwNGItYmFiYi1mZGFhODYzYTMzNWIiLCJlbWFpbCI6IjE3MDk0ODc3ODYyODktOEB5b3BtYWlsLmNvbSIsImlhdCI6MTcwOTQ4Nzc5MywiZXhwIjoxNzEyMTY2MTkzfQ.Qnf5jm3ES0ZHmrWCiXhPs25hJQAghOU-M7mDTljaKIs" },
	{ "name": "1709487786289-9", "email": "1709487786289-9@yopmail.com", "middlename": "1709487786289-9", "lastname": "1709487786289-9", "password": "1709487786289-9", "birthdate": "12.23.2021", "gender": "Male", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZDIzOWJiMC1lNTQwLTRmMTQtYWRlOC01NDUxYmUxOTUyMDkiLCJlbWFpbCI6IjE3MDk0ODc3ODYyODktOUB5b3BtYWlsLmNvbSIsImlhdCI6MTcwOTQ4Nzc5MywiZXhwIjoxNzEyMTY2MTkzfQ.BJ8gPZH6SZlE22PJgmMtsMu0RPfUInRueWzGgD2zois" },
	{ "name": "1709487786289-10", "email": "1709487786289-10@yopmail.com", "middlename": "1709487786289-10", "lastname": "1709487786289-10", "password": "1709487786289-10", "birthdate": "12.23.2022", "gender": "Female", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4ZDU0ODJjZi05MTI2LTQ5NWItYWZhYy1iNjRjMzMyMzFkYzEiLCJlbWFpbCI6IjE3MDk0ODc3ODYyODktMTBAeW9wbWFpbC5jb20iLCJpYXQiOjE3MDk0ODc3OTQsImV4cCI6MTcxMjE2NjE5NH0.jfYUJrwbd5FU5YB-SlbnNnGbG62DvaDLzhZqKvn43e0" },
	{ "name": "1709487786289-11", "email": "1709487786289-11@yopmail.com", "middlename": "1709487786289-11", "lastname": "1709487786289-11", "password": "1709487786289-11", "birthdate": "12.23.2021", "gender": "Male", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzQ0NTM4MS0zZTVlLTRkNWMtOWM3NS03Nzc0YzEzYjg4YmUiLCJlbWFpbCI6IjE3MDk0ODc3ODYyODktMTFAeW9wbWFpbC5jb20iLCJpYXQiOjE3MDk0ODc3OTUsImV4cCI6MTcxMjE2NjE5NX0.VZH_jdCv9yVBiExbl1PfRAWRbN8uSEBc1izxLouo3O8" },
	{ "name": "1709487786289-12", "email": "1709487786289-12@yopmail.com", "middlename": "1709487786289-12", "lastname": "1709487786289-12", "password": "1709487786289-12", "birthdate": "12.23.2022", "gender": "Female", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDIzZGE4Yi1iZGUxLTQ2OTEtYjY3MC1kMjIxODY3NjY0YTUiLCJlbWFpbCI6IjE3MDk0ODc3ODYyODktMTJAeW9wbWFpbC5jb20iLCJpYXQiOjE3MDk0ODc3OTYsImV4cCI6MTcxMjE2NjE5Nn0.I7DENF0MTekfbwHiomYMP1fCYcdnaZRQDrrP3YRnYig" },
	{ "name": "1709487786289-13", "email": "1709487786289-13@yopmail.com", "middlename": "1709487786289-13", "lastname": "1709487786289-13", "password": "1709487786289-13", "birthdate": "12.23.2021", "gender": "Male", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTc0MDk4Zi00MTJhLTQ4ZDQtOWQ3Yi1mYWE4MDc0ZmU2ZjUiLCJlbWFpbCI6IjE3MDk0ODc3ODYyODktMTNAeW9wbWFpbC5jb20iLCJpYXQiOjE3MDk0ODc3OTYsImV4cCI6MTcxMjE2NjE5Nn0.8U1yIdpYFKzfI9dwrRQMxznDtkth2WeFaN8SOF21T_s" },
	{ "name": "1709487786289-14", "email": "1709487786289-14@yopmail.com", "middlename": "1709487786289-14", "lastname": "1709487786289-14", "password": "1709487786289-14", "birthdate": "12.23.2022", "gender": "Female", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiNTEzZTY3NC0xZDhjLTQ1MjQtODc5OS0xNDIxMDRkMDgzMjEiLCJlbWFpbCI6IjE3MDk0ODc3ODYyODktMTRAeW9wbWFpbC5jb20iLCJpYXQiOjE3MDk0ODc3OTcsImV4cCI6MTcxMjE2NjE5N30.TW3OQnp0nYclQJlpw_6apvTO7TkOJ5T-9ktHtiazG7Y" },
	{ "name": "1709487786289-15", "email": "1709487786289-15@yopmail.com", "middlename": "1709487786289-15", "lastname": "1709487786289-15", "password": "1709487786289-15", "birthdate": "12.23.2021", "gender": "Male", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTI3MGY1OC04MTBiLTRmYmYtYWZlMC0yNmM1MjE1ZmFkY2IiLCJlbWFpbCI6IjE3MDk0ODc3ODYyODktMTVAeW9wbWFpbC5jb20iLCJpYXQiOjE3MDk0ODc3OTgsImV4cCI6MTcxMjE2NjE5OH0.HTAmOVGKWpXjyKlMe7UC3WajasmUZuhtoy87Ldm6HQ4" },
	{ "name": "1709487786289-16", "email": "1709487786289-16@yopmail.com", "middlename": "1709487786289-16", "lastname": "1709487786289-16", "password": "1709487786289-16", "birthdate": "12.23.2022", "gender": "Female", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjZDE4ZDMyMC01ZTRlLTQ1NDgtYTg0Yy1iMDI3ODFlYTM3OTEiLCJlbWFpbCI6IjE3MDk0ODc3ODYyODktMTZAeW9wbWFpbC5jb20iLCJpYXQiOjE3MDk0ODc3OTgsImV4cCI6MTcxMjE2NjE5OH0.aW5q9ESXxWkuP5vRGOyo4fYrj6JTPl2ODwKBAHYBfNc" },
	{ "name": "1709487786289-17", "email": "1709487786289-17@yopmail.com", "middlename": "1709487786289-17", "lastname": "1709487786289-17", "password": "1709487786289-17", "birthdate": "12.23.2021", "gender": "Male", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiMjE5OTU0MS1iMjIzLTQ0MDYtOWU5MC0yODIyOTU1YzEzZDkiLCJlbWFpbCI6IjE3MDk0ODc3ODYyODktMTdAeW9wbWFpbC5jb20iLCJpYXQiOjE3MDk0ODc3OTksImV4cCI6MTcxMjE2NjE5OX0.R0Ex-Z4cBchoz6qVT4-wZMpPXoWyw6XRuIgEF3IJ35Y" },
	{ "name": "1709487786289-18", "email": "1709487786289-18@yopmail.com", "middlename": "1709487786289-18", "lastname": "1709487786289-18", "password": "1709487786289-18", "birthdate": "12.23.2022", "gender": "Female", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkZmQ3YjdhNC00N2I4LTQxZmMtYmM1NC1iMmYxMWI2NjU0YjEiLCJlbWFpbCI6IjE3MDk0ODc3ODYyODktMThAeW9wbWFpbC5jb20iLCJpYXQiOjE3MDk0ODc4MDAsImV4cCI6MTcxMjE2NjIwMH0.RvEj53oBvSOa2J11hIIkdBTUHwGdttY9_gCB3T7JHl0" },
	{ "name": "1709487786289-19", "email": "1709487786289-19@yopmail.com", "middlename": "1709487786289-19", "lastname": "1709487786289-19", "password": "1709487786289-19", "birthdate": "12.23.2021", "gender": "Male", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0MDIzYmVmNS1mMGI2LTQwOGUtOGVhYi00ZmRiOGM4MWRkZjUiLCJlbWFpbCI6IjE3MDk0ODc3ODYyODktMTlAeW9wbWFpbC5jb20iLCJpYXQiOjE3MDk0ODc4MDEsImV4cCI6MTcxMjE2NjIwMX0.kniW8h1Tmvz6zAAb6nrZKWSGxKSvMyRLr3OcRMWP8lA" },
];

const apiBackend = 'http://development.eseme.one:61981'; // modify this with your backend

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
		expect(retval).toMatchObject({ "result": "OK" })
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
		expect(retval).toMatchObject({ "result": "OK" });
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
		expect(retval).toMatchObject({ "result": "OK" });
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
		expect(retval).toMatchObject({ "result": "OK" })
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
		expect(retval).toMatchObject({ "result": "OK" })
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
		expect(error).toMatchObject({ "result": "FAIL", "error": "Invalid confirmation code." })
	}
	try {
		await serialEntrepreneurFrontendHandlers.resetPasswordStep2(testUsers[userIndex].email, 'SOME-GARBAGE-CONFIRMATION-CODE', testUsers[userIndex].password, fSuccess, fFail);
	} catch (error) {
		tickLog.error(`Correctly caught exception: ${JSON.stringify(error)}`, true);
		expect(error).toMatchObject({ "result": "FAIL", "error": "Invalid confirmation code." })
	}
});

test('updateuserdata', async () => {
	let userIndex = getUserId;
	tickLog.info(`updateuserdata: index ${userIndex} name: ${JSON.stringify(testUsers[userIndex].name)} middlename: ${JSON.stringify(testUsers[userIndex].middlename)} lastname: ${JSON.stringify(testUsers[userIndex].lastname)} birthdate: ${JSON.stringify(testUsers[userIndex].birthdate)} gender: ${JSON.stringify(testUsers[userIndex].gender)}`, true);
	const fSuccess = (props, retval) => {
		tickLog.info(`fSuccess: ${JSON.stringify(props)} ${JSON.stringify(retval)}`, true);
		expect(retval).toMatchObject({ "result": "OK" })
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
		expect(retval).toMatchObject({ "result": "OK" })
	}
	const fFail = (props, error) => {
		tickLog.error(`fFail: ${JSON.stringify(props)} ${JSON.stringify(error)}`, true);
		expect(true).toBe(false);
	}
	await serialEntrepreneurFrontendHandlers.updateUserData(testUsers[userIndex].token, "SOME NEW NAME", "SOME NEW middlename", "SOME NEW lastname", "2022-12-20", "new-gender", fSuccess, fFail);

	const fSuccess2 = (props, retval) => {
		tickLog.info(`fSuccess: ${JSON.stringify(props)} ${JSON.stringify(retval)}`, true);
		expect(retval).toMatchObject({ "result": "OK" })
	}
	const fFail2 = (props, error) => {
		tickLog.error(`fFail: ${JSON.stringify(props)} ${JSON.stringify(error)}`, true);
		expect(true).toBe(false);
	}
	await serialEntrepreneurFrontendHandlers.getUserData(testUsers[userIndex].token, fSuccess2, fFail2);
});
