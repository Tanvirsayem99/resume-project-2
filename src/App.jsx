
import './App.css'
import { useContext } from 'react'
import { AuthContext } from './Provider/AuthProvider'
import Navbar from './Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  const {googleLogin} = useContext(AuthContext);
  const login = () =>{
    googleLogin()
  }
  return (
    <div className="App">
      <Navbar></Navbar>
      <Outlet></Outlet>
        
    </div>
  )
}

export default App
