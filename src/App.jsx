import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Register from './components/Register';
import Voting_page from './components/Voting_page';
import Admin_page from './components/Admin_page';
import Home from './components/Home';


function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [votingResults, setVotingResults] = useState({});


    const handleLogin = (username, password) => {
       const name = localStorage.getItem("username");
       const pass = localStorage.getItem("password");
       console.log(pass);
       if(username === name && password === pass){
        setLoggedIn(true);
        localStorage.removeItem('hasVoted');
        alert("Successfully logged in!");

       }else{
        setLoggedIn(false);
       }

    };

    const handleRegister = (username, password, email, phone) => {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      localStorage.setItem('email', email);
      localStorage.setItem('phone', phone);
      setLoggedIn(false);
  };
  
  const handleVote = (option) => {
    setVotingResults(prevResults => ({
        ...prevResults,
        [option]: (prevResults[option] || 0) + 1
    }));
};


    return (
        <Router>
            <div>
                <Navigation loggedIn={loggedIn} />
               <Routes>
                    {!loggedIn && <Route path="/login" element = {<Login handleLogin={handleLogin} />}></Route>}
                    {!loggedIn && <Route path="/register" element= {<Register handleRegister={handleRegister} />}></Route>}
                    <Route path="/home" index element={<Home/>} />
                    <Route path="/voting_page" element={<Voting_page handleVote={handleVote}/>}></Route>
                    {loggedIn && <Route path="/admin_page" element={<Admin_page votingResults={votingResults} />}></Route>}
                </Routes>
            </div>
        </Router>
        
    );
}



export default App;

