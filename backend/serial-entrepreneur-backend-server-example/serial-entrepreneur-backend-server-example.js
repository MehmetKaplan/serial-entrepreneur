const express = require('express');
const app = express();
const https = require('https');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const tickLog = require('tick-log');
const serialEntrepreneurBackendHandlers = require('../serial-entrepreneur-backend-handlers'); //MODIFYME

const serverParameters = require('./server-parameters.js');

const getParams = (body, query) => {
	if ((body) && (Object.keys(body).length > 0)) return body;
	return query;
}

const callHandler = async (req, res, handler, paramsArr) => {
	const params = getParams(req.body, req.query);
	try {
		let paramsToSend = [];
		for (let i = 0; i < paramsArr.length; i++) {
			paramsToSend.push(params[paramsArr[i]]);
		}
		await serialEntrepreneurBackendHandlers[handler](...paramsToSend);
		res.status(200).send('OK');
	} catch (error) {
		res.status(500).send(error);
	}
}

const startServer = async () => {
	await serialEntrepreneurBackendHandlers.init(
		{
			jwtKeys: serverParameters.jwtKeys,
			bcryptKeys: serverParameters.bcryptKeys,
			emailKeys: serverParameters.emailKeys,
			pgKeys: serverParameters.pgKeys,
		}
	);

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(morgan('combined'));
	app.use(cors());
	app.options('*', cors());

	app.get('/testhandler', async (req, res) => { callHandler(req, res, 'testHandler', ['name', 'email', 'password']); });
	app.post('/registeruserstep1', async (req, res) => { callHandler(req, res, 'registerUserStep1', ['name', 'email', 'password']) });
	app.post('/registeruserstep2', async (req, res) => { callHandler(req, res, 'registerUserStep2', ['email', 'confirmationCode']) });
	app.post('/removeuser', async (req, res) => { callHandler(req, res, 'removeUser', ['email']) });
	app.get('/loginuserviamail', async (req, res) => { callHandler(req, res, 'loginUserViaMail', ['email', 'password']) });
	app.get('/loginuserviatoken', async (req, res) => { callHandler(req, res, 'loginUserViaToken', ['token']) });
	app.post('/changepassword', async (req, res) => { callHandler(req, res, 'changePassword', ['email', 'oldPassword', 'newPassword']) });
	app.post('/resetpasswordstep1', async (req, res) => { callHandler(req, res, 'resetPasswordStep1', ['email']) });
	app.post('/resetpasswordstep2', async (req, res) => { callHandler(req, res, 'resetPasswordStep2', ['email', 'confirmationCode', 'newPassword']) });
	app.post('/updateuserdata', async (req, res) => { callHandler(req, res, 'updateUserData', ['token', 'name']) });

	if ((serverParameters.httpsKeys.keyPath) && (serverParameters.httpsKeys.certPath)) {
		// if there are keys and certificates, use them
		https.createServer({
			key: fs.readFileSync(serverParameters.httpsKeys.keyPath),
			cert: fs.readFileSync(serverParameters.httpsKeys.certPath)
		}, app).listen(serverParameters.port, () => {
			tickLog.success(`HTTPS server listening on port ${serverParameters.port}.`);
		});
	}
	else {
		// In localhost go only for HTTP not HTTPS
		app.listen(serverParameters.port, () => {
			tickLog.success(`HTTP server listening on port ${serverParameters.port}.`);
		});
	}
}

startServer();
