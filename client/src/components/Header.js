import React, {Component} from 'react';

export default class Header extends Component {
  render () {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#/" className="left brand-logo">Emaily</a>
          <ul className="right">
            <li><a href="#" />Login With Google</li>
          </ul>
        </div>
      </nav>
    );
  }
}
