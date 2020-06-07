import React, { Component } from 'react'
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/navbar'
import Landing from './components/landing'
import Login from './components/login'
import Register from './components/register'
import Profile from './components/profile'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
