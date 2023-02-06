import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import styles from "../css/Navigation.module.css";
import THREEIDIOTS_LOGO from "../img/세얼간이_logo.jpg";

const Navigation = () => {
  let navigate = useNavigate();
  const onClick = (event) => {
    const changePage = event.target.id;
    navigate("/" + changePage);
  };

  return (
    <div className={styles.navigationDiv}>
      <div className={styles.topBar}>
        <a className={styles.topBarCursor} onClick={onClick} id="member/signup">
          회원가입
        </a>
        <div className={styles.topBarLine}></div>
        <a className={styles.topBarCursor} onClick={onClick} id="member/login">
          로그인
        </a>
        <div className={styles.topBarLine}></div>
        <div>
          <a className={styles.clientcenter}onClick={onClick} id="member/signup">
            고객센터
            <span className={styles.downArrow}></span>
          </a>
          <div className={styles.clientcenterBox}>
            <div className={styles.clientcenterFont}>공지사항</div>
            <div className={styles.clientcenterFont}>자주하는 질문</div>
            <div className={styles.clientcenterFont}>1:1 문의</div>
            <div className={styles.clientcenterFont}>대량주문 문의</div>
          </div>
        </div>
      </div>
      <div className={styles.midBar}>
        <img
          id="market"
          src={THREEIDIOTS_LOGO}
          alt="세얼간이_로고"
          width="100px"
          height="70px"
          style={{
            border: "3px solid purple",
          }}
          onClick={onClick}
        />
        <button
          onClick={onClick}
          id="market"
          className={styles.navigationbutton}
        >
          마켓컬리
        </button>
        <button
          onClick={onClick}
          id="beauty"
          className={styles.navigationbutton}
        >
          뷰티컬리
        </button>
        <SearchBar />
      </div>
    </div>
  );
};

export default Navigation;
