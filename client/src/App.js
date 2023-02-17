import AppRouter from "./components/AppRouter";
import axios from "axios";
import React, { useEffect, useState } from "react";
const API_KEY = "http://localhost:8000/items";

function App() {
  let [items, setItems] = useState(null);
  let [address, setAddress] = useState(null);

  localStorage.setItem("items", JSON.stringify(items));
  localStorage.setItem("address", JSON.stringify(address));
  
  const getItems = async () => {
    try {
      const response = await axios.get(API_KEY);
      setItems(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <AppRouter />
    </div>
  );
}
export default App;
