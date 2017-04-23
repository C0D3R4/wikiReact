import React, { Component } from 'react';
import {RouterHandler} from 'react-router';
import Login from './Login';
import PageList from './PageList';


export default class App extends Component {
    state = { user: USER }

    render () {
        return (
          <div>
            <div className='row'>
                <div className='three columns'>
                    <h1>Wikireck</h1>
                    <Login user = {this.state.user}/>

                    <PageList user={this.state.user}/>
                </div>
                <div className='nine columns'>
                    <RouteHandler user={this.state.user} />
                </div>
            </div>
          </div>
        )
    }
}
