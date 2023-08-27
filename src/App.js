import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
  // Outlet,
} from "react-router-dom";
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import Footer from "./components/Footer";

function App() {
  //dark mode enbale fumction
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode is on....... ", "success");
    } else {
      setMode("light");

      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is on....... ", "success");
    }
  };
  return (
    <BrowserRouter>
    <div>
       <Navbar title="WordCounter" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
    </div>
    <Routes>
      <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Word Counter : Word Count| Character Count | Time Count for Reading Word" mode={mode} />
} />
      <Route exact path="/about" element={<About />} />
    </Routes>
    <div><Footer/></div>
  </BrowserRouter>
);
                              //without routing code
    // <div>
    //    <Navbar title="WordCounter" mode={mode} toggleMode={toggleMode}/>
    //     <Alert alert={alert}/>
    //     <div>
    //       {/* <About mode={mode}/> */}
    //     <TextForm showAlert={showAlert} heading="Word Counter : Word Count| Character Count | Time Count for Reading Word" mode={mode} />

    //     </div>
    //     <div><Footer/></div>
    //    </div>
}

export default App;
