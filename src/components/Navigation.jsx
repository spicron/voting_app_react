import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ loggedIn }) => {
    return (
        <>
        <nav>
            <div className="left">
              <h4>Voting App</h4>
            </div>
            <div className="right">
            <ul>
                <li><Link to="/home">Home</Link></li>
                {loggedIn ? (
                    <>
                        <li><Link to="/voting_page">Voting</Link></li>
                        <li><Link to="/admin_page">Admin</Link></li>
                    </>
                ) : (
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </>
                )}
            </ul>
            </div>
           
        </nav>
        
       </>
    );
};

export default Navigation;

