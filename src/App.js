import React from "react";
import Home from "./components/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Nosotros from "./components/Nosotros";

function App() {
  return (
    <div className="App">
        <BrowserRouter basename="/codewave-unahur/www" >
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nosotros" element={<Nosotros />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
