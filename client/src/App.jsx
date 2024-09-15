//http://localhost:5173/

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Editor from "./components/editor";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/*appear in all components */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/write" element={<Editor />}/>
      </Routes>
    </BrowserRouter>
  )
}