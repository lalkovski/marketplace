import React from 'react';

import './sign-in-page.styles.scss';

import SignIn from '../../components/sign-in/sign-in.component.jsx';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInPage = () => (
	<div className="sign-in-page">
		<SignIn />
		<SignUp />
	</div>
);

export default SignInPage;
