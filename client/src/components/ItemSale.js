import { useEffect, useState, useRef } from "react";
import React from "react";
import styles from "../css/ItemSale.module.css";
import lottie from "lottie-web";
import { useNavigate } from "react-router-dom";
import animationData from "../img/lottie-timer.json";
const ItemSale = () => {
  const [items, setItems] = useState([]);
  let [hours, setHours] = useState();
  let [min, setMin] = useState();
  let [sec, setSec] = useState();
  let navigate = useNavigate();
  const onClick = (event) => {
    const changePage = event.target.id;
    navigate("/goods/" + changePage);
  };
  const [checkLottie, setCheckLottie] = useState(false);

  const likecontainer = useRef();

  useEffect(() => {
    if (checkLottie == false) {
      setCheckLottie(true);
      lottie.loadAnimation({
        container: likecontainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    }
  }, [likecontainer]);
  useEffect(() => {
    let items = JSON.parse(localStorage.getItem("items"));
    setItems(items[4]);
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      let day = new Date();
      if (day.getMinutes() == "0") {
        setHours(24 - day.getHours());
      } else {
        setHours(23 - day.getHours());
      }

      if (day.getSeconds() == "0") {
        setMin(60 - day.getMinutes());
      } else {
        setMin(59 - day.getMinutes());
      }

      if (day.getSeconds() == "0") {
        setSec("00");
      } else {
        setSec(60 - day.getSeconds());
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function timerString() {
    if ((hours + "").length == 1) {
      setHours("0" + hours);
    }
    if ((min + "").length == 1) {
      setMin("0" + min);
    }
    if ((sec + "").length == 1) {
      setSec("0" + sec);
    }
  }

  timerString();
  return (
    <div style={{ height: "auto" }}>
      <div className={styles.SectionSaleDiv}>
        <div style={{ width: "249px" }}>
          <h2 className={styles.h2Font}>일일특가</h2>
          <h3 className={styles.h3Font}>24시간 한정 특가</h3>
          <div className={styles.timerDiv}>
            <div
              ref={likecontainer}
              style={{ width: "35px", marginRight: "5px" }}
            />
            <div className={styles.timeUnit}>
              <span className={styles.timeSpan}>{hours}</span>
              <span className={styles.timeSpan}>{min}</span>
              <span className={styles.timeSpan}>{sec}</span>
            </div>
          </div>
          <p className={styles.pFont}>망설이면 늦어요!</p>
        </div>
        <div className={styles.saleItemDiv}>
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
        </div>
      </div>
    </div>
  );
};
export default ItemSale;
