import "./CardImage.css";
import personalPicture from "../../../resource/personalPicture.png";
const CardImage = (props) => {
  return (
    <div className="card card-image">
      <img src={personalPicture} alt="personalImg" />
    </div>
  );
};

export default CardImage;