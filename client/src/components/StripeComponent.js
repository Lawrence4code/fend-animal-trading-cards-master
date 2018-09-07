import React, { Component } from 'react';
import StripeCheckOut from 'react-stripe-checkout';

console.log(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

class StripeComponent extends Component {
  render() {
    return (
      <StripeCheckOut
        amount={500}
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
      />
    );
  }
}

export default StripeComponent;
