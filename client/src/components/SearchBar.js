import { useState } from "react";

function SearchBar() {
  const [KeyWord, setKeyword] = useState("");
  const onChange = () => {
    return;
  };
  return (
    <div>
      <input
        type="text"
        id="keyword"
        value="KeyWord"
        placeholder="검색을 입력해주세요"
        onChange={onChange}
      ></input>
    </div>
  );
}

export default SearchBar;
