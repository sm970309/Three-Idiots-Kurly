import { BrowserRouter, Route, Routes } from "react-router-dom";
import Market from "../routers/Market";
import Beatuy from "../routers/Beauty";
import Home from "../routers/Home";
import SingUp from "../routers/SingUp";
import Login from "../routers/Login";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/market" element={<Market />} />
        <Route exact path="/beauty" element={<Beatuy />} />
        <Route exact path="/member/singup" element={<SingUp />} />
        <Route exact path="/member/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
