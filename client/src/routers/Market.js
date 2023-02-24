import ItemList from "../components/ItemList";
import Navigaion from "../components/Navigation";
import React, { useEffect, useState } from "react";
import styles from "../css/Market.module.css";
import LowPriceItemList from "../components/LowPriceItemList";
import ItemSale from "../components/ItemSale";
import axios from "axios";
function Market() {
  return (
    <div>
      <Navigaion />
      <div style={{ height: "auto" }}>
        <div className={styles.SectionDiv}>
          <div className={styles.SectionTitleDiv}>
            <a className={styles.SectionTitleA}>
              <span className={styles.SectionTitle}>이 상품 어때요?</span>
            </a>
          </div>

          <div className={styles.SwiperDiv}>
            <ItemList />
          </div>
        </div>
      </div>
      <ItemSale />

      <div style={{ height: "auto" }}>
        <div className={styles.SectionDiv}>
          <div className={styles.SectionTitleDiv}>
            <a className={styles.SectionTitleA}>
              <span className={styles.SectionTitle}>
                1만원대 후기가 많은 인기 상품
              </span>
            </a>
            <p className={styles.SectionSubTitle}>
              최근 2주간 후기를 가장 많이 남겨 주셨어요
            </p>
          </div>

          <div className={styles.SwiperDiv}>
            <LowPriceItemList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Market;
