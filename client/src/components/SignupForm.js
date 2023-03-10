import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PopupDom from "../components/PopupDom";
import PopupPostCode from "../components/PopupPostCode";
import styles from "../css/Signup.module.css";

const API_KEY = "http://localhost:8000/signup";
const confirmID_url = "http://localhost:8000/confirmId";

const SingupForm = () => {
  const [id, setUserId] = useState("");
  const [pw, setPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [name, setUserName] = useState("");
  const [email, setUserEmail] = useState("");
  const [phone, setUserPhone] = useState("");
  const [secondAddress, setUserSecondAddress] = useState("");
  const LoginNavigate = useNavigate();

  let firstAddress = JSON.parse(localStorage.getItem("address"));

  let finalAddress = firstAddress + " " + secondAddress;

  // 팝업창 상태 관리
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // 팝업창 열기
  const openPostCode = () => {
    setIsPopupOpen(true);
  };

  // 팝업창 닫기
  const closePostCode = () => {
    setIsPopupOpen(false);
  };

  let navigate = useNavigate();
  const onChange = (event) => {
    const { name, value } = event.target;
    if (name === "id") {
      setUserId(value);
    } else if (name === "pw") {
      setPw(value);
    } else if (name === "confirmPw") {
      setConfirmPw(value);
    } else if (name === "name") {
      setUserName(value);
    } else if (name === "email") {
      setUserEmail(value);
    } else if (name === "phone") {
      const onlyNumber = value.replace(/[^0-9]/g, "");
      setUserPhone(onlyNumber);
    } else if (name === "secondAddress") {
      setUserSecondAddress(value);
    }
  };

  let userInfo = {
    name: name,
    email: email,
    id: id,
    pw: pw,
    phone: phone,
    address: finalAddress,
  };

  const register = (event) => {
    event.preventDefault();
    JSON.stringify(userInfo);

    if(id === "" || pw === "" || confirmPw === "" || name === "" || email === "" || phone === "" || firstAddress === "" ){
      alert("필수입력사항을 모두 입력해주세요");
      console.log("회원가입 사항 입력 에러");
    }else if(confirmPw != pw){
      alert("비밀번호란과 비밀번호확인란에 입력된 정보가 서로 다릅니다");
    }else if(secondAddress === ""){
      alert("나머지 주소를 입력해주세요");
    }else{
      axios
      .post(API_KEY, {
        name: name,
        email: email,
        id: id,
        pw: pw,
        phone: phone,
        address: finalAddress,
      })
      .then((response) => {
        console.log(response.data.result);
        alert("회원가입에 성공하셨습니다.");
        LoginNavigate("/member/login");

      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
    }
  };

  const confirmID = (event) => {
    event.preventDefault();
    axios.post(confirmID_url, {
      'id':id
    })
    .then(response => {
  
      if(response.data.exist === true){
        alert("중복된 ID가 존재합니다.");
        return false;
      }
      else{
        alert("사용가능한 ID입니다.");
        return true;
      }
      console.log(response.data.exist);
    })
    .catch(error => {
      console.log(error);
      console.log("실패");
    });

  };

  return (
    <div>
      <form
        className={styles.page}
        id="singupForm"
        style={{ flexDirection: "column", display: "flex", width: "200px" }}
        // onSubmit={onSubmit}
      >
        <div className={styles.signupTitle}>회원가입</div>
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
                    <input
                      className={styles.Input}
                      onChange={onChange}
                      value={id}
                      name="id"
                      type="text"
                      placeholder="아이디를 입력해주세요"
                    ></input>
                  </div>
                </div>
              </div>

              <div className={styles.repeatBox}>
                <button className={styles.repeatButton} onClick={confirmID}>
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
                    <input
                      className={styles.Input}
                      onChange={onChange}
                      value={pw}
                      name="pw"
                      type="password"
                      placeholder="비밀번호를 입력해주세요"
                    ></input>
                  </div>
                </div>
              </div>

              <div className={styles.repeatBox}></div>
            </div>

            <div className={styles.elementFlex}>
              <div className={styles.elementTitle}>
                <label className={styles.elementFont}>
                  비밀번호확인
                  <span className={styles.essentialInputEmo}>*</span>
                </label>
              </div>
              <div className={styles.Inputflex}>
                <div className={styles.Inputpadding}>
                  <div className={styles.Inputposition}>
                    <input
                      className={styles.Input}
                      onChange={onChange}
                      value={confirmPw}
                      name="confirmPw"
                      type="password"
                      placeholder="비밀번호를 한번 더 입력해주세요"
                    ></input>
                  </div>
                </div>
              </div>

              <div className={styles.repeatBox}></div>
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
                    <input
                      className={styles.Input}
                      onChange={onChange}
                      value={name}
                      name="name"
                      type="text"
                      placeholder="이름을 입력해 주세요"
                    ></input>
                  </div>
                </div>
              </div>

              <div className={styles.repeatBox}></div>
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
                    <input
                      className={styles.Input}
                      onChange={onChange}
                      value={email}
                      name="email"
                      type="text"
                      placeholder="예: marketkurly@kurly.com"
                    ></input>
                  </div>
                </div>
              </div>
              <div className={styles.repeatBox}></div>
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
                    <input
                      className={styles.Input}
                      onChange={onChange}
                      value={phone}
                      name="phone"
                      type="text"
                      maxLength="11"
                      placeholder="숫자만 입력해주세요"
                    ></input>
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
                    <div>
                      <div>
                        {firstAddress == null ? (
                          <button
                            className={styles.addressButton}
                            onClick={openPostCode}
                            type="button"
                          >
                            <span className={styles.addressSpan}>
                              <img
                                src="https://res.kurly.com/pc/service/cart/2007/ico_search.svg"
                                className={styles.addressImg}
                              ></img>
                              주소 검색
                            </span>
                            <div id="popupDom">
                              {isPopupOpen && (
                                <PopupDom>
                                  <PopupPostCode onClose={closePostCode} />
                                </PopupDom>
                              )}
                            </div>
                          </button>
                        ) : (
                          <div className={styles.Inputflex}>
                            <div className={styles.Inputpadding}>
                              <div className={styles.Inputposition}>
                                <input
                                  className={styles.Input}
                                  type="text"
                                  placeholder={firstAddress}
                                  readOnly
                                ></input>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* <div id='popupDom'>
                            {isPopupOpen && (
                                <PopupDom>
                                    <PopupPostCode onClose={closePostCode}/>
                                </PopupDom>
                            )}
                        </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.repeatBox}></div>
            </div>
          </div>

          <div className={styles.elementFlex}>
            <div className={styles.elementTitle}>
              <label className={styles.elementFont}></label>
            </div>

            <div className={styles.Inputflex}>
              <div className={styles.Inputpadding}>
                <div className={styles.Inputposition}>
                  <input
                    className={styles.Input}
                    placeholder="나머지 주소를 입력해주세요"
                    onChange={onChange}
                    value={secondAddress}
                    name="secondAddress"
                    type="text"
                  ></input>
                </div>
              </div>
            </div>

            <div className={styles.repeatBox}></div>
          </div>

          <div className={styles.signupDiv}>
            <button onClick={register}>가입하기</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SingupForm;
