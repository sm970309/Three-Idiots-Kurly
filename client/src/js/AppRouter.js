import { BrowserRouter, Route, Routes } from "react-router-dom";
import Market from "./Market";
import Beatuy from "./Beauty";
import Home from "./Home";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/market" element={<Market />} />
        <Route exact path="/beauty" element={<Beatuy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
