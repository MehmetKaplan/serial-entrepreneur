const fetchLean = require('fetch-lean');
const tickLog = require('tick-log');

const keys = {};

let debugMode = false;

const init = (p_params) => new Promise(async (resolve, reject) => {
	try {
		keys.apiBackend = p_params.apiBackend;
		debugMode = p_params?.debugMode;
		return resolve(true);
	} catch (error) /* istanbul ignore next */ {
		return reject("Unknwon error");
	}
});

// template for all calls to the backend
const serialEntrepreneurBackendCall = (method, route, props, successCallback, failCallback) => new Promise(async (resolve, reject) => {
	let l_retval;
	let l_url = `${keys.apiBackend}/${route}`;
	if (debugMode) tickLog.start(`serialEntrepreneurBackendCall ${method} ${l_url}`);
	try {
		l_retval = await fetchLean(method, l_url, {}, props);
		//  l_retval: {"result":"FAIL","error":"Invalid confirmation code."}
		if (l_retval.result === 'OK') {
			successCallback(props, l_retval);
			return resolve(l_retval);
		};
		failCallback(props, l_retval);
		return reject(l_retval);
	} catch (error) /* istanbul ignore next */ {
		tickLog.error(`serialEntrepreneurBackendCall failed. method: ${method}, route: ${route}, error: ${JSON.stringify(error)}`);
		if (debugMode) tickLog.error(`props: ${JSON.stringify(props)}`);
		failCallback(props, error);
		return reject(error);
	}
});

const testHandler = async (name, email, password, successCallback, failCallback) => { await serialEntrepreneurBackendCall('GET', 'testhandler', { name, email, password }, successCallback, failCallback); }

const registerUserStep1 = async (name, middleName, lastName, email, password, birthDate, gender, successCallback, failCallback) => { await serialEntrepreneurBackendCall('POST', 'registeruserstep1', { name, middleName, lastName, email, password, birthDate, gender }, successCallback, failCallback); }

const registerUserStep2 = async (email, confirmationCode, successCallback, failCallback) => { await serialEntrepreneurBackendCall('POST', 'registeruserstep2', { email, confirmationCode }, successCallback, failCallback); }

const removeUser = async (email, token, successCallback, failCallback) => { await serialEntrepreneurBackendCall('POST', 'removeuser', { email, token }, successCallback, failCallback); }

const loginUserViaMail = async (email, password, successCallback, failCallback) => { await serialEntrepreneurBackendCall('POST', 'loginuserviamail', { email, password }, successCallback, failCallback); }

const loginUserViaToken = async (token, successCallback, failCallback) => { await serialEntrepreneurBackendCall('POST', 'loginuserviatoken', { token }, successCallback, failCallback); }

const changePassword = async (token, oldPassword, newPassword, successCallback, failCallback) => { await serialEntrepreneurBackendCall('POST', 'changepassword', { token, oldPassword, newPassword }, successCallback, failCallback); }

const resetPasswordStep1 = async (email, successCallback, failCallback) => { await serialEntrepreneurBackendCall('POST', 'resetpasswordstep1', { email }, successCallback, failCallback); }

const resetPasswordStep2 = async (email, confirmationCode, newPassword, successCallback, failCallback) => { await serialEntrepreneurBackendCall('POST', 'resetpasswordstep2', { email, confirmationCode, newPassword }, successCallback, failCallback); }

const updateUserData = async (token, name, middleName, lastName, birthDate, gender, successCallback, failCallback) => { await serialEntrepreneurBackendCall('POST', 'updateuserdata', { token, name, middleName, lastName, birthDate, gender }, successCallback, failCallback); }

const getUserData = async (token, successCallback, failCallback) => { await serialEntrepreneurBackendCall('POST', 'updateuserdata', { token }, successCallback, failCallback); }

module.exports = {
	init: init,
	testHandler: testHandler,
	registerUserStep1: registerUserStep1,
	registerUserStep2: registerUserStep2,
	removeUser: removeUser,
	loginUserViaMail: loginUserViaMail,
	loginUserViaToken: loginUserViaToken,
	changePassword: changePassword,
	resetPasswordStep1: resetPasswordStep1,
	resetPasswordStep2: resetPasswordStep2,
	updateUserData: updateUserData,
	getUserData, getUserData,
	exportedForTesting: {
	}
}