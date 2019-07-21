import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

const Home = () => <div>Home</div>;
const Surveys = () => <div>Surveys</div>;

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>React Full Stack </h1>
				<Router>
					<div>
						<Route exact path='/' component={Home} />
						<Route exact path='/surveys' component={Surveys} />
					</div>
				</Router>
			</header>
		</div>
	);
}

export default App;
