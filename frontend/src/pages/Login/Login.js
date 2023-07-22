import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { storeUser } from '../../helpers';

export default function Login() {
    const initialuser = {email: "", identifier: "", password: ""}

    const [user, setUser] = useState({identifier: "", password: ""})

    const navigate = useNavigate()

    const signUp = () => {
        axios
        .post('http://localhost:1337/api/auth/local', {
            identifier: user.identifier,
            password: user.password,
        })
        .then(response => {
          // Handle success.
          console.log('Well done!');
          console.log('User profile', response.data.user);
          console.log('User username', response.data.user.username);
          console.log('User token', response.data.jwt);
          storeUser(response.data)
        //   setUser(initialuser)
          navigate("/products")
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
        Login
        <form>
            <div className="section">
            <label htmlFor="identifier">username:</label>
            <input type="text" 
            name='identifier'
            value={user.identifier}
            onChange={handleChange}
            placeholder='Username'
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
