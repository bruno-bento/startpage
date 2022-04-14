import "./SearchBar.css";
import { HiSearch } from "react-icons/hi";
const SearchBar = (props) => {
  return (
    <div className="card div-search-bar">
      <button className="btn-search-bar">
        <HiSearch color="#38BDF8"/>
      </button>
      <input className="input-search-bar" type="text" placeholder="g/you-search-here" />
    </div>
  );
};
export default SearchBar;
