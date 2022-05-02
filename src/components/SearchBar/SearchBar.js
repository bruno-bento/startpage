import style from "./SearchBar.module.scss";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const SearchBar = (props) => {
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleClick = () => {
    if(content.length <= 0) return;
    
    
    if(content.split("/")[0].toUpperCase() === "DG"){
      window.open(
        `https://duckduckgo.com/?q=${content.split("/")[1]}`, "_parent"
        );
    }

    else{
      window.open(
        `https://www.google.com/search?q=${content}`, "_parent"
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
    <div className={`card ${style.search}`}>
      <button className={style.searchbutton} onClick={handleClick}>
        <FaSearch className={style.icons}/>
      </button>
      <input autoFocus className={style.inputSearch} type="text" placeholder="g/you-search-here" value={content} onChange={handleChange} onKeyDown={handleKeyDown}/>
    </div>
  );
};

export default SearchBar;
