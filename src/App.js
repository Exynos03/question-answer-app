import './App.css';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <header>
        <h2>Q&A App</h2>
        <button>Register</button>
        <button>Log In</button>

        <Register />
      </header>
    </div>
  );
}

export default App;
