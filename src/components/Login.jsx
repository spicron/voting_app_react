import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({ handleLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(username, password);
    };

    return (
        <div className='container'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <ul>
                <li> <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /></li>
                 <li> <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /></li>
                </ul>
                <div className="butt">
                <button type="submit">Login</button>
                <button type="submit">
                <Link to="/register">Register</Link>
                </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
