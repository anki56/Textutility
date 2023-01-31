import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')//whether the dark mode is enable or not
  const [alert, setAlert] = useState(null);
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success")
      document.title = "Textutils - Dark mode"
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      document.title = "Textutils - Light mode"
    }
  }


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)

  }
  return (
    <>
    <BrowserRouter>
      {/* <Navbar/> */}
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} aboutText="About" />
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
          <Route path="/about">
            <About/>
          </Route>
         
          <Route path="/">
            <TextForm showAlert={showAlert} heading="TEXT CONVERTING BOX" textArea="Enter your text to anyalze" mode={mode} />
          </Route>
        </Routes>
  
    
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
