import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useState } from "react";
import styles from "../css/Navigation.module.css";
import THREEIDIOTS_LOGO from "../img/세얼간이_logo.jpg";

const CATEGORIES = [
  {
    id: 1,
    name: "채소",
    subcategories: [
      { subCategoryId: 1, name: "친환경" },
      { subCategoryId: 2, name: "고구마·감자·당근" },
      { subCategoryId: 3, name: "시금치·쌈채소·나물" },
    ],
  },
  {
    id: 2,
    name: "과일·견과·쌀",
    subcategories: [
      { subCategoryId: 1, name: "친환경" },
      { subCategoryId: 2, name: "제철과일" },
      { subCategoryId: 3, name: "국산과일" },
    ],
  },
  {
    id: 3,
    name: "수산·해산·건어물",
    subcategories: [
      { subCategoryId: 1, name: "제철수산" },
      { subCategoryId: 2, name: "생선류" },
      { subCategoryId: 3, name: "굴비·반건류" },
    ],
  },
];

let subcategorieArray = [];

const Navigation = () => {
  let navigate = useNavigate();

  const onClick = (event) => {
    const changePage = event.target.id;
    navigate("/" + changePage);
  };

  const [keyword, setKeyWord] = useState("");
  
  const onSubmit = async () => {
    // window.location.href = "/search/" + keyword;
    navigate("/search/"+ keyword);
  };

  const [mainCategoryToggle, setMainCategoryToggle] = useState(false);
  const [subCategoryToggle, setSubCategoryToggle] = useState(false);
  const [subCategoryName, setSubCategoryName] = useState("");

  return (
    <div>
      <div className={styles.topBar}>
        <div className={styles.topUserBar}>
          <a className={styles.signupFont} onClick={onClick} id="member/signup">
            회원가입
          </a>

          <div className={styles.topBarLine}></div>

          <a className={styles.topBarAFont} onClick={onClick} id="member/login">
            로그인
          </a>

          <div className={styles.topBarLine}></div>

          <div className={styles.clientCenter}>
            <a
              className={styles.topBarAFont}
              onClick={onClick}
              id="member/signup"
            >
              고객센터
              <span className={styles.downArrow}></span>
            </a>

            <div className={styles.clientCenterBox}>
              <div className={styles.clientCenterFont}>공지사항</div>
              <div className={styles.clientCenterFont}>자주하는 질문</div>
              <div className={styles.clientcenterFont}>1:1 문의</div>
              <div className={styles.clientCenterFont}>대량주문 문의</div>
            </div>
          </div>
        </div>
        <div className={styles.midBar}>
          <div className={styles.midChoiceBar}>
            <img
              id="market"
              src={THREEIDIOTS_LOGO}
              alt="세얼간이_로고"
              style={{ height: "42px", width: "82px" }}
              onClick={onClick}
            />
            <button
              onClick={onClick}
              id="market"
              className={styles.midBarMarketBtn}
            >
              마켓컬리
            </button>
            <button
              onClick={onClick}
              id="beauty"
              className={styles.midBarBeautyBtn}
            >
              뷰티컬리
            </button>
          </div>
          <div className={styles.searchDiv}>
            <div className={styles.searchBar}>
              <input
                className={styles.searchInput}
                type="text"
                id="keyword"
                value={keyword}
                placeholder="검색을 입력해주세요"
                onChange={(e) => {
                  setKeyWord(e.target.value);
                  console.log(keyword);
                }}></input>
              <button
                className={styles.searchBarXbutton}></button>
              <button
                className={styles.searchBarbutton}
                id="submit"
                type="button"
                onClick={() =>{
                  onSubmit();
                }}></button>
            </div>
          </div>
          <div>
            <div className={styles.tmpDiv}></div>
          </div>
        </div>
      </div>
      <div className={styles.lowDiv}>
        <div className={styles.lowBar}>
          <div>
            <div
              className={styles.lowCategoryDiv}
              onMouseEnter={() => setMainCategoryToggle(true)}
              onMouseLeave={() => setMainCategoryToggle(false)}
            >
              <span className={styles.CategoryBar}></span>
              <span>카테고리</span>
              {mainCategoryToggle ? (
                <div className={styles.categoryFormDiv}>
                  <div className={styles.mainCategoryFormDiv}>
                    {CATEGORIES &&
                      CATEGORIES.map((item) => (
                        <div>
                          <div
                            className={styles.mainCategoryDiv}
                            onMouseEnter={() => {
                              setSubCategoryToggle(true);
                              setSubCategoryName(item.name);
                              subcategorieArray = item.subcategories;
                            }}
                            onMouseLeave={() => {
                              setSubCategoryToggle(false);
                            }}
                          >
                            {item.name}
                          </div>
                        </div>
                      ))}
                  </div>
                  {subCategoryToggle ? (
                    <div
                      className={styles.subCategoryFormDiv}
                      onMouseEnter={() => {
                        setSubCategoryToggle(true);
                      }}
                      onMouseLeave={() => {
                        setSubCategoryToggle(false);
                      }}
                    >
                      <div>
                        {subcategorieArray.map((item) => (
                          <div>
                            <div className={styles.subCategoryDiv}>
                              {item.name}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
          <ul className={styles.lowUl}>
            <li className={styles.lowLi}>
              <span className={styles.lowSpan}>신상품</span>
            </li>
            <li className={styles.lowLi}>
              <span className={styles.lowSpan}>베스트</span>
            </li>
            <li className={styles.lowLi}>
              <span className={styles.lowSpan}>알뜰쇼핑</span>
            </li>
            <li className={styles.lowLi}>
              <span className={styles.lowSpan}>특가/혜택</span>
            </li>
          </ul>
          <div>
            <a>
              <div className={styles.tmpDiv2}></div>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.tmpDiv3} hidden></div>
    </div>
  );
};

export default Navigation;
