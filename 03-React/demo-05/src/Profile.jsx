import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {

    const {username} = useParams();
    
    return (
        <div>
            <h1>Hello {username} welocme to your Profile</h1>
        </div>
    );
}

export default Profile;
