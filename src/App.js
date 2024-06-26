import { Route, Routes } from "react-router-dom";
import "./App.css";
import LogLayout from "./utils/LogLayout";
import Login from "./components/Login";
import Register from "./components/Register";
import Layout from "./utils/Layout";
import Home from "./components/Home";
import About from "./components/About";
import BuySell from "./components/BuySell";
import Staking from "./components/Staking";
import Convert from "./components/Convert";
import OTC from "./components/OTC";
import TradingChart from "./components/TradingChart";
import Markets from "./components/Markets";
import Law from "./components/Law";
import Support from "./components/Support";
import Rules from "./components/Rules";
import TermsOfUse from "./components/TermsOfUse";
import Privacy from "./components/Privacy";
import Cookie from "./components/Cookie";

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
           <Route path="/staking" element={<Staking />} />
           <Route path="/convert" element={<Convert />} />
           <Route path="/otc" element={<OTC />} />
           <Route path="/trading" element={<TradingChart />} />
           <Route path="/markets" element={<Markets />} />
           <Route path="/law" element={<Law />} />
           <Route path="/support" element={<Support />} />
           <Route path="/rules" element={<Rules />} />
           <Route path="/terms" element={<TermsOfUse />} />
           <Route path="/privacy" element={<Privacy />} />
           <Route path="/cookie" element={<Cookie />} />
           </Route>
      </Routes>
    </div>
  );
}

export default App;

