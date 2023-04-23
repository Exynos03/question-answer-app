import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <h1>Demo Auth App</h1>
    <Routes>
      <Route path='/' element={<Header />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    </div>
  );
}



export default App;
