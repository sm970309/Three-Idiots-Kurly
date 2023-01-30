import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import styles from "../css/Navigation.module.css";

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
