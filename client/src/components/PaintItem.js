import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styles from "../css/PaintItem.module.css";
function PaintItem({ items }) {
  let navigate = useNavigate();

  const onClick = (event) => {
    const changePage = event.target.id;
    navigate("/goods/" + changePage);
  };

  return (
    <a className={styles.PaintItemA} key={items.no} onClick={onClick}>
      <div className={styles.ImageDiv}>
        <img
          className={styles.ItemImage}
          id={items.no}
          src={items.img}
          alt="상품 이미지"
          loading="lazy"
        />
        <div>
          <button type="button" className={styles.BasketIconBtn}>
            <img
              className={styles.BasketIcon}
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
            />
          </button>
        </div>
      </div>
      <div className={styles.ItemInfoDiv}>
        <h3 className={styles.ItemName} id={items.no}>
          {items.name}
        </h3>

        <span className={styles.ItemPrice} id={items.no}>
          {items.price}원
        </span>
      </div>
    </a>
  );
}

export default PaintItem;
