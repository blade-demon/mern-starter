import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Header />
				<Router>
					<div>
						<Route exact path='/' component={Landing} />
						<Route exact path='/dashboard' component={Dashboard} />
					</div>
				</Router>
			</header>
		</div>
	);
}

export default App;
