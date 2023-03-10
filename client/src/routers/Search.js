import ItemList from "../components/ItemList";
import Navigation from "../components/Navigation";
import styles from "../css/Search.module.css";
import PaintItem from "../components/PaintItem";

const Search = () => {
  let items = JSON.parse(localStorage.getItem("items"));
  items = items.slice(120, 121);

  let keyword = Navigation.keyword;

    return (
      <div>
        <div>
          <Navigation />
        </div>
        <div className={styles.OutSectionDiv}>
          <div className={styles.InnerSectionDiv}>
            <div className={styles.MainSectionDiv}>
              <h3 className={styles.SearchTitle}>'{keyword}'에 대한 검색 결과</h3>
              <div className={styles.SearchSectionDiv}>
                <div className={styles.LeftSectionDiv}>
                  <span className={styles.FilterFont}>
                    필터
                  </span>
                  <div>
                    <div className={styles.SearchCategoryDiv}>
                      <button className={styles.SearchCategoryButton}>
                        <div className={styles.SearchCategoryButtonDiv}>
                          카테고리
                        </div>
                      </button>
                      <ul className={styles.Searchul}>
                        <li className={styles.Searchli}>
                          <a className={styles.Searcha}>
                            <button className={styles.SearchaButton}>

                            </button>
                            <span className={styles.SearchaSpan}>
                              과자.스낵.쿠키
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className={styles.SearchCategoryDiv}>
                    <button className={styles.SearchCategoryButton}>
                        <div className={styles.SearchCategoryButtonDiv}>
                          브랜드
                        </div>
                      </button>
                    </div>
                    <div className={styles.SearchCategoryDiv}>
                    <button className={styles.SearchCategoryButton}>
                        <div className={styles.SearchCategoryButtonDiv}>
                          가격
                        </div>
                      </button>
                    </div>
                    <div className={styles.SearchCategoryDiv}>
                    <button className={styles.SearchCategoryButton}>
                        <div className={styles.SearchCategoryButtonDiv}>
                          혜택
                        </div>
                      </button>
                    </div>
                    <div className={styles.SearchCategoryDiv}>
                    <button className={styles.SearchCategoryButton}>
                        <div className={styles.SearchCategoryButtonDiv}>
                          유형
                        </div>
                      </button>
                    </div>
                    <div className={styles.SearchCategoryDiv}>
                    <button className={styles.SearchCategoryButton}>
                        <div className={styles.SearchCategoryButtonDiv}>
                          특정상품 제외
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles.RightSectionDiv}>
                  <div className={styles.RightSectionUpDiv}>
                    <div className={styles.SearchTotalFont}>총 000건</div>
                    <ul className={styles.RightSectionSearchCategoryul}>
                      <li className={styles.RightSectionSearchCategoryli}>
                        <a className={styles.RightSectionSearchCategorya}>추천순</a>
                      </li>
                      <li className={styles.RightSectionSearchCategoryli}>
                        <a className={styles.RightSectionSearchCategorya}>신상품순</a>
                      </li>
                      <li className={styles.RightSectionSearchCategoryli}>
                        <a className={styles.RightSectionSearchCategorya}>판매량순</a>
                      </li>
                      <li className={styles.RightSectionSearchCategoryli}>
                        <a className={styles.RightSectionSearchCategorya}>혜택순</a>
                      </li>
                      <li className={styles.RightSectionSearchCategoryli}>
                        <a className={styles.RightSectionSearchCategorya}>낮은 가격순</a>
                      </li>
                      <li className={styles.RightSectionSearchCategoryli}>
                        <a className={styles.RightSectionSearchCategorya}>높은 가격순</a>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.RightSectionMiddleDiv}>
                    <a className={styles.RightSectionflex}>
                    {items &&
                      items.map((item) => (
                          <PaintItem items={item} />
                      ))}
                    </a>
                  </div>
                  <div className={styles.RightSectionDownDiv}>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default Search;
  