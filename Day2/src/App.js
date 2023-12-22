import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Home from './components/Home.jsx';
import About from './components/about';
import Contact from './components/contact';
import Menu from './components/Menu.jsx'; 


function App() {
  return (
    <Router>
      <div>        
          <Routes>       
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Home" exact element={< Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/Menu" element={<Menu/>} />
        <Route path="/contact" element={<Contact />} />        
        </Routes>
      </div>
    </Router>  
  );
}
export default App;

     