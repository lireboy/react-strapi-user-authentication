/* eslint-disable */
import { useEffect } from "react";
import {useNavigate} from "react-router-dom"
export const storeUser = (data) => {
    localStorage.setItem("user", JSON.stringify({
        username: data.user.username,
        jwt: data.jwt
    }))  
}

export const userData = () => {
    const stringifiedUser = localStorage.getItem('user');
    return JSON.parse(stringifiedUser)

}

export const Protector = ({Component}) => {
    const navigate = useNavigate()

    useEffect(() => {
        try {
            userData()
           } catch (error) {
             console.error("Something bad happened");
             console.error(error);
             navigate("/login")
           }
    })
    return <Component />
}