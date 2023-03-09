import { useState } from "react";
import SwiperItems from "./SwiperItems";
import itemList from "./ItemList";

function SearchBar() {
  let items = JSON.parse(localStorage.getItem("items"));

  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value)
  }

  const filterTitle = items.filter((p) => {
    return p.title.replace(" ","").toLocaleLowerCase().includes(search.toLocaleLowerCase().replace(" ",""))
})

// console.log(filterTitle);

  return (
    <div>
      <button
        type="text"
        id="search"
        value={search}
        placeholder="검색을 입력해주세요"
        onChange={onChange}/>
        {filterTitle.map((items) => {
          return <itemList items={items} />
        })}
    </div>
  );
}

export default SearchBar;
