
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Signup from './components/SignUp';
import Login from './components/Login';
import Auth from './pages/Auth';
function App() {
  return (
    <div className='bg-black h-screen w-screen'>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/auth" element={<Auth/>}></Route>
    </Routes>
    
    </div>
  );
}

export default App;
