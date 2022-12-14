import { Routes, Route } from "react-router-dom";

import Home from "./Routes/Home";
import Register from "./Routes/Register";
import Login from "./Routes/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
