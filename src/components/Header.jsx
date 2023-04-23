import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect,useState } from 'react'
import { auth  } from '../config/firebase'
import { signOut } from "firebase/auth";


const Header = () => {
    const [currentUser, setCurrentUser] = useState([]);
    
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
        })
    })
    
    const handleLogOut = () => {
      try{
        signOut(auth);
        setCurrentUser(null);
      }catch(error){
        console.log(error);
      }
    }

    const handleDelete = () => {
      try{
        currentUser.delete();
        setCurrentUser(null);
      }catch(error){
        console.log(error);
      }
    }


  return (
    <header>
        {currentUser ? 
          <div>
            <h3>{currentUser.email}</h3> 
            <button onClick={handleLogOut}>Log Out</button>
            <button onClick={handleDelete}>Delete User</button>
          </div>
          : 
          <div>
            <Link to="/register"><button>Register</button></Link>
            <Link to="/login"><button>Log In</button></Link>
          </div>
        }
        
      </header>
  )
}

export default Header
