// const [id, setID] = useState("");
// const [pw, setPw] = useState("");

// const [idValid, setIDValid] = useState(false);
// const [pwValid, setPwValid] = useState(false);

// useEffect(() => {
//   if (idValid && pwValid) {
//     setNotAllow(false);
//     return;
//   }
//   setNotAllow(true);
// }, [idValid, pwValid]);

// const handleID = (e) => {
//   setID(e.target.value);
//   const regex =
//     /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
//   if (regex.test(e.target.value)) {
//     setIDValid(true);
//   } else {
//     setIDValid(false);
//   }
// };
// const handlePw = (e) => {
//   setPw(e.target.value);
//   const regex =
//     /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
//   if (regex.test(e.target.value)) {
//     setPwValid(true);
//   } else {
//     setPwValid(false);
//   }
// };
// const onClickConfirmButton = () => {
//   if (id === User.id && pw === User.pw) {
//     alert("로그인에 성공했습니다.");
//   } else {
//     alert("아이디 또는 비밀번호를 입력해주세요.");
//   }
// };

// let navigate = useNavigate();
// const onClickSignupButton = (event) => {
//   const changePage = event.target.id;
//   navigate("/" + changePage);
// };

// return (
//   <div className={styles.loginFormDiv}>
//     <div className={styles.titleWrap}>로그인</div>

//     <div className={styles.contentWrap}>
//       <div className={styles.inputTitle}></div>
//       <div className={styles.inputWrap}>
//         <input
//           className={styles.input}
//           type="text"
//           placeholder="아이디를 입력해주세요"
//           value={id}
//           onChange={handleID}
//         />
//       </div>
//       <div style={{ marginTop: "10px" }} className={styles.inputTitle}></div>
//       <div className={styles.inputWrap}>
//         <input
//           className={styles.input}
//           type="password"
//           placeholder="비밀번호를 입력해주세요"
//           value={pw}
//           onChange={handlePw}
//         />
//       </div>
//     </div>

//     <div>
//       <button onClick={onClickConfirmButton} className={styles.loginbutton}>
//         로그인
//       </button>
//     </div>
//     <div>
//       <button
//         onClick={onClickSignupButton}
//         id="member/signup"
//         className={styles.signupbutton}
//       >
//         회원가입
//       </button>
//     </div>
//   </div>
// );
