import PaintItem from "./PaintItem";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import SwiperItems from "./SwiperItems";

const ItemList = () => {
  let items = JSON.parse(localStorage.getItem("items"));
  items = items.slice(0, 8);

  // return <PaintItem items={items} />;
  return <SwiperItems items={items} />;
};
export default ItemList;
