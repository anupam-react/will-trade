import { Route, Routes } from "react-router-dom";
import "./App.css";
import LogLayout from "./utils/LogLayout";
import Login from "./components/Login";
import Register from "./components/Register";
import Layout from "./utils/Layout";
import Home from "./components/Home";
import About from "./components/About";
import BuySell from "./components/BuySell";

function App() {
  return (
    <div>
      <Routes>
         <Route element={<LogLayout />}>
           <Route path="/login" element={<Login />} />
           <Route path="/register" element={<Register />} />
           </Route>
         <Route element={<Layout />}>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/sell" element={<BuySell />} />
           </Route>
      </Routes>
    </div>
  );
}

export default App;

