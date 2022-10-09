import "./App.css";
import { useEffect, useState } from "react";
import axios from 'axios';
function App() {
  const [name, setName] = useState("");
  const displayName = () => {
    axios.get("Link to REST API").then((response) => {
      setName(response.data.name)
    });
  }
  useEffect(()=> {
    displayName()
  },[]);
  return (
    <div className="App">
    <h2>Press button to get results!</h2>
    <button > Display Name</button>
    </div>
  );
}

export default App;
