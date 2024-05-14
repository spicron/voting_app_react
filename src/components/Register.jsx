import React, { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';


const Register = ({ handleRegister }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone , setPhone] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        handleRegister(username, password, email, phone);
        alert("Registration successful!"); // Display alert after successful registration
        navigate('/login');
    };

    return (
        <div className='register_container'>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
              <ul>
                <li> <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /></li>
                <li><input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /></li>
                <li><input type="email" placeholder="Email ID" value={email} onChange={(e) => setEmail(e.target.value)} /></li>
                <li><input type="text" placeholder="Phone NO" value={phone} onChange={(e) => setPhone(e.target.value)} /></li>
              </ul>
                <div className="butt">
                <button><Link to="/login">Login</Link></button>
                <button type="submit">Register</button>
                </div>
            </form>
        </div>
    );
};

export default Register;
