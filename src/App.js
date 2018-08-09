import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInput from './components/UserInput';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput store={this.props.store} addUser={this.props.addUser}/>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addUser: user => dispatch({type: 'ADD_USER', user})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
