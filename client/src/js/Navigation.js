import { useNavigate } from "react-router-dom";

const Navigation = () => {
  let navigate = useNavigate();
  const onClick = (event) => {
    const changePage = event.target.id;
    navigate("/" + changePage);
  };

  return (
    <div>
      <span onClick={onClick} id="market">
        마켓컬리
      </span>
      <span onClick={onClick} id="beauty">
        뷰티컬리
      </span>
    </div>
  );
};

export default Navigation;
