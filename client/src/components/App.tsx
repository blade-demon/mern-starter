import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";

const Surveys = () => <h1>Surveys</h1>;

type AppProps = {
	fetchUser: () => void;
};

const App = ({ fetchUser }: AppProps) => {
	useEffect(() => {
		fetchUser();
	}, [fetchUser]);

	return (
		<div className='App'>
			<header className='App-header'>
				<Router>
					<div>
						<Header />
						<Route exact path='/' component={Landing} />
						<Route exact path='/surveys' component={Dashboard} />
						<Route exact path='/surveys/new' component={Surveys} />
					</div>
				</Router>
			</header>
		</div>
	);
};

export default connect(
	null,
	actions
)(App);
