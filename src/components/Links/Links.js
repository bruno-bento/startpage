import style from "./Links.module.scss";

const Links = (props) => {
  console.log(props.link);


  return (
    <div>
      <div className={style.cardHeader}>
        <h3>{props.title}</h3>
      </div>
      <div >
        <ul>
        {props.link.map(link => (
          <a key={link.title} href={link.url} alt={link.title} >{link.title}</a>
        ))}
        </ul>
      </div>
    </div>
  );
};

export default Links;
