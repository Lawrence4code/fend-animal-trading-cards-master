import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import StripeComponent from './StripeComponent';

class Header extends Component {
  renderContent = () => {
    switch (this.props.auth) {
      case null:
        return 'still waiting for the network response.';
      case false:
        return (
          <li>
            <a href="/auth/google">Sign in Google </a>
          </li>
        );
      default:
        return [
          <li>
            <StripeComponent />
          </li>,
          <li>
            <a href="/api/logout"> Logout </a>
          </li>
        ];
    }
  };
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            className="brand-logo left"
            to={this.props.auth ? '/survey' : '/'}
          >
            SURSOL
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapstateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapstateToProps)(Header);
