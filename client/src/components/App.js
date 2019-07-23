import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';

const Surveys = () => <h1>Surveys</h1>;

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Router>
          <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route exact path="/surveys/new" component={Surveys} />
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
