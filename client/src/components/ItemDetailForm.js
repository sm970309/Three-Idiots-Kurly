import PaintItem from "./PaintItem";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import SwiperItems from "./SwiperItems";
import styles from "../css/ItemDetailForm.module.css";

const ItemDetailForm = ({ no }) => {
  let items = JSON.parse(localStorage.getItem("items"));
  let resultItem = [];

  const classfyItem = () => {
    items &&
      items.map((item) => {
        if (item.no === no) {
          return resultItem.push(item);
        }
      });
  };
  classfyItem();
  const item = resultItem.pop();

  // return <PaintItem items={items} />;
  return (
    <div className={styles.formDiv}>
      <main id="product-atf" className={styles.formMain}>
        <div>
          <img className={styles.imgDiv} src={item.img} />
        </div>
        <section className={styles.formSection}>
          <div className={styles.divFont}>샛별배송</div>
          <div className={styles.itemNameDiv}>
            <h1 className={styles.itemNameH1}>{item.name}</h1>
            <button className={styles.shareBtn}></button>
          </div>
        </section>
      </main>
    </div>
  );
};
export default ItemDetailForm;
