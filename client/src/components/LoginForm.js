import React, { useState, useEffect } from "react";
import styles from "../css/LoginForm.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:8000/signin";
const LoginForm = () => {
  let navigate = useNavigate();
  const onClick = (event) => {
    const changePage = event.target.id;
    navigate("/" + changePage);
  };

  const [id, setId] = useState(null);
  const [pw, setPw] = useState(null);

  const onChage = (event) => {
    const { name, value } = event.target;
    if (name === "id") {
      setId(value);
    } else if (name === "pw") {
      setPw(value);
    }
  };

  const login = (event) => {
    event.preventDefault();
    axios
      .post(API_URL, {
        id: id,
        pw: pw,
      })
      .then((response) => {
        const { status } = response.data.result;
        if (status === "success") {
          navigate("/" + "market");
        } else if (status === "fail") {
          alert("아이디 또는 비밀번호가 틀렸습니다.");
        }
      })
      .catch((error) => {
        alert("서버 연동 오류");
        console.log(error);
      });
  };

  return (
    <div className={styles.loginFormDiv}>
      <div className={styles.loginDiv}>로그인</div>
      <div className={styles.loginSection}>
        <form>
          <div className={styles.sectionDiv}>
            <div className={styles.sectionIdDiv}>
              <div className={styles.inputDiv}>
                <input
                  className={styles.loginInput}
                  name="id"
                  type="text"
                  placeholder="아이디를 입력해주세요"
                  onChange={onChage}
                />
              </div>
            </div>
            <div className={styles.sectionPwDiv}>
              <div className={styles.inputDiv}>
                <input
                  type="password"
                  name="pw"
                  className={styles.loginInput}
                  placeholder="비밀번호를 입력해주세요"
                  onChange={onChage}
                />
              </div>
            </div>
          </div>
          <div className={styles.findUserDiv}>
            <a className={styles.findUserA}>아이디 찾기</a>
            <span className={styles.findUserSpan}></span>
            <a className={styles.findUserA}>비밀번호 찾기</a>
          </div>
          <div style={{ marginTop: "28px" }}>
            <button type="button" className={styles.loginBtn} onClick={login}>
              <a className={styles.btnAFont}>로그인</a>
            </button>
            <button
              type="button"
              id="member/signup"
              onClick={onClick}
              className={styles.signupBtn}
            >
              <a className={styles.btnAFont}>회원가입</a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
