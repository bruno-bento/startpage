import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const SearchBar = (props) => {
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleClick = () => {
    if(content.length <= 0) return;
    
    if(content.split("/")[0].toUpperCase() === "G"){
      window.open(
        `https://www.google.com/search?q=${content.split("/")[1]}`,
        "_blank"
      );
    }

    else if(content.split("/")[0].toUpperCase() === "DG"){
      window.open(
        `https://duckduckgo.com/?q=${content.split("/")[1]}`,
        "_blank"
      );
    }
    setContent("");
  };

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      handleClick();
    };
  };

  return (
    <div className="card div-search-bar">
      <button className="btn-search-bar" onClick={handleClick}>
        <FaSearch className="icons"/>
      </button>
      <input autoFocus className="input-search-bar" type="text" placeholder="g/you-search-here" value={content} onChange={handleChange} onKeyDown={handleKeyDown}/>
    </div>
  );
};

export default SearchBar;
