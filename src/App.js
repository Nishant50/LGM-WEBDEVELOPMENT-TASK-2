/*import logo from './logo.svg';
import './App.css';
import React from 'react';
function App() {
  return (
    
   <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
import React, { useState } from "react";
import "./App.css";
import logo from "./LGM.png"
const App=()=>{
  const [user,Setuser]=useState([]);
  const getusers=async()=>{
    const response=await fetch("https://reqres.in/api/users?page=1");
    const jsonresponse=await response.json();
    Setuser(jsonresponse.data);
  };
  

  return (
   <>
    <div className="navigation">
    <img src={logo}  style={{width: 200}} alt="lgm"></img>
    <h1>Click on the Button to get Users !</h1>
      <button onClick={getusers}>GET USERS</button>
    </div>
    <div className="flex">
    {user.map(({id, email, first_name, last_name, avatar})=>{
      return(
       <div className="card">
        <div className="info">
          <img src={avatar}></img>
          <p className="name">{first_name}{last_name}</p>
          <p>Email-id:{email}</p>
        </div>
       </div>
      )
    }

    )}
    </div>
   </>
  )
}
export default App;
