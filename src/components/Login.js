import React from 'react';
import PropTypes from 'prop-types';

const Login = props => (
  <nav className="login">
    <h2>Login</h2>
    <button className="google" onClick={() => props.authenticate('Google')}>
      Google
    </button>
  </nav>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
};

export default Login;
