import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import kietLogo from './kietim.png';



const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState(''); // New state for role selection
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axios.post('http://localhost:5000/api/login', {
                username,
                password,
                role, // Send the selected role in the request
            });
            alert('Login successful!');
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('role', role); // Store role locally for role-based display

        } catch (err) {
            setError('Invalid username, password, or role.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <header>



                <h1>Welcome to SmartPass</h1>
            </header>
            <div className="welcome-message">
                <h1>Welcome to SmartPass</h1>
                <p>Your gateway to hassle-free leave applications.</p>
            </div>
            <div className="login-form">
            <img src={kietLogo} alt="KIET Logo" style={{ height: '80px' }} />
                <h2>SMARTPASS</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="role">Select Role</label>
                        <select
                            id="role"
                            name="role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            required
                        >
                         <option value="" disabled>Select your role</option>
                            <option value="HEAD">Head</option>
                            <option value="STUDENT">Student</option>
                            <option value="WARDEN">Warden</option>
                            <option value="GATEKEEPER">Gatekeeper</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;

