import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/home-page/homepage.component';
import ShopPage from './pages/shop-page/shoppage.component';
import SignInPage from './pages/sign-in-page/sign-in-page.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
	state = {
		currentUser: null
	};

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribleFromAuth = auth.onAuthStateChanged((user) => {
			this.setState({ currentUser: user });
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signin" component={SignInPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
