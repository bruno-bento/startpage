import "./SearchBar.css";
import { HiSearch } from "react-icons/hi";
import { useState } from "react";

const SearchBar = (props) => {
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleClick = () => {
    if(content.length <= 0) return;
    
    if(content.split("/")[0] === "g"){
      window.open(
        `https://www.google.com/search?q=${content}`,
        "_blank"
      );
    }
    else if(content.split("/")[0] === "dg"){
      window.open(
        `https://duckduckgo.com/?q=${content}`,
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
        <HiSearch color="#38BDF8"/>
      </button>
      <input className="input-search-bar" type="text" placeholder="g/you-search-here" value={content} onChange={handleChange} onKeyDown={handleKeyDown}/>
    </div>
  );
};

export default SearchBar;
