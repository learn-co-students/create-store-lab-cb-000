import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserInput extends Component {
  state = {
    username: '',
    hometown: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.username !== '') {
      this.props.store.dispatch({ type: 'ADD_USER', user: this.state});
      this.setState({username: '', hometown: ''});
    }
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label for="username">Username: </label>
          <input type="text" name="username" onChange={this.handleChange} value={this.state.username} />
          <br/>
          <label for="hometown">Hometown: </label>
          <input type="text" name="hometown" onChange={this.handleChange} value={this.state.hometown} />
          <br/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
