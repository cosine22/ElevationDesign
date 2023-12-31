import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import { NavLink } from "react-router-dom";
import CounterTops from "./pages/CounterTops/CounterTops";
import Cabinets from "./pages/Cabinets/Cabinets";
import Contact from "./pages/Contact/Contact";
import Tile from "./pages/Tile/Tile";

function App() {
  return (
    <div className="App">
      <div className="header"></div>
      <div className="content">
        <BrowserRouter>
          <NavBar />
          <HomePage />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
