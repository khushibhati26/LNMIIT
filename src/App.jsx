import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Service from './components/Service/Service.jsx';
import About from './components/About/About.jsx';
import Home from './components/Home/Home.jsx';
// import Doctors from './components/Doctors/Doctors.jsx'; // Assuming you have a Doctors component
// import Appointment from './components/Appointment/Appointment.jsx'; // Assuming you have an Appointment component
import Login from './components/Login/Login.jsx'; // Assuming you have a Login component
import { AuthProvider } from './context/AuthContext.jsx';

function App() {
  return (
    <AuthProvider>

    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/services" element={<Service />} /> 
        <Route path="/about" element={<About />} /> 
        {/* <Route path="/doctors" element={<Doctors />} /> */}
        {/* <Route path="/appointment" element={<Appointment />} /> */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;