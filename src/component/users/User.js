import React from 'react'
import UserItems from './UserItems'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'

const User = ({users, loading}) =>  {
    
    if(loading){
        return <Spinner />
    }else{
        return (
            <div style={userStyle}>
                {users.map(user => 
                
                    <UserItems key={user.id} user={user}/>

                )}        
            </div>
        );
    }    
        

}

User.PropTypes = {   
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem',
    
}

export default User
