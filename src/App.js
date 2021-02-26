import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import User from './component/users/User';
import SingleUser from './component/users/SingleUser';
import Search from './component/users/Search';
import Alert from './component/layout/Alert';
import About from './component/pages/About';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    user: {},
    repos:[],
    loading: false,
    alert: null,
  };

  searchUsers = async (text) => {
 
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
  };

  getUser = async (username) => {

    this.setState({ loading: true });

    const res = await axios.get(`
    https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}
    `);
    
    this.setState({ user: res.data, loading: false });
  };

  getUserRepos = async (username) => {

    this.setState({ loading: true });

    const res = await axios.get(`
    https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}
    `);
    
    this.setState({ repos: res.data, loading: false });
  };

  clearUsers = () => this.setState({ users: [], loading: false });

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    const { users, user, loading, repos } = this.state;
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <Alert alert={this.state.alert} />
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => (
                <Fragment>
                  <Search
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                  <User loading={loading} users={users} />
                </Fragment>
              )}
            />
            <Route exact path='/about' component={About} />
            <Route
              exact
              path='/user/:login'
              render={(props) => (
                <SingleUser
                  {...props}
                  getUser={this.getUser}
                  getUserRepos={this.getUserRepos}
                  repos={repos}
                  user={user}
                  loading={loading}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
