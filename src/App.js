import React, { Component } from 'react';
import firebase from 'firebase';

import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { firebaseApp } from './base';

class App extends Component {
  state = {
    uid: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  authHandler = authData => {
    this.setState({ uid: authData.user.uid });
  };

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(response => {
        console.log(response);
        this.authHandler(response);
      });
  };

  logout = async () => {
    await firebase.auth().signOut();
    this.setState({ uid: null });
  };

  render() {
    return (
      <div className="App">
        {!this.state.uid && <Login authenticate={this.authenticate} />}
        {!!this.state.uid && <button onClick={this.logout}>Logout</button>}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
