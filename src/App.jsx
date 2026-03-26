
import { Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Signup from './pages/Signup.jsx';
import './index.css'
import './App.css'
// import AuthProvider  from "./context/AuthContext";

function App() {
  return (

  <div className="App">
      <Routes>
        <Route path='/' element={<Signup />}/>
        <Route path='/signup' element={<Signup />}/>
      </Routes>
  </div>
  )
}



export default App
