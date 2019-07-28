import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Payments from "./Payments";

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<li>
						<a href='/auth/github/'>Login With Github</a>
					</li>
				);
			default:
				return [
					<li key='1'>
						<Payments />
					</li>,
					<li key='3'>Credits: {this.props.auth.credits}</li>,
					<li key='2'>
						<a href='/api/logout/'>Logout</a>
					</li>
				];
		}
	}

	render() {
		return (
			<nav>
				<div className='nav-wrapper'>
					<Link
						to={this.props.auth ? "/surveys" : "/"}
						className='left brand-logo'>
						Emaily
					</Link>
					<ul className='right' style={{ padding: "0 1rem" }}>
						{/*eslint-disable-next-line */}
						<a href='#' />
						{this.renderContent()}
					</ul>
				</div>
			</nav>
		);
	}
}

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps)(Header);
