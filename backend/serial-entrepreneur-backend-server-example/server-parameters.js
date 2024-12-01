// MODIFY this file to change the server parameters
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
		keyPath: process.env.TLS_KEYPATH,
		certPath: process.env.TLS_CERTPATH,
	},
	port: process.env.SEB_PORT || 3000
}