import React, { useState, useEffect } from "react";
import LoginStyles from "../css/Login.module.css";
import { useNavigate } from "react-router-dom";

const User = {
  id: "abcd",
  pw: "1234",
};

const LoginForm = () => {
  const [id, setID] = useState("");
  const [pw, setPw] = useState("");

  const [idValid, setIDValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  useEffect(() => {
    if (idValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [idValid, pwValid]);

  const handleID = (e) => {
    setID(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setIDValid(true);
    } else {
      setIDValid(false);
    }
  };
  const handlePw = (e) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };
  const onClickConfirmButton = () => {
    if (id === User.id && pw === User.pw) {
      alert("로그인에 성공했습니다.");
    } else {
      alert("아이디 또는 비밀번호를 입력해주세요.");
    }
  };

  let navigate = useNavigate();
  const onClickSignupButton = (event) => {
    const changePage = event.target.id;
    navigate("/" + changePage);
  };

  return (
    <div className={LoginStyles.page}>
      <div className={LoginStyles.titleWrap}>로그인</div>

      <div className={LoginStyles.contentWrap}>
        <div className={LoginStyles.inputTitle}></div>
        <div className={LoginStyles.inputWrap}>
          <input
            className={LoginStyles.input}
            type="text"
            placeholder="아이디를 입력해주세요"
            value={id}
            onChange={handleID}
          />
        </div>
        <div
          style={{ marginTop: "10px" }}
          className={LoginStyles.inputTitle}
        ></div>
        <div className={LoginStyles.inputWrap}>
          <input
            className={LoginStyles.input}
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={pw}
            onChange={handlePw}
          />
        </div>
      </div>

      <div>
        <button
          onClick={onClickConfirmButton}
          className={LoginStyles.loginbutton}
        >
          로그인
        </button>
      </div>
      <div>
        <button 
            onClick={onClickSignupButton} id="member/signup"
            className={LoginStyles.signupbutton}>
            회원가입
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
