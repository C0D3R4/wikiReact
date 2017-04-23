import React, { Component } from 'react';
import * as API from '../api'

export default class Login extends Component {
  render () {
    if (this.props.user) {
      return (
        <div className='row'>
          <p> Hi {this.props.user.name}! </p>
          <p> <button onClick={this.sigout}> Sign Out </button></p>
        </div>
      )
    } else {
      return (
        <div className='row'>
          <p><input className='u-full-width' placeholder='Username' ref='username' type='text' /></p>
          <p><input className='u-full-width' placeholder='Password' ref='password' type='password' /></p>
          <p>
            <button onClick={this.signin}> Sign In </button>
            <buttton onClick={this.signup}> Sign Up </buttton>
          </p>
        </div>
      )
    }
  }
}
