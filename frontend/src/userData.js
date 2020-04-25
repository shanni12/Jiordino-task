import React from 'react';
import Address from './address.js';
function User({userItem}){
    console.log(userItem)
  return <div className="user">
        <p>
            <strong>Name:</strong>{userItem.name}
        </p>
        <p>
            <strong>Username:</strong>{userItem.username}
        </p>
        <p>
            <strong>Email:</strong>{userItem.email}
        </p>
        <p>
            <strong>Address:</strong>
            <Address address={userItem.address} />
        </p>
        <p>
            <strong>Website:</strong>{userItem.website}
        </p>
  </div>

}
export default User;