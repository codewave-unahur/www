import React from "react";
import Home from "./components/Home";
import {HashRouter, Route, Routes} from "react-router-dom";
import Nosotros from "./components/Nosotros";


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
