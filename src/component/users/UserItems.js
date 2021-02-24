import React from 'react';
import PropTypes from 'prop-types';

const UserItems = ({ user: {login, avatar_url, html_url} }) =>{
  

    return (
      <div className='car text-center' style={myStyle}>
        <img
          src={avatar_url}
          alt=''
          className='round-img'
          style={{ width: '60px' }}
        />
        <h3>{login}</h3>
        <div>
            <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
        </div>
      </div>
    );
  
}

const myStyle = {
  border: '1px solid',
  padding: '1rem',
  margin: '1rem'
}

UserItems.prototype = {
  user: PropTypes.object.isRequired,
}
export default UserItems;
