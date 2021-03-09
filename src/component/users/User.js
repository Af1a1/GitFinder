import React, { useContext } from 'react';
import UserItems from './UserItems';
import Spinner from '../layout/Spinner';
import Githubcontext from '../../context/github/githubContext';

const User = () => {
  const gitHubContext = useContext(Githubcontext);

  const { loading, users } = gitHubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (  
      <div style={userStyle}>
        {users.map((user) => (
          <UserItems key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default User;
