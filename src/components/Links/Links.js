import "./Links.css";

const Links = (props) => {
  console.log(props.link);


  return (
    <div className="card-links">
      <div className="card-header">
        <h3>{props.title}</h3>
      </div>
      <div className="card-body">
        <ul className="list-group">
        {props.link.map(link => (
          <a key={link.title} href={link.url} alt={link.title} className="list-group-item">{link.title}</a>
        ))}
        </ul>
      </div>
    </div>
  );
};

export default Links;
/*
        {props.link.map(link => (
          <a href={link.url} alt={link.title} className="list-group-item">))}
*/ 