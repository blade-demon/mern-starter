import React, { Component } from "react";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { handleToken } from "../actions";
class Payments extends Component {
	render() {
		debugger;
		return (
			<StripeCheckout
				amount={5000}
				token={token => this.props.handleToken(token)}
				stripeKey={process.env.REACT_APP_STRIPE_KEY}>
				<button className='btn'>Add Credits</button>
			</StripeCheckout>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	handleToken: dispatch(handleToken)
});

export default connect(
	null,
	mapDispatchToProps
)(Payments);
