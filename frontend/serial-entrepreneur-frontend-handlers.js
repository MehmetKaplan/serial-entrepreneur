const fetchLean = require('fetch-lean');
const tickLog = require('tick-log');

const keys = {};

const init = (p_params) => new Promise(async (resolve, reject) => {
	try {
		keys.apiBackend = p_params.apiBackend;
		return resolve(true);
	} catch (error) /* istanbul ignore next */ {
		return reject("Unknwon error");
	}
});

// template for all calls to the backend
const serialEntrepreneurBackendCall = (method, route, props, successCallback, failCallback) => new Promise(async (resolve, reject) => {
	let l_retval;
	let l_url = `${keys.apiBackend}/${route}`;
	tickLog.start(`serialEntrepreneurBackendCall ${method} ${l_url}`);
	try {
		l_retval = await fetchLean(method, l_url, {}, props);
		//  l_retval: {"result":"FAIL","error":"Invalid confirmation code."}
		if (l_retval.result === 'OK') {
			successCallback(props, l_retval);
			return resolve(l_retval);
		};
		failCallback(props, l_retval);
		return reject(l_retval);
	} catch (error) {
		tickLog.error(`serialEntrepreneurBackendCall failed. method: ${method}, route: ${route}, props: ${JSON.stringify(props)}, error: ${JSON.stringify(error)}`);
		failCallback(props, error);
		return reject(error);
	}
});

const testHandler = async (name, email, password, successCallback, failCallback) => { await serialEntrepreneurBackendCall('GET', 'testhandler', { name, email, password }, successCallback, failCallback); }

const registerUserStep1 = async (name, email, password, successCallback, failCallback) => { await serialEntrepreneurBackendCall('POST', 'registeruserstep1', { name, email, password }, successCallback, failCallback); }

const registerUserStep2 = async (email, confirmationCode, successCallback, failCallback) => { await serialEntrepreneurBackendCall('POST', 'registeruserstep2', { email, confirmationCode }, successCallback, failCallback); }

const removeUser = async (email, token, successCallback, failCallback) => { await serialEntrepreneurBackendCall('POST', 'removeuser', { email, token }, successCallback, failCallback); }

const loginUserViaMail = async (email, password, successCallback, failCallback) => { await serialEntrepreneurBackendCall('GET', 'loginuserviamail', { email, password }, successCallback, failCallback); }

const loginUserViaToken = async (token, successCallback, failCallback) => { await serialEntrepreneurBackendCall('GET', 'loginuserviatoken', { token }, successCallback, failCallback); }

const changePassword = async (email, password, newPassword, successCallback, failCallback) => { await serialEntrepreneurBackendCall('POST', 'changepassword', { email, password, newPassword }, successCallback, failCallback); }

const resetPasswordStep1 = async (email, successCallback, failCallback) => { await serialEntrepreneurBackendCall('POST', 'resetpasswordstep1', { email }, successCallback, failCallback); }

const resetPasswordStep2 = async (email, confirmationCode, newPassword, successCallback, failCallback) => { await serialEntrepreneurBackendCall('POST', 'resetpasswordstep2', { email, confirmationCode, newPassword }, successCallback, failCallback); }

const updateUserData = async (email, name, successCallback, failCallback) => { await serialEntrepreneurBackendCall('POST', 'updateuserdata', { email, name }, successCallback, failCallback); }

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
	exportedForTesting: {
	}
}