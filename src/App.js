import { Route, Routes } from "react-router-dom";
import "./App.css";
import LogLayout from "./utils/LogLayout";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <Routes>
         <Route element={<LogLayout />}>
           <Route path="/login" element={<Login />} />
           <Route path="/" element={<Register />} />
           </Route>
      </Routes>
    </div>
  );
}

export default App;

