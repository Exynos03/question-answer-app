import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import { Route,Routes } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { auth } from './config/firebase';
import Quiz from './components/Quiz';

function App() {
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
        setCurrentUser(user);
    })
})

  
  return (
    <div className="App">
    <h1>Demo Auth App</h1>
    <Routes>
      <Route path='/' element={<Header />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes>

    {currentUser 
    ? <Quiz />
    : null}
    </div>
  );
}



export default App;
