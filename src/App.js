

import './App.css';
import Alert from './Components/Alert';

// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enable or not
  const [alert, setAlert]= useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
         setAlert(null)
      }, 2000);
  }

const toggleMode=() =>{
  if (mode=== 'light'){
  setMode ('dark');
  document.body.style.backgroundColor = '#042743';
  showAlert("Dark mode has been enabled", "Success");
  document.title='TextUtils - Dark Mode';
  }
  else{
    setMode ('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "Success");
    document.title='TextUtils - Light Mode';
    }
}
  return (
    <>
 { /*<Navbar title="TextUtils" aboutText="About TextUtils"/> */}
 {/*<Router>*/}
 <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
 <Alert alert={alert}/> 
<div className="container my-3">
{/*<Routes>*/}
      {/*<Route path="/About" element={<About />} />*/}
      {/*<Route path="/" element={<TextForm heading ="Enter the text to analyze below" mode={mode}/>} />*/}
{/*</Routes>*/}
<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
    </div>
{/*</Router>*/}
  </>
  );
};

export default App;
