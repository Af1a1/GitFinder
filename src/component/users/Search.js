import React, { useState, useContext } from 'react';

import Githubcontext from '../../context/github/githubContext'

import AlertContext from '../../context/alert/alertContext'


const Search = () => {

  const githubContext = useContext(Githubcontext);
  const alertContext = useContext(AlertContext);
  

  const [text, setText] = useState('');

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert(' Please enter somethine', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form m-1'>
        <input
          type='text'
          name='text'
          placeholder='Seacrh users'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block '
          onClick={githubContext.clearUsers}> 
          Clear
        </button>
      )}
    </div>
  );
};


export default Search;
