import React, { Component } from 'react'

class UserInput extends Component {
  state = {
    username: '',
    hometown: ''
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleOnChange} />
          <label>Hometown</label>
          <input type="text" name="hometown" value={this.state.hometown} onChange={this.handleOnChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
