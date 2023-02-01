import axios from "axios";
import React, { useEffect } from "react";

function ShowAllData() {
  useEffect(() => {
    axios.post("http://localhost:8000/items").then((response) => {
      if (response.data.success) {
        console.log(response.data);
      } else {
        alert("상품을 가져오는데 실패했습니다.");
      }
    });
  });

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      ShowAllData
    </div>
  );
}

export default ShowAllData;
