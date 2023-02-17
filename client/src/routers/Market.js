import ItemList from "../components/ItemList";
import Navigaion from "../components/Navigation";
import React, { useEffect, useState } from "react";

function Market() {
  return (
    <div>
      <Navigaion />
      <div>
        <h2 align="center" style={{ marginTop: "20px" }}>
          이 상품 어때요?
        </h2>

        <ItemList />
      </div>
    </div>
  );
}

export default Market;
