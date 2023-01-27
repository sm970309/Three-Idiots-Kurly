import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  const onClick = (event) => {
    const changePage = event.target.id;

    navigate("/" + changePage);
  };

  return (
    <div>
      <h1>세얼간이 포트폴리오</h1>
      <span onClick={onClick} id="market">
        1.세얼간이 마켓컬리
      </span>
    </div>
  );
};

export default Home;
