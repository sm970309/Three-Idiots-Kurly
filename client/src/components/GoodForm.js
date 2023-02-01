import axios from "axios";
import React, { useEffect, useState } from "react";

const API_KEY = "http://localhost:8000/items";

const GoodForm = () => {
  const [goods, setGoods] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchgoods = async () => {
      try {
        setError(null);
        setGoods(null);
        setLoading(true);
        const response = await axios.get(API_KEY);
        setGoods(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchgoods();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!goods) return null;

  const paintGoods = (itemno) => {
    const itemNo = itemno;
    return (
      <form>
        <div>
          <img src={goods[itemNo].img} width="249px" height="320px" />
          <h3 size="12px">{goods[itemNo].name}</h3>
          <span>{goods[itemNo].price}원</span>
        </div>
      </form>
    );
  };

  return (
    <div>
      {paintGoods(0)}
      {paintGoods(1)}
      {paintGoods(3)}
      {paintGoods(4)}
    </div>
  );
};
export default GoodForm;
