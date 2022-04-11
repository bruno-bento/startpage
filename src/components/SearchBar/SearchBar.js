import "./SearchBar.css";
import { HiSearch } from "react-icons/hi";
const SearchBar = (props) => {
  return (
    <div className="divSearchBar">
      <HiSearch color="#38BDF8"/>
      <input type="text" placeholder="g/you-search-here" />
    </div>
  );
};
export default SearchBar;
