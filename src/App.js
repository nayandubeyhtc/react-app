import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Login from './components/Login';
import About from './components/About'; 
import CardView from './components/CardView';

import React, { useState } from 'react'
import Alert from './components/Alert'; 
import Userlist from './components/Userlist';
import CardViewDetails from './components/CardViewDetails';
import jsonData from './data.json';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Signup from './components/Signup';

function App() {
  const [mode, setMode] = useState('light'); //DarkMode is enabled or not
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
      console.log('if --- light ------- ');
      setMode('dark');
      document.body.style.backgroundColor = '#010d19';
      showAlertMessage('Dark mode activated', 'success');
    } else {
      console.log('else case ------- ');
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlertMessage('Light mode activated', 'success');
    }
  }
  const showAlertMessage = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils2" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3"> 
        <Routes> 
          <Route path="/about" element={<About mode={mode}/>} /> 
          <Route path="/" element={<TextForm heading="Enter the text to analyze"
           mode={mode} showAlertMessage={showAlertMessage} />} />
          <Route path="/userlist" element={<Userlist mode={mode}/>} />
          <Route path="/login" element={<Login mode={mode}/>} />
          <Route path="/signup" element={<Signup mode={mode}/>} />
          <Route path="/cardview" element={<CardView mode={mode} jsonData={jsonData}/>} /> 
          <Route path="/cardviewdetails" element={<CardViewDetails mode={mode}/>} />
        </Routes> 
      </div>
      </Router> 
    </>
  );
}

export default App;
