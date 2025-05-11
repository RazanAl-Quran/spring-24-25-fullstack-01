import React from 'react';
import { useState } from "react";


function People(props) {

    const [username, setUsername] = useState("");
    const [height, setHeight] = useState("");
    const [favoritePet, setFavoritePet] = useState("");
    const [gender, setGender] = useState("");


    const addPersonSubmit = (e) => {
        e.preventDefault();

        let newPerson = {
            username,
            height,
            favoritePet,
            gender
        };
        // Object Property Value Shorthand


        // let newPerson = {
        //     username:username,
        //     height:height,
        //     favoritePet:favoritePet,
        //     gender:gender
        // };
        // setPeople(people.push(newPerson));
        props.addPerson(newPerson);

        // Clear form
        setUsername("");
        setHeight("");
        setFavoritePet("");
        setGender("");


    


    }

    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <hr style={{ margin: "30px 0" }} />
            <h1>🚀 React Form </h1>

            <h2>Add a person</h2>
            <form onSubmit={addPersonSubmit} >
                <input
                    type="text"
                    placeholder='Name'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    style={{ marginLeft: "10px" }}
                />

                <input
                    type="text"
                    placeholder="Favorite Pet"
                    value={favoritePet}
                    onChange={(e) => setFavoritePet(e.target.value)}
                    style={{ marginLeft: "10px" }}
                />

                <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    style={{ marginLeft: "10px" }}
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>

                <button type="submit" style={{ marginLeft: "10px" }}>
                    Add Person
                </button>
            </form>


        </div>

    );
}

export default People;
