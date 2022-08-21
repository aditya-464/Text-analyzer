import './App.css';
// import About from './components/About';
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
import React, { useState } from 'react'
import Alerts from './components/Alerts';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";

// let name = "Aditya Giri";
// let element = (
//   <h1>Hello world is the first line</h1>
// )
function App() {
  let clrArray = ["rgb(0, 28, 63)", "rgb(6, 61, 58)", "rgb(4, 4, 69)", "rgb(16, 53, 0)", "rgb(73, 5, 5)"]
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      document.body.style.color = "white";
      showAlert("Dark mode enabled!", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode enabled!", "success");
    }
  }
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const bgColor = (color) => {
    document.body.style.backgroundColor = color;
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} bgColor={bgColor} clrArray={clrArray} />
      <Alerts alert={alert} />
      <div className="container">
        {/* <Routes>
            <Route exact path="/" element={} />
            <Route exact path="/about" element={<About />} />
          </Routes> */}
        <TextForm showAlert={showAlert} title="Enter the text to analyze" mode={mode} />
      </div>
      {/* </Router> */}
    </>
  );
}


export default App;
