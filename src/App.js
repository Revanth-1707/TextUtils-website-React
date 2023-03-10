import './App.css';
import Navbar from './components/Navbar';
import Textfrom from './components/Textfrom';
import React, {useState} from 'react';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  // const removeBodyClasses = ()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  // }
  const toggleMode = ()=>{
    // removeBodyClasses();
    // console.log(cls)
    // document.body.classList.add('bg-'+cls)
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled", "success") 
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
    <Router>
    {/* <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode}/> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
        <Route exact path={'/TextUtils-website-React'} element={<Textfrom showAlert={showAlert} heading="Try TextUtils - Word counter, Character Counter,Remove extra spaces" mode={mode}/>}></Route>
        <Route exact path={'/TextUtils-website-React/about'} element={<About mode={mode}/>} ></Route>
      </Routes>
  
      {/* <About/> */}
      {/* <Textfrom showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} /> */}
      {/* <Switch>
            <Route path="/">
              <Textfrom showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
            </Route>
            <Route path="/about">
              <About/>
            </Route>
      </Switch> */}
    </div>
    </Router>
    
    </>
  );
}

export default App;
