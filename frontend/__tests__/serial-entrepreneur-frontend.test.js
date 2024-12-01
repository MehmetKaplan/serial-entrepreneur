
// CHECK-BEFORE-BUILD 
// Obtain following users from backend jest tests
let getUserId = 0;
const testUsers = [
	{"name":"1733050055151-0","email":"1733050055151-0@yopmail.com","middlename":"1733050055151-0","lastname":"1733050055151-0","password":"1733050055151-0","birthdate":"12.23.2022","gender":"Female","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2I5N2M3Zi02NjcyLTQ3OGYtYTdkYy02MDA0YjQyMTcwZDciLCJlbWFpbCI6IjE3MzMwNTAwNTUxNTEtMEB5b3BtYWlsLmNvbSIsImlhdCI6MTczMzA1MDA1NiwiZXhwIjoxNzM1NzI4NDU2fQ.BTwFj-wRh3F9InPFgUN1fy1EWLo86-ZfJU5ihKYahIc"},
	{"name":"1733050055151-1","email":"1733050055151-1@yopmail.com","middlename":"1733050055151-1","lastname":"1733050055151-1","password":"1733050055151-1","birthdate":"12.23.2021","gender":"Male","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzN2ZkNGJhYS1jNWIwLTRmNGMtODUzOC02ZWMxNTIwMjI1ODEiLCJlbWFpbCI6IjE3MzMwNTAwNTUxNTEtMUB5b3BtYWlsLmNvbSIsImlhdCI6MTczMzA1MDA1OCwiZXhwIjoxNzM1NzI4NDU4fQ.nN_0JwRjUxhqZKfaDK3RDNcPAF5YsaEr7FgBY1cZOiE"},
	{"name":"1733050055151-2","email":"1733050055151-2@yopmail.com","middlename":"1733050055151-2","lastname":"1733050055151-2","password":"1733050055151-2","birthdate":"12.23.2022","gender":"Female","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5OTBjN2Y4Ni0xYzk0LTQ5MjUtOWFiNC1jOGJkZDFlN2JiOWQiLCJlbWFpbCI6IjE3MzMwNTAwNTUxNTEtMkB5b3BtYWlsLmNvbSIsImlhdCI6MTczMzA1MDA2MCwiZXhwIjoxNzM1NzI4NDYwfQ.8LMQeMxi-TyUUuqwsiiyt18J4BkYNRmJShp1spfBlOY"},
	{"name":"1733050055151-3","email":"1733050055151-3@yopmail.com","middlename":"1733050055151-3","lastname":"1733050055151-3","password":"1733050055151-3","birthdate":"12.23.2021","gender":"Male","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5OWM3ZjdjNC0xZjUzLTQ2MTQtYjNmZi1hNmYwYmY0MjNkYmMiLCJlbWFpbCI6IjE3MzMwNTAwNTUxNTEtM0B5b3BtYWlsLmNvbSIsImlhdCI6MTczMzA1MDA2MiwiZXhwIjoxNzM1NzI4NDYyfQ.QHVQkG_Sw92-_SiGg81qjefAUptogvOHvUTm9fVtEzQ"},
	{"name":"1733050055151-4","email":"1733050055151-4@yopmail.com","middlename":"1733050055151-4","lastname":"1733050055151-4","password":"1733050055151-4","birthdate":"12.23.2022","gender":"Female","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTYyMzI3NS1iNjBkLTRmMmEtYTMzYS1iMDNkNzYwZjdkM2MiLCJlbWFpbCI6IjE3MzMwNTAwNTUxNTEtNEB5b3BtYWlsLmNvbSIsImlhdCI6MTczMzA1MDA2NCwiZXhwIjoxNzM1NzI4NDY0fQ.u1uLChKyh5Jt1DjaECBI9d1TofYUYKrL9qtzeE7ZWA4"},
	{"name":"1733050055151-5","email":"1733050055151-5@yopmail.com","middlename":"1733050055151-5","lastname":"1733050055151-5","password":"1733050055151-5","birthdate":"12.23.2021","gender":"Male","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJlYjkzYmQ0OC0xNDA1LTQxZDUtODIyMS03NDViNjM2NzNkNDciLCJlbWFpbCI6IjE3MzMwNTAwNTUxNTEtNUB5b3BtYWlsLmNvbSIsImlhdCI6MTczMzA1MDA2NiwiZXhwIjoxNzM1NzI4NDY2fQ.RszwipXaIFPfeXpcxsLaMOTF19UQcX31RX8IbFuejOI"},
	{"name":"1733050055151-6","email":"1733050055151-6@yopmail.com","middlename":"1733050055151-6","lastname":"1733050055151-6","password":"1733050055151-6","birthdate":"12.23.2022","gender":"Female","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyNTNjMmJjNi00MzY0LTRkM2UtYmI5OS03MGZmZjEzYzRkMzciLCJlbWFpbCI6IjE3MzMwNTAwNTUxNTEtNkB5b3BtYWlsLmNvbSIsImlhdCI6MTczMzA1MDA2NywiZXhwIjoxNzM1NzI4NDY3fQ.8zDJ4yNQ1mb1aoGE1OPvsSvGha9r4jYp6YO_6y0V2ts"},
	{"name":"1733050055151-7","email":"1733050055151-7@yopmail.com","middlename":"1733050055151-7","lastname":"1733050055151-7","password":"1733050055151-7","birthdate":"12.23.2021","gender":"Male","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjNjVkZGRhNi1kYTBhLTQ4MmYtOWQ0Mi05ZjhkMzY0YzU0YjEiLCJlbWFpbCI6IjE3MzMwNTAwNTUxNTEtN0B5b3BtYWlsLmNvbSIsImlhdCI6MTczMzA1MDA2OCwiZXhwIjoxNzM1NzI4NDY4fQ.Lxh8QkU749EPNHU-esCsJrzFt2WPsOci6ToXeaBRRw8"},
	{"name":"1733050055151-8","email":"1733050055151-8@yopmail.com","middlename":"1733050055151-8","lastname":"1733050055151-8","password":"1733050055151-8","birthdate":"12.23.2022","gender":"Female","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhNTBiNzIyMS1mMWE0LTQ3N2MtODYxNy05MmZjZDljZjUyOWEiLCJlbWFpbCI6IjE3MzMwNTAwNTUxNTEtOEB5b3BtYWlsLmNvbSIsImlhdCI6MTczMzA1MDA3MCwiZXhwIjoxNzM1NzI4NDcwfQ.kgoSr0ZiptvZQxkAae2pe48v6GBUNDM1i0lTEHxsCGI"},
	{"name":"1733050055151-9","email":"1733050055151-9@yopmail.com","middlename":"1733050055151-9","lastname":"1733050055151-9","password":"1733050055151-9","birthdate":"12.23.2021","gender":"Male","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwYWU2Y2VlMS0xZjk3LTQyYzktYTI5YS1hNzViNjczMjg1MDMiLCJlbWFpbCI6IjE3MzMwNTAwNTUxNTEtOUB5b3BtYWlsLmNvbSIsImlhdCI6MTczMzA1MDA3MiwiZXhwIjoxNzM1NzI4NDcyfQ.dlTmruvaWK9LS2TKAiYBSISuuANQgrINhMdycT4UJa4"},
	{"name":"1733050055151-10","email":"1733050055151-10@yopmail.com","middlename":"1733050055151-10","lastname":"1733050055151-10","password":"1733050055151-10","birthdate":"12.23.2022","gender":"Female","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1YWQ0Mzc2OS0xNWQ2LTRjNGMtOWI2Yi1hNjc0Y2RkNzUwNDUiLCJlbWFpbCI6IjE3MzMwNTAwNTUxNTEtMTBAeW9wbWFpbC5jb20iLCJpYXQiOjE3MzMwNTAwNzMsImV4cCI6MTczNTcyODQ3M30.hvmUixW91vGf5wNuffWiAYPdfOmCW4a-JGfM4DwY2l0"},
	{"name":"1733050055151-11","email":"1733050055151-11@yopmail.com","middlename":"1733050055151-11","lastname":"1733050055151-11","password":"1733050055151-11","birthdate":"12.23.2021","gender":"Male","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyZGExNTcxZC04YWQ4LTRhMzAtOTk3OC00ODg4Y2RhNGFkNTgiLCJlbWFpbCI6IjE3MzMwNTAwNTUxNTEtMTFAeW9wbWFpbC5jb20iLCJpYXQiOjE3MzMwNTAwNzUsImV4cCI6MTczNTcyODQ3NX0.A9KnNa_CmE5qt71QfrJtp9PpGj0hX6N73YKFUivgm3M"},
	{"name":"1733050055151-12","email":"1733050055151-12@yopmail.com","middlename":"1733050055151-12","lastname":"1733050055151-12","password":"1733050055151-12","birthdate":"12.23.2022","gender":"Female","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjZTUxMmQ4OS02NTJjLTQ4OGEtODA4MS1iYzFiMmUwOTg4MzEiLCJlbWFpbCI6IjE3MzMwNTAwNTUxNTEtMTJAeW9wbWFpbC5jb20iLCJpYXQiOjE3MzMwNTAwNzcsImV4cCI6MTczNTcyODQ3N30.Zi1f-OzeFJUW8P0Ef14-FcQShAFvAxdUjfLEHML8I-U"},
	{"name":"1733050055151-13","email":"1733050055151-13@yopmail.com","middlename":"1733050055151-13","lastname":"1733050055151-13","password":"1733050055151-13","birthdate":"12.23.2021","gender":"Male","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxNzE4YWMwNy1lNGFjLTQyZWItOTk4YS1mNGI1NzBiNGRmMDQiLCJlbWFpbCI6IjE3MzMwNTAwNTUxNTEtMTNAeW9wbWFpbC5jb20iLCJpYXQiOjE3MzMwNTAwNzgsImV4cCI6MTczNTcyODQ3OH0.Qnn8TqFxxflIx1N8Mznq0mnELMMcTC7u4M3HBdZ5GLw"},
	{"name":"1733050055151-14","email":"1733050055151-14@yopmail.com","middlename":"1733050055151-14","lastname":"1733050055151-14","password":"1733050055151-14","birthdate":"12.23.2022","gender":"Female","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkYzQxOGQyMi1hZDI2LTRhNTQtOGYyZi1kNDA4ZjI4OWQ4MjUiLCJlbWFpbCI6IjE3MzMwNTAwNTUxNTEtMTRAeW9wbWFpbC5jb20iLCJpYXQiOjE3MzMwNTAwODAsImV4cCI6MTczNTcyODQ4MH0.cFh5YqxzGejiGDedfgmb6EXcx3imOrZmml_75oNWeDM"},
	{"name":"1733050055151-15","email":"1733050055151-15@yopmail.com","middlename":"1733050055151-15","lastname":"1733050055151-15","password":"1733050055151-15","birthdate":"12.23.2021","gender":"Male","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5OTcxN2JlZi01OThlLTRiMDktOTc0NS1kNGI0YmY0YWViNjQiLCJlbWFpbCI6IjE3MzMwNTAwNTUxNTEtMTVAeW9wbWFpbC5jb20iLCJpYXQiOjE3MzMwNTAwODIsImV4cCI6MTczNTcyODQ4Mn0.KQz9lZrkjhC4p4Q5PMoAmmyZwPy5jr_hXKbC3Jb0b48"},
	{"name":"1733050055151-16","email":"1733050055151-16@yopmail.com","middlename":"1733050055151-16","lastname":"1733050055151-16","password":"1733050055151-16","birthdate":"12.23.2022","gender":"Female","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI3NGJhZjViNy02MGJjLTQxZTQtOWU4NS1mMTBjYWMzMzc5YzAiLCJlbWFpbCI6IjE3MzMwNTAwNTUxNTEtMTZAeW9wbWFpbC5jb20iLCJpYXQiOjE3MzMwNTAwODMsImV4cCI6MTczNTcyODQ4M30.yacAdcOhGIRWC7ye0_Y8jGROSxK2Bss0UMSjxqksxz4"},
	{"name":"1733050055151-17","email":"1733050055151-17@yopmail.com","middlename":"1733050055151-17","lastname":"1733050055151-17","password":"1733050055151-17","birthdate":"12.23.2021","gender":"Male","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1MzRhYTNjYS00MTQyLTQyY2MtOGFkNy1iZDI0NzJlZjlhZDAiLCJlbWFpbCI6IjE3MzMwNTAwNTUxNTEtMTdAeW9wbWFpbC5jb20iLCJpYXQiOjE3MzMwNTAwODUsImV4cCI6MTczNTcyODQ4NX0.WkNuFN5qaWKUiDaiL16t4rr92sx5suYRQuD68RUnGac"},
	{"name":"1733050055151-18","email":"1733050055151-18@yopmail.com","middlename":"1733050055151-18","lastname":"1733050055151-18","password":"1733050055151-18","birthdate":"12.23.2022","gender":"Female","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiMmI3NDRhZi0zMzM3LTRjYjUtYjhiZi0zMjE1MjVkM2RiN2MiLCJlbWFpbCI6IjE3MzMwNTAwNTUxNTEtMThAeW9wbWFpbC5jb20iLCJpYXQiOjE3MzMwNTAwODcsImV4cCI6MTczNTcyODQ4N30.5Belh9UeOydO3IF1TSlJRNQ2ZzxyWqdUkVosU1zhm2Q"},
	{"name":"1733050055151-19","email":"1733050055151-19@yopmail.com","middlename":"1733050055151-19","lastname":"1733050055151-19","password":"1733050055151-19","birthdate":"12.23.2021","gender":"Male","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJlMzBlOGNiZC1jZTdjLTQ3OWUtODdiNi0zOTNjZDVkNTExZWIiLCJlbWFpbCI6IjE3MzMwNTAwNTUxNTEtMTlAeW9wbWFpbC5jb20iLCJpYXQiOjE3MzMwNTAwODksImV4cCI6MTczNTcyODQ4OX0.nUZ6Sy2ec6VS7qM5zRAbUbID7QE2ewV3aUP1umOIRCU"},
];

const apiBackend = 'https://development.eseme.one:61981'; // modify this with your backend

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
		tickLog.error(`Correctly caught exception: ${JSON.stringify(error)}`, true);
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
