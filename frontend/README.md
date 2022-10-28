## SETUP - FRONTEND

This is the frontend library of the `serial-entrepreneur` structure. For full setup please refer to https://github.com/MehmetKaplan/serial-entrepreneur where this frontend structure is an integrated part with the database and backend structures.

Following steps should lead you to prepare a proper frontend setup for the `serial-entrepreneur`. This frontend components are designed to be pre-integrated with the backend functions out of the box, provided the setup steps are followed.

On the other hand, the components are not styled and only the styling is left to you, because obviously every project will have their own look and feel.


1. Initiate a new project

	Throuhout this document we'll use `serial-entrepreneur-example` as our project name. Feel free to use your own project name.

	```bash
	expo init serial-entrepreneur-example
	cd serial-entrepreneur-example
	```

2. Implement the [Register User] flow

	The [Register User] flow needs to have 2 steps. 
	
	1. Collect credentials and the minimum personal information from users.  
   
		The `serial-entrepreneur` gives you only these essential 3 information out of the box. In order to add additional information you'll need to enrich the `Users` table in the database and add an initial page to collect those data. As a general principle, the less information you collect, the higher chance to comply with privacy expectetions of the users.
   		- name
         - email
         - password

		Once we collect them, we'll need `serial-entrepreneur-backend` to send a confirmation mail to the mail address, with a confirmation code.

		Add and use following components in your [MODIFYME] page.
		```javascript
		// MODIFYME
		```
		Usage example:
		```javascript
		// MODIFYME
		```

	2. Confirm the email.
 
	   Assuming the `serial-entrepreneur-backend` sent a confirmation mail to the mail address, next we need to verify the confirmation code which implies the mail is really owned by the user. If the user provides the correct confirmation code, the `serial-entrepreneur-backend` should save the user information to the database.

		Add and use following components in your [MODIFYME] page.
		```javascript
		// MODIFYME
		```
		Usage example:
		```javascript
		// MODIFYME
		```

3. Implement the [Login] flow

	When a user succesfully registers, she/he should be able to login. For this we need to collect the email and password from the user and test if the credentials are correct. And if they are correct, we'll need to store the `JWT` so that next time login is seemless for the user.

	Add and use following components in your [MODIFYME] page.
	```javascript
	// MODIFYME
	```
	Usage example:
	```javascript
	// MODIFYME
	```

3. Implement the [Seamless Login] flow

	If the user logged in successfully and chose the "remember me" option, next time when she/he is logging in there should not be a need to collect credentials once again. And this is accomplished by saving the token when the user first logged in and refreshing it in eack authentication event.

	In order to achieve this we'll need to add the following code in our root page, ie. the `App.js` within the `expo` project.

	Add and use following components in your [MODIFYME] page.
	```javascript
	// MODIFYME
	```
	Usage example:
	```javascript
	// MODIFYME
	```

4. Implement the [Password Reset] flow

	One of the common functions to implement is the password reset, when a user completely forgets a password. Ownership of the registration email implies the ownership of the account, hence we want to provide a method for users to reset their passwords.

	This can be accomplished by 2 steps, similar to the registration flow.

	1. Get the password reset request.

		Collect the `email` for this purpose and generate a confirmation code at the backend for this request.

		Add and use following components in your [MODIFYME] page.
		```javascript
		// MODIFYME
		```
		Usage example:
		```javascript
		// MODIFYME
		```

	2. Check the confirmation code in order to verify the email ownership.

		Add and use following components in your [MODIFYME] page.
		```javascript
		// MODIFYME
		```
		Usage example:
		```javascript
		// MODIFYME
		```

5. Implement the [Change Password] flow

	We need to provide a method for the users to be able to change their users. For this purpose, we'll need to get the old password which justifies the users ownership of the account.

	Add and use following components in your [MODIFYME] page.
	```javascript
	// MODIFYME
	```
	Usage example:
	```javascript
	// MODIFYME
	```

6. Implement the [User Data Update] flow

	As stated previously the `serial-entrepreneur` collects as minimum data as possible from users. By default these data are `email` and `name` (a free text to keep whole name). In order to enrich the collected data the backend table should be added new columns. And those data should be updated seperately. But for the sake of the out of the box functionality `serial-entrepreneur` gives the update of the name field.
	Add and use following components in your [MODIFYME] page.
	```javascript
	// MODIFYME
	```
	Usage example:
	```javascript
	// MODIFYME
	```

7. Implement the [Remove User] flow

	For some of the data privacy rules, in order to comply we need to provide a method for users to completely remove their data. For this purpose we collenct the requst from users and handle it as follwos.

	Add and use following components in your [MODIFYME] page.
	```javascript
	// MODIFYME
	```
	Usage example:
	```javascript
	// MODIFYME
	```

### Integration with Popular Authentication Providers

On top of our mail based authentication, `expo` has wonderful integrations with common authentication providers. We strongly encourage you tocheck and use them from follwoing link: https://docs.expo.dev/guides/authentication/#guides
