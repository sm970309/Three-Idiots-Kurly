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
        <a onClick={onClick} id="member/signup">
          회원가입
        </a>
        <a onClick={onClick} id="member/login">
          로그인
        </a>
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
