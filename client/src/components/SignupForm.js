import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/Signup.module.css";

//

const SingupForm = () => {
  const [userid, setUserId] = useState("");
  const [pw, setPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [username, setUserName] = useState("");
  const [useremail, setUserEmail] = useState("");
  const [userphone, setUserPhone] = useState("");
  // const [sex, setSex] = useState("");
  let navigate = useNavigate();
  const onChange = (event) => {
    const { name, value } = event.target;
    if (name === "userid") {
      setUserId(value);
    } else if (name === "pw") {
      setPw(value);
    } else if (name === "confirmPw") {
      setConfirmPw(value);
    } else if (name === "username") {
      setUserName(value);
    } else if (name === "useremail") {
      setUserEmail(value);
    } else if (name === "userphone") {
      const onlyNumber = value.replace(/[^0-9]/g, '')
      setUserPhone(onlyNumber);
    }
    // else if (name === "sex") {
    //   setSex(value);
    // }
  };

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   const res = await axios.post("http://localhost:8080/register", {
  //     username: username,
  //     userid: userid,
  //     pw: pw,
  //   });
  //   if (res.data === "fail") {
  //     window.alert("회원가입 실패");
  //   } else if (res.data === "success") {
  //     window.alert("회원가입 성공");
  //     navigate("/login");
  //   }
  // };
  return (
    <div>
      <form
        className={styles.page}
        id="singupForm"
        style={{ flexDirection: "column", display: "flex", width: "200px" }}
        // onSubmit={onSubmit}
      >
        <div className={styles.signupTitle}>
          회원가입
        </div>
        <div className={styles.signupPage}>
          <div className={styles.essentialInputBox}>
            <span className={styles.essentialInputEmo}>*</span>필수입력사항
          </div>
          <div className={styles.inputBox}>
            <div className={styles.elementFlex}>
              <div className={styles.elementTitle}>
                <label className={styles.elementFont}>
                  아이디<span className={styles.essentialInputEmo}>*</span>
                </label>
              </div>
              <div className={styles.Inputflex}>
                <div className={styles.Inputpadding}>
                  <div className={styles.Inputposition}>
                    <input className={styles.Input}
                    onChange={onChange}
                    value={userid}
                    name="userid"
                    type="text"
                    placeholder="아이디를 입력해주세요">
                    </input>
                  </div>
                </div>
              </div>

              <div className={styles.repeatBox}>
                <button className={styles.repeatButton}>
                  <span>중복확인</span>
                </button>
              </div>
            </div>

            <div className={styles.elementFlex}>
              <div className={styles.elementTitle}>
                <label className={styles.elementFont}>
                  비밀번호<span className={styles.essentialInputEmo}>*</span>
                </label>
              </div>
              <div className={styles.Inputflex}>
                <div className={styles.Inputpadding}>
                  <div className={styles.Inputposition}>
                    <input className={styles.Input}
                    onChange={onChange}
                    value={pw}
                    name="pw"
                    type="text"
                    placeholder="비밀번호를 입력해주세요">
                    </input>
                  </div>
                </div>
              </div>

              <div className={styles.repeatBox}>
              </div>
            </div>

            <div className={styles.elementFlex}>
              <div className={styles.elementTitle}>
                <label className={styles.elementFont}>
                  비밀번호확인<span className={styles.essentialInputEmo}>*</span>
                </label>
              </div>
              <div className={styles.Inputflex}>
                <div className={styles.Inputpadding}>
                  <div className={styles.Inputposition}>
                    <input className={styles.Input}
                    onChange={onChange}
                    value={confirmPw}
                    name="confirmPw"
                    type="text"
                    placeholder="비밀번호를 한번 더 입력해주세요">
                    </input>
                  </div>
                </div>
              </div>

              <div className={styles.repeatBox}>
              </div>
            </div>

            <div className={styles.elementFlex}>
              <div className={styles.elementTitle}>
                <label className={styles.elementFont}>
                  이름<span className={styles.essentialInputEmo}>*</span>
                </label>
              </div>
              <div className={styles.Inputflex}>
                <div className={styles.Inputpadding}>
                  <div className={styles.Inputposition}>
                    <input className={styles.Input}
                    onChange={onChange}
                    value={username}
                    name="username"
                    type="text"
                    placeholder="이름을 입력해 주세요">
                    </input>
                  </div>
                </div>
              </div>

              <div className={styles.repeatBox}>
              </div>
            </div>

            <div className={styles.elementFlex}>
              <div className={styles.elementTitle}>
                <label className={styles.elementFont}>
                  이메일<span className={styles.essentialInputEmo}>*</span>
                </label>
              </div>
              <div className={styles.Inputflex}>
                <div className={styles.Inputpadding}>
                  <div className={styles.Inputposition}>
                    <input className={styles.Input}
                    onChange={onChange}
                    value={useremail}
                    name="useremail"
                    type="text"
                    placeholder="예: marketkurly@kurly.com">
                    </input>
                  </div>
                </div>
              </div>

              <div className={styles.repeatBox}>
                <button className={styles.repeatButton}>
                  <span>중복확인</span>
                </button>
              </div>
            </div>

            <div className={styles.elementFlex}>
              <div className={styles.elementTitle}>
                <label className={styles.elementFont}>
                  휴대폰<span className={styles.essentialInputEmo}>*</span>
                </label>
              </div>
              <div className={styles.Inputflex}>
                <div className={styles.Inputpadding}>
                  <div className={styles.Inputposition}>
                    <input className={styles.Input}
                    onChange={onChange}
                    value={userphone}
                    name="userphone"
                    type="text"
                    maxLength="11"
                    placeholder="숫자만 입력해주세요">
                    </input>
                  </div>
                </div>
              </div>

              <div className={styles.repeatBox}>
                <button className={styles.repeatButton}>
                  <span>인증번호 받기</span>
                </button>
              </div>
            </div>

            <div className={styles.elementFlex}>
              <div className={styles.elementTitle}>
                <label className={styles.elementFont}>
                  주소<span className={styles.essentialInputEmo}>*</span>
                </label>
              </div>
              <div className={styles.Inputflex}>
                <div className={styles.Inputpadding}>
                  <div className={styles.Inputposition}>
                    <input className={styles.Input}
                    onChange={onChange}
                    value={userphone}
                    name="userphone"
                    type="text"
                    maxLength="11"
                    placeholder="숫자만 입력해주세요">
                    </input>
                  </div>
                </div>
              </div>

              <div className={styles.repeatBox}>
                <button className={styles.repeatButton}>
                  <span>인증번호 받기</span>
                </button>
              </div>
            </div>


          </div>

        </div>
      </form>
    </div>
  );
};

export default SingupForm;
