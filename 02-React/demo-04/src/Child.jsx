import React from 'react';

const Child = ({user}) => {
    return (
        <div style={{ border: "1px solid lightgray", padding: "10px" }}>
            <h3>👶 Child Component</h3>
            <p>{user.name} and your role is {user.role} </p>
        </div>

    );
}

export default Child;
