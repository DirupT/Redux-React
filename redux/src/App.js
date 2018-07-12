import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { getUsers } from './actions';

class App extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    users: state
  }
}

export default connect(mapStateToProps, { getUsers })(App);
