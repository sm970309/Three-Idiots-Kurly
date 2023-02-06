import ItemList from "../components/ItemList";
import Navigaion from "../components/Navigation";
import PaintItem from "../components/PaintItem";
import SwiperItems from "../components/SwiperItems";
import axios from "axios";
import React, { useEffect, useState } from "react";
const API_KEY = "http://localhost:8000/items";

function Market() {
  return (
    <div>
      <Navigaion />
      <h1>market page</h1>
      <ItemList />
    </div>
  );
}

export default Market;
