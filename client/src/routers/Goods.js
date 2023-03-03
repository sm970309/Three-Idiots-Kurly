import Navigaion from "../components/Navigation";
import { useParams } from "react-router-dom";
import ItemDetailForm from "../components/ItemDetailForm";
const Goods = () => {
  const { no } = useParams();

  return (
    <div>
      <Navigaion />
      <ItemDetailForm no={no} />
    </div>
  );
};

export default Goods;
