import React from 'react'
import {useSelector} from 'react-redux';

function Profile() {
    const user =useSelector( (state) => state.user.value);
    const themeColor =useSelector( (state) => state.theme.value);
    return (
        <div style ={{color:  themeColor}}>
            <h1>Profile Page</h1>
            <h3>Name:{user.name} </h3>
            <h3>Age:{user.age} </h3>
            <h3>Email:{user.email} </h3>
        </div>
    )
}

export default Profile
