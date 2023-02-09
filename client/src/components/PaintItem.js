import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

function PaintItem({ items }) {
  let navigate = useNavigate();

  const onClick = (event) => {
    const changePage = event.target.id;
    navigate("/goods/" + changePage);
  };

  // return items.map((item) => (
  //   <div key={item.no} onClick={onClick}>
  //     <img id={item.no} src={item.img} width="249px" height="320px" />
  //     <h3 id={item.no} size="12px">
  //       {item.name}
  //     </h3>
  //     <span id={item.no}>{item.price}원</span>
  //   </div>
  // ));

  return (
    <div key={items.no} onClick={onClick}>
      <img id={items.no} src={items.img} width="249px" height="320px" />
      <h3 id={items.no} size="12px">
        {items.name}
      </h3>
      <span id={items.no}>{items.price}원</span>
    </div>
  );
}

export default PaintItem;
