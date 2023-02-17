import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PopupDom from '../components/PopupDom';
import PopupPostCode from '../components/PopupPostCode';
import styles from "../css/Signup.module.css";

const SingupForm = () => {
  const [id, setUserId] = useState("");
  const [pw, setPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [name, setUserName] = useState("");
  const [email, setUserEmail] = useState("");
  const [phone, setUserPhone] = useState("");
  const [address, setUserAddress] = useState(''); // 주소
  const [addressDetail, setAddressDetail] = useState(''); // 상세주소
  
  // 팝업창 상태 관리
  const [isPopupOpen, setIsPopupOpen] = useState(false)
 
	// 팝업창 열기
  const openPostCode = () => {
      setIsPopupOpen(true)
  }
 
	// 팝업창 닫기
  const closePostCode = () => {
      setIsPopupOpen(false)
  }

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
      const onlyNumber = value.replace(/[^0-9]/g, '')
      setUserPhone(onlyNumber);
    } else if (name == "address"){
      const temp = "서울시 양천구";
      setUserAddress(temp);
    }
    // else if (name === "sex") {
    //   setSex(value);
    // }
  };

  let userInfo = {
    'name' : name,
    'email': email,
    'id':id,
    'pw':pw,
    'phone':phone,
    'address':address,
  };

  const register = (event) => {
    event.preventDefault();
    JSON.stringify(userInfo);
    axios.post('http://localhost:8000/signup', {
    'name': name,
    'email': email,
    'id':id,
    'pw':pw,
    'phone':phone,
    'address':address,
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error.response);
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
                    value={id}
                    name="id"
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
                    type="password"
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
                    type="password"
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
                    value={name}
                    name="name"
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
                    value={email}
                    name="addressdetail"
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
                    value={phone}
                    name="phone"
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
                    <button className={styles.addressButton}
                    onChange={onChange}
                    onClick={openPostCode}
                    value={address}
                    name="address"
                    type="button">
                      <span className={styles.addressSpan}>
                        <img src="https://res.kurly.com/pc/service/cart/2007/ico_search.svg" className={styles.addressImg}></img>
                        주소 검색
                      </span>
                    </button>
                    <div id='popupDom'>
                        {isPopupOpen && (
                            <PopupDom>
                                <PopupPostCode onClose={closePostCode} address={address}/>
                            </PopupDom>
                        )}
                    </div>
                    <span className={styles.addressNotice}>
                      배송지에 따라 상품 정보가 달라질 수 있습니다.
                    </span>
                  </div>
                </div>
              </div>
                <div className={styles.repeatBox}>
            
                </div>
            </div>
          </div>

          <div className={styles.elementFlex}>
              <div className={styles.elementTitle}>
                <label className={styles.elementFont}>
                 
                </label>
              </div>
              <div className={styles.Inputflex}>
                <div className={styles.Inputpadding}>
                  <div className={styles.Inputposition}>
                    <input className={styles.Input}
                    type="text">
                      
                    </input>
                  </div>
                </div>
              </div>

              <div className={styles.repeatBox}>
              
              </div>
            </div>

          
          <div className={styles.signupDiv}>
              <button onClick={() => {register()}}>가입하기</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SingupForm;
