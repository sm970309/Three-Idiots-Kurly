import PaintItem from "./PaintItem";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import SwiperItems from "./SwiperItems";

const LowPriceItemList = () => {
  let items = JSON.parse(localStorage.getItem("items"));
  let resultItem = [];

  const classfyItem = () => {
    items &&
      items.map((item) => {
        if (item.price <= 10000) return resultItem.push(item);
      });
  };
  classfyItem();
  items = resultItem;
  // return <PaintItem items={items} />;
  return <SwiperItems items={items} />;
};
export default LowPriceItemList;
