import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home.jsx";
import Nosotros from "./views/Nosotros.jsx";
import Beneficios from "./views/Beneficios.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/nosotros"
            element={<Nosotros />}
          />
          <Route
            path="/beneficios"
            element={<Beneficios />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
