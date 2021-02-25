import React, { Component } from 'react';
import Navbar from './component/layout/Navbar';
import User from './component/users/User';
import Search from './component/users/Search';
import Alert from './component/layout/Alert';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  };

  // async componentDidMount() {

  //   //console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);

  //   this.setState({ loading: true });

  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   this.setState({ users: res.data, loading: false });
  // }

  searchUsers = async (text) => {
    //console.log(text);

    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
    console.log(res.items);
  };

  clearUsers = () => this.setState({ users: [], loading: false });

  setAlert = (msg, type) =>{
    this.setState({alert: {msg, type }});
    setTimeout(() => this.setState({alert:null}), 5000);
  };

  render() {
    const { users, loading } = this.state;
    return (
      <div className='App'>
        <Navbar />
        <Alert alert={this.state.alert} />
        <Search
          searchUsers={this.searchUsers}
          clearUsers={this.clearUsers}
          showClear={users.length > 0 ? true : false}
          setAlert={this.setAlert}
        />
        <User loading={loading} users={users} />
      </div>
    );
  }
}

export default App;
