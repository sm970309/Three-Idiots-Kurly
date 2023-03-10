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
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(count * item.price);

  useEffect(() => {
    const minusBtn = document.getElementById("minusBtn");
    if (count === 1) {
      minusBtn.disabled = true;
      setTotalPrice(count * item.price);
      minusBtn.className = styles.minusBtnDisabled;
    } else {
      minusBtn.disabled = false;
      setTotalPrice(count * item.price);
      minusBtn.className = styles.minusBtnActive;
    }
  }, [count]);

  // return <PaintItem items={items} />;
  return (
    <div className={styles.formDiv}>
      <main id="product-atf" className={styles.formMain}>
        <div>
          <img className={styles.imgDiv} src={item.img} />
        </div>
        <section className={styles.formSection}>
          <div className={styles.divFont}>샛별배송</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className={styles.itemNameDiv}>
              <h1 className={styles.itemNameH1}>{item.name}</h1>
              <button className={styles.shareBtn}></button>
            </div>
            <h2 className={styles.commentH2}>세얼간이 마켓컬리</h2>
          </div>
          <h2 className={styles.itemPriceH2}>
            <span className={styles.itemPriceSpan}>{item.price}</span>
            <span className={styles.wonSpan}>원</span>
          </h2>
          <div className={styles.loginInclude}>
            로그인 후, 적립 혜택이 제공됩니다.
          </div>
          <div>
            <dl className={styles.formDl}>
              <dt className={styles.formDt}>배송</dt>
              <dd className={styles.formDd}>
                <p className={styles.ddFont1}>샛별배송</p>
                <p className={styles.ddFont2}>
                  23시 전 주문 시 내일 아침 7시 전 도착 <br></br>
                  (대구·부산·울산 샛별배송 운영시간 별도 확인)
                </p>
              </dd>
            </dl>

            <dl className={styles.formDl}>
              <dt className={styles.formDt}>판매자</dt>
              <dd className={styles.formDd}>
                <p className={styles.ddFont1}>컬리</p>
              </dd>
            </dl>

            <dl className={styles.formDl}>
              <dt className={styles.formDt}>포장타입</dt>
              <dd className={styles.formDd}>
                <p className={styles.ddFont1}>냉장(종이포장)</p>
                <p className={styles.ddFont2}>
                  택배배송은 에코 포장이 스티로폼으로 대체됩니다.
                </p>
              </dd>
            </dl>
          </div>

          <div style={{ paddingBottom: "40px" }}>
            <div className={styles.choiceItemDiv}>
              <dl className={styles.formDl}>
                <dt className={styles.formDt}>상품선택</dt>
                <dd className={styles.formDd}>
                  <div className={styles.choiceItemDiv}>
                    <div className={styles.choiceCountDiv}>
                      <span className={styles.choiceCountSpan}>
                        {item.name}
                      </span>
                    </div>
                    <div className={styles.countBtnForm}>
                      <div className={styles.countBtnDiv}>
                        <button
                          className={styles.minusBtnDisabled}
                          label="수량내리기"
                          onClick={() => setCount(count - 1)}
                          id="minusBtn"
                        ></button>
                        <div className={styles.countDiv}>{count}</div>

                        <button
                          className={styles.plusBtn}
                          label="수량올리기"
                          id="plusBtn"
                          onClick={() => setCount(count + 1)}
                        ></button>
                      </div>
                      <div>
                        <span className={styles.itemPriceSpan2}>
                          {item.price}원
                        </span>
                      </div>
                    </div>
                  </div>
                </dd>
              </dl>
            </div>
            <div style={{ paddingTop: "30px" }}>
              <div style={{ letterSpacing: "-0.5px" }}>
                <div className={styles.totalPriceDiv}>
                  <span className={styles.totalPriceComment}>총 상품금액:</span>
                  <span className={styles.totalPriceSpan}>{totalPrice}</span>
                  <span className={styles.wonSpan2}>원</span>
                </div>
                <div className={styles.underCountDiv}>
                  <span className={styles.underCountFont1}>적립</span>
                  <span className={styles.underCountFont2}>
                    로그인 후, 적입 혜택 제공
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.cartForm}>
              <button className={styles.likeBtn}>
                <span className={styles.likeSpan}>
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yNS44MDcgNy44NjNhNS43NzcgNS43NzcgMCAwIDAtOC4xNzIgMEwxNiA5LjQ5N2wtMS42MzUtMS42MzRhNS43NzkgNS43NzkgMCAxIDAtOC4xNzMgOC4xNzJsMS42MzQgMS42MzQgNy40NjYgNy40NjdhMSAxIDAgMCAwIDEuNDE1IDBzMCAwIDAgMGw3LjQ2Ni03LjQ2N2gwbDEuNjM0LTEuNjM0YTUuNzc3IDUuNzc3IDAgMCAwIDAtOC4xNzJ6IiBzdHJva2U9IiM1RjAwODAiIHN0cm9rZS13aWR0aD0iMS42IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K"></img>
                </span>
              </button>
              <button className={styles.restockBtn} disabled>
                <span className={styles.restockSpan}>
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIHN0cm9rZT0iI0NDQyIgc3Ryb2tlLXdpZHRoPSIxLjYiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTEyLjY2NiAyM2EzLjMzMyAzLjMzMyAwIDEgMCA2LjY2NiAwIi8+CiAgICAgICAgPHBhdGggZD0iTTI1Ljk5OCAyMi43MzhINmwuMDEzLS4wM2MuMDc2LS4xMzUuNDcxLS43MDQgMS4xODYtMS43MDlsLjc1LTEuMDV2LTYuNjM1YzAtNC40ODUgMy40MzgtOC4xNCA3Ljc0MS04LjMwOEwxNiA1YzQuNDQ2IDAgOC4wNSAzLjcyMiA4LjA1IDguMzE0djYuNjM0bDEuNzA3IDIuNDExYy4xNzMuMjUzLjI1NC4zOC4yNDIuMzh6IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgIDwvZz4KPC9zdmc+Cg=="></img>
                </span>
              </button>
              <div className={styles.cartDiv}>
                <button className={styles.cartBtn}>
                  <span className={styles.cartSpan}>장바구니 담기</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default ItemDetailForm;
