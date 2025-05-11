import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Parent from './Parent';

function App() {

  const [digimons, setDigimons] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const user = { name: "Razan", role: "Instructor" };


  useEffect(() => {
    axios("https://digimon-api.vercel.p/api/digimon")
      .then((digomonsResponse) => {
        // console.log(digomonsResponse.data.slice(0,10));
        setDigimons(digomonsResponse.data.slice(0, 10));
        setLoading(false);
      })
      .catch((error) => {
        // console.log(error);
        setError(error);
      })
  }, []);

  // if(loading)  return <p>🔄 Loading Digimon...</p>;
  if(error)  return <p style={{ color: "red" }}>❌ {error}</p>;



  return (


    <div style={{ textAlign: "center", padding: "20px" }}>

      <Parent user={user}/>

      <h1>🐲 Digimon Characters</h1>
      <ul>
        {digimons.map((digimon, index) => {
          return (
            <li key={index}>
              <strong>{digimon.name}</strong> — {digimon.level}
              <br />
              <img src={digimon.img} alt={digimon.name} width="100" />
              <hr />
            </li>
          )
        })
        }
      </ul>

    </div>
  );
}

export default App;
