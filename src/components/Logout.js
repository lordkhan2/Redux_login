import React from 'react';
import './Logout.css';
import { logout } from './features/userSlice';
import { useDispatch } from 'react-redux';

const Logout = () => {

    const dispatch = useDispatch();

    const handleLogout = (e) =>{
        e.preventDefault();
        dispatch(logout());

    }

    return (
        <div className="logout">
            <h1>Welcome <span className="user__name"> Farhan</span></h1>
            <button className="logout__button" onClick={(e) => handleLogout(e)}>Logout</button>
            
        </div>
    )
}

export default Logout
