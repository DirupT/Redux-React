import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { getUsers } from './actions';
import Users from './components/Users';

class App extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div className="App">
      
        {
          this.props.fetching ?
            <div>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            :
            <Users users={this.props.users} />
        }

      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    users: state.users,
    fetching: state.fethingUsers
  }
}

export default connect(mapStateToProps, { getUsers })(App);
