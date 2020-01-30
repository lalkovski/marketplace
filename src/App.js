import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/home-page/homepage.component';
import ShopPage from './pages/shop-page/shoppage.component';
import SignInPage from './pages/sign-in-page/sign-in-page.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
// import { setCurrentUser as setCurrentUserAction } from './redux/user/user.actions';
import { setCurrentUser } from './redux/user/user.actions';



class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubscribleFromAuth = auth.onAuthStateChanged(
			async (userAuth) => {
				if (userAuth) {
					const userRef = await createUserProfileDocument(userAuth);

					userRef.onSnapshot((snapShot) => {
						setCurrentUser({
							id: snapShot.id,
							...snapShot.data()
						});
					});
				} else {
					setCurrentUser(userAuth);
				}
			}
		);
	}



	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route
						exact
						path="/signin"
						render={() =>
							this.props.currentUser ? (
								<Redirect to="/" />
							) : (
								<SignInPage />
							)}
					/> 
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = ({ user }) => ({
	currentUser: user.currentUser
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user))
	// setCurrentUser: setCurrentUserAction
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
