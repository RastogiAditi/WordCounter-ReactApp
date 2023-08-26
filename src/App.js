// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   // Link,
//   // Outlet,
// } from "react-router-dom";
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
//dark mode enbale fumction
  const [mode,setMode]=useState('light');
    const [alert,setAlert]=useState(null);

    const showAlert=(msg,type)=>{
      setAlert({
        msg:msg,
        type:type

      })
      setTimeout(()=>{
        setAlert(null);
      },2000);
    }

  const toggleMode=()=>{
    if(mode=== 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark Mode is on....... ","success");
    }
    else{
      setMode('light');
      
      document.body.style.backgroundColor='white';
      showAlert("Light Mode is on....... ","success");
    }
  }
  return (
  
  //   <BrowserRouter>
  //   <div>
      
  //   <Navbar title="WordCounter" mode={mode} toggleMode={toggleMode}/>
  //       <Alert alert={alert}/>
  //       {/* <TextForm showAlert={showAlert} heading="Enter your text" mode={mode} /> */}
  //   <Routes>
  //   <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter your text" mode={mode} />}/>
  //    <Route path="/about" element={<About />} />      
      
  //   </Routes>
  //   </div>
  // </BrowserRouter>
    <div>
       <Navbar title="WordCounter" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div>
        <TextForm showAlert={showAlert} value="Enter your text" mode={mode} /> 
  
        </div>
       </div>
    
    

  );

   
  
}

export default App;



