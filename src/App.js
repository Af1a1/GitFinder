import React, { Component } from 'react';
import Navbar from './component/layout/Navbar';
import User from './component/users/User';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get('https://api.github.com/users');

    this.setState({ users: res.data, loading: false });
  }
  render() {
    return (
      <div className='App'>
        <Navbar />
        <User loading={this.state.loading} users={this.state.users}/>
      </div>
    );
  }
}

export default App;
