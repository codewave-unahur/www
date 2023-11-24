import React from "react";
import Home from "./components/Home";
import {Route,Routes} from "react-router-dom";
import Nosotros from "./components/Nosotros";
import Header from "./components/Home/Header";
import Footer from "./components/Home/Footer";
import Turnos from "./components/Home/Turnos/Turnos";

const App = () => {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/turnos" element={<Turnos />} />
        </Routes>
        <Footer />
      </div>
  );
}
export default App;
