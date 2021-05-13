import React from 'react';
import Login from './components/Login';
import './App.css'
import Logout from './components/Logout';
import { useSelector } from 'react-redux';
import { selectUser } from './feature/UseSlice';
const App = () => {
  const user = useSelector(selectUser)
  return (
    <div>
      { user ? <Logout/> :  <Login/>}
     
    </div>
  );
};

export default App;