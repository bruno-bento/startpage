import "./MainContent.css";
import SearchBar from "../SearchBar/SearchBar";
import ContentLinks from "../Cards/CardMain/ContentLinks";

const MainContent = () => {
  return (
    <div className="main-content">
      <SearchBar />
      <ContentLinks/>
    </div>
  );
};

export default MainContent;
