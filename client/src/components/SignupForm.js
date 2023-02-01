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
      setUserPhone(value);
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
        <div>
          <label>아이디</label>
          <input
            onChange={onChange}
            value={userid}
            name="userid"
            type="text"
            placeholder="아이디를 입력해주세요"
          ></input>
        </div>

        <div>
          <label>비밀번호</label>
          <input
            onChange={onChange}
            value={pw}
            name="pw"
            type="password"
            placeholder="비밀번호를 입력해주세요"
          ></input>
        </div>
        <div>
          <label>비밀번호확인</label>
          <input
            onChange={onChange}
            value={confirmPw}
            name="confirmPw"
            type="password"
            placeholder="비밀번호를 한번 더 입력해주세요"
          ></input>
        </div>
        <div>
          <label>이름</label>
          <input
            onChange={onChange}
            value={username}
            name="username"
            type="text"
            placeholder="이름을 입력해 주세요"
          ></input>
        </div>

        <div>
          <label>이메일</label>
          <input
            onChange={onChange}
            value={useremail}
            name="useremail"
            type="text"
            placeholder="예: marketkurly@kurly.com"
          ></input>
        </div>

        <div>
          <label>휴대폰</label>
          <input
            onChange={onChange}
            value={userphone}
            name="userphone"
            type="text"
            placeholder="예: marketkurly@kurly.com"
          ></input>
        </div>

        <div>
          <label>주소 어캐만듬?</label>
        </div>

        <input type="submit" value="회원가입" />
      </form>
    </div>
  );
};

export default SingupForm;
