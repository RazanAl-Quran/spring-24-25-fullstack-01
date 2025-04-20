import React from 'react';
import { useState } from "react";


function People() {

    const [username, setUsername] = useState("");
    const [height, setHeight] = useState("");
    const [favoritePet, setFavoritePet] = useState("");
    const [gender, setGender] = useState("");

    const [people, setPeople] = useState([]);

    const addPersonSubmit = (e) => {
        e.preventDefault();

        let newPerson = {
            username,
            height,
            favoritePet,
            gender
        };

        // setPeople(people.push(newPerson));
        setPeople([...people, newPerson]);

        // Clear form
        setUsername("");
        setHeight("");
        setFavoritePet("");
        setGender("");


        // console.log(people.length);


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

            <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
                {people.map((person, index) => {
                    const emoji = person.gender === "Male" ? "👨" : "👩";
                    return (
                        <li key={index}>
                            {emoji} <strong>{person.username}</strong> — Height: {person.height}, Favorite Pet: {person.favoritePet}
                        </li>
                    );
                })}
            </ul>


        </div>

    );
}

export default People;
