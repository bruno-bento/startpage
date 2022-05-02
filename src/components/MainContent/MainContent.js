import style from "./MainContent.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import ContentLinks from "../Cards/CardMain/ContentLinks";

const MainContent = () => {
  return (
    <div className={style.mainContent}>
      <SearchBar />
      <ContentLinks/>
    </div>
  );
};

export default MainContent;
