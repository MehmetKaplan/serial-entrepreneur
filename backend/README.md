## SETUP - BACKEND

This is the backend part of the serial-entrepreneur library. For full setup please refer to https://github.com/MehmetKaplan/serial-entrepreneur.

Following steps should lead you to prepare a proper backend setup for the `serial-entrepreneur`. After this setup the backend functions can be used with `serial-entrepreneur-frontend` functions.

A working example with below steps are here: https://github.com/mehmetkaplan/serial-entrepreneur/backend/serial-entrepreneur-backend-server-example

1. Add the request handlers as a dependency of your project.

```bash
yarn add serial-entrepreneur-backend
```

2. Add the library to your backend express server.

```javascript
const serialEntrepreneurBackendHandlers = require('serial-entrepreneur-backend-handlers');

```

3. Initilize parameters (modify below object according to your environment)

Name below example configuration as `server-parameters.js` and place it in the root directory of your express server. This file is to be `require`d by your express server. **You should modify the credentials, secrets, etc, according to your environment.**

```javascript
module.exports = {
	jwtKeys: {
		secret: 'REPLACE-THIS-SECRET',
		jwt_expiresIn: '31 days',
	},
	bcryptKeys: {
		saltRounds: 10,
	},
	emailKeys: {
		use: 'gmail',
		credentials: {
			user: process.env.TAMED_MAILER_GMAIL_USER,
			app_password: process.env.TAMED_MAILER_GMAIL_APP_PASSWORD,
		},
	},
	pgKeys: {
		user: 'serialentrepreneurapp',
		password: 'serialentrepreneurapp.', // coming from database-setup/step00001.sql
		database: 'serialentdb',
		host: 'localhost',
		port: 5432,
	},
	httpsKeys: {
		keyPath: undefined, // modify this if https is to be used
		certPath: undefined, // modify this if https is to be used
	},
	port: process.env.PORT || 3000
}
```

4. Prepare your express server code. (Below can be used as an example.)

Name below example server as `serial-entrepreneur-backend-server.js`:

```javascript
const express = require('express');
const app = express();
const https = require('https');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const tickLog = require('tick-log');
const serialEntrepreneurBackend = require('serial-entrepreneur-backend');

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
		await serialEntrepreneurBackend[handler](...paramsToSend); // never use the return value, they are to be used for testing only
		res.json({
			result: 'OK'
		});
	} catch (error) {
		res.json({
			result: 'FAIL',
			error: error
		});
	}
}

const startServer = async () => {
	await serialEntrepreneurBackend.init(
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

	// curl http://localhost:3000/testhandler?email=email@email.com\&password=password123\&name=name123
	app.get('/testhandler', async (req, res) => { callHandler(req, res, 'testHandler', ['name', 'email', 'password']); });
	app.post('/registeruserstep1', async (req, res) => { callHandler(req, res, 'registerUserStep1', ['name', 'email', 'password']) });
	app.post('/registeruserstep2', async (req, res) => { callHandler(req, res, 'registerUserStep2', ['email', 'confirmationCode']) });
	app.post('/removeuser', async (req, res) => { callHandler(req, res, 'removeUser', ['email', 'token']) });
	app.post('/loginuserviamail', async (req, res) => { callHandler(req, res, 'loginUserViaMail', ['email', 'password']) });
	app.post('/loginuserviatoken', async (req, res) => { callHandler(req, res, 'loginUserViaToken', ['token']) });
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
```

1. Finally start your server.

```bash
node serial-entrepreneur-backend-server.js
```
