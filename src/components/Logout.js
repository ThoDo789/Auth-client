import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../feature/UseSlice';
import './login.css';
const Logout = () => {
    const user = useSelector(selectUser)
    const dispatch= useDispatch();
    const handleLogout=(e)=>{
            e.preventDefault();
            dispatch(logout({

            }))
    }
    return (
        <div className="login">
            <span className="user__name">hello welcome {user.name}</span>
            <button className="logout__button" onClick={(e)=>handleLogout(e)}>logout</button>
        </div>
    );
};

export default Logout;