import React, { Component } from 'react'
import UserItems from './UserItems'

export class User extends Component {
    
    state = {
        users: [
            {
                id: '1',
                login: 'mojombo',
                avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
                html_url: 'https://github.com/mojombo',
            },
            {
                id: '2',
                login: 'mojombo',
                avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
                html_url: 'https://github.com/mojombo',
            },
            {
                id: '3',
                login: 'mojombo',
                avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
                html_url: 'https://github.com/mojombo',
            }
        ]
    }
    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map(user => 
                
                    <UserItems key={user.id} user={user}/>

                )}        
            </div>
        )

        

    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default User
