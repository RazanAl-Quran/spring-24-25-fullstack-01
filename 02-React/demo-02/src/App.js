import { useState } from "react";
import Greetings from "./Greetings";
import People from "./People";

function App() {

  let [count,setCount] = useState(0);

  const handleClick = ()=>{
    setCount(count+1);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚀 React Basics Demo</h1>
      <p>you clicked button {count} times</p>
      <button onClick={handleClick}>Click Me</button>

      <Greetings username="Sherry" />
      <People/>
    </div>
  );

}

export default App;
