import logo from './logo.svg';
// import {render} from "react-dom"
import './App.css';
import NoMatch from "../src/pages/NoMatch/noMatch" 
import Home from "../src/pages/Home/home.js"
// import { createRoot } from "react-dom/client";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<NoMatch/>}/>
    </Routes>
   </Router>
  );
}

export default App;
