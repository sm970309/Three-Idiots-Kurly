import { BrowserRouter, Route, Routes } from "react-router-dom";
import Market from "../routers/Market";
import Beatuy from "../routers/Beauty";
import Home from "../routers/Home";
import SignUp from "../routers/SignUp";
import Login from "../routers/Login";
import Goods from "../routers/Goods";
import Search from "../routers/Search";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/market" element={<Market />} />
        <Route exact path="/beauty" element={<Beatuy />} />
        <Route exact path="/member/signup" element={<SignUp />} />
        <Route exact path="/member/login" element={<Login />} />
        <Route exact path="/goods/:no" element={<Goods />} />
        <Route exact path="/search/:sword" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
