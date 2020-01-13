import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/home-page/homepage.component';
import ShopPage from './pages/shop-page/shoppage.component';
import SignInPage from './pages/sign-in-page/sign-in-page.component';
import Header from './components/header/header.component';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
				<Route path="/signin" component={SignInPage} />
			</Switch>
		</div>
	);
}

export default App;
