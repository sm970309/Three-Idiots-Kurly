import Navigaion from "../components/Navigation";
import { useParams } from "react-router-dom";
const Goods = () => {
  const { id } = useParams();

  return (
    <div>
      <Navigaion />
      <h1>no:{id} 상세페이지</h1>
    </div>
  );
};

export default Goods;
