import React from 'react';

const User = props => {
    return (
        <div className='user-container'>
            <p><strong>{props.user.title}</strong></p>
            <p>{props.user.body}</p>
        </div>
    );
}

export default User;