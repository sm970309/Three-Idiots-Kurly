import { useState } from "react";

function SearchBar() {
  const [keyword, setKeyWord] = useState("");
  const onChange = (event) => {
    setKeyWord(event.target.value);
    console.log(keyword);
  };
  return (
      <input
        type="text"
        id="keyword"
        value={keyword}
        placeholder="검색어를 입력해주세요"
        onChange={onChange}
      ></input>
  );
}

export default SearchBar;
