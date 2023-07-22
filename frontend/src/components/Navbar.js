import React from 'react'
import '../styling/Navbar.scss'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {

    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.setItem("user", "")
        navigate("/")
    }
  return (
    <div className='nav-outter-container'>
        <a href="/">Home</a>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
