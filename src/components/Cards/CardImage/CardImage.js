import style from "./CardImage.module.scss";
import personalPicture from "../../../resource/personalPicture.png";
const CardImage = (props) => {
  return (
    <div className={`card ${style.image}`}>
      <img src={personalPicture} alt="personalImg" />
    </div>
  );
};

export default CardImage;
