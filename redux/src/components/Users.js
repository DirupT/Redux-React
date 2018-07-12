import React from 'react';
import User from './User';

const Users = props => {
    const users = props.users.slice().reverse();
    return (
        <div>
            {users.map(user => <User key={user.id} user={user} />)}
        </div>
    );
}

export default Users;