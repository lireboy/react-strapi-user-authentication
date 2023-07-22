import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const initialuser = {email: "", username: "", password: ""}

    const [user, setUser] = useState({email: "", username: "", password: ""})
    const [userToken, setUserToken] =  useState("")

    const navigate = useNavigate()

    const signUp = () => {
        axios
        .post('http://localhost:1337/api/auth/local/register', {
          username: user.username,
          email: user.email,
          password: user.password,
        })
        .then(response => {
          // Handle success.
          console.log('Well done!');
          console.log('User profile', response.data.user);
          console.log('User token', response.data.jwt);
          setUser(initialuser)
          navigate("/login")
        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error.response);
        });

    }
    const handleChange = ({target}) => {
        const {name, value} = target
        setUser((currentUser) =>({
            ...currentUser,
            [name]: value,
        }))
    }

    return (
      <div className="App">
        Test Register
        <form>
            <div className="section">
            <label htmlFor="username">username:</label>
            <input type="text" 
            name='username'
            value={user.username}
            onChange={handleChange}
            placeholder='Username'
            />
            </div>
            <div className="section">
            <label htmlFor="email">Email:</label>
            <input type="email" 
            name='email'
            value={user.email}
            onChange={handleChange}
            placeholder='Email'
            />
            </div>
            <div className="section">
            <label htmlFor="password">Password:</label>
            <input type="password" 
            name='password'
            value={user.password}
            onChange={handleChange}
            placeholder='Password'
            />
            </div>
        </form>
        <button onClick={signUp}>Sign up</button>
      </div>
    );
}
