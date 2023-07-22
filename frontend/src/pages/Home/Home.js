import React from 'react'
import '../../styling/Home.scss'
import Navbar from '../../components/Navbar'

const Home = () => {
    return(
        <div className="outer-container">
            <div className="navs">
                <a href="/register">to Register</a>
                <a href="/login">to Login</a>

            </div>
            <div>Home</div>
        </div>
    )
}

export default Home;
