import Navigation from "../components/Navigation";
import SearchForm from "../components/SearchForm";
import { useParams } from "react-router-dom";

const Search = () => {
  const { keyword } = useParams();

  return (
    <div>
      <Navigation />
      <SearchForm keyword={keyword} />
    </div>
  );
};
export default Search;
