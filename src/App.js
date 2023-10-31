import Signup from '../src/components/Signup.js';
import Login from './components/Login.js';
import {BrowserRouter as R, Route, Routes } from 'react-router-dom';
import Home from './components/Home.js';
import { useEffect, useState } from 'react';
import { auth } from './firebase.js';
// import { useState } from 'react';
import GiphyDisplay from './components/GiphyDisplay.js'
function App()
{
    const [username, setUserName] = useState("");
    useEffect(()=>{
      auth.onAuthStateChanged((user)=>{
        if(user)
        {
          setUserName(user.displayName);
        }
        else{
          setUserName("");
        }
        console.log(user);
      });
    },[])
  return(
    <R>
      <Routes>
        <Route path="/sign" element={<Signup />}></Route>
        <Route path="/log" element={<Login />}></Route>
        <Route path="/home" element={<Home />}>
        </Route>
        <Route path="/" element={<Signup />}></Route>
      </Routes>
    </R>
  );
}
const Home1 = () =>{
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  return(
    <div className='App'>
      <h1>Giphy Search</h1>
        <Home onSearch={handleSearch} />
        <GiphyDisplay searchTerm={searchTerm} />
    </div>
  );
}
export default App;
