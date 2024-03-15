import { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";

function App() {

  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get("./api/personas")
      .then((response) => {
        setList(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setList]);
    
  return (
    <h1>Axios</h1>

  );
}

export default App;
