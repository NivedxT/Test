import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/home');
        console.log(email, password);   
    }
  return (
    <form onSubmit={handleSubmit} className="login-form">
    <h1>Email Login</h1>
    <h2>Enter your Email</h2>
    <div >
    <label htmlFor="username">Username:</label>
    <input onChange={(e)=>setEmail(e.target.value)}required type="email" id="username" name="username"></input>
    </div>
    <div>
      <label htmlFor="Password">Password:</label>
      <input onChange={(e)=>setPassword(e.target.value)}required type="password" id="Password" name="password"></input>
    </div>
    <button>Login</button>
    </form>

    
  )
}
