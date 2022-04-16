import "./Links.css";

const Links = (props) => {
  return (
    <div className="card-links">
      <div className="card-header">
        <h3>d/Dev</h3>
      </div>
      <div className="card-body">
        <ul className="list-group">
          <a href="https://github.com/bruno-bento" alt="link" className="list-group-item"> GitHub</a>
          <a href="https://stackoverflow.com/" alt="link" className="list-group-item"> StackOverflow</a>
          <a href="https://www.figma.com/files/" alt="link" className="list-group-item"> Figma</a>
          <a href="https://codepen.io/" alt="link" className="list-group-item"> CodePen</a>
          <a href="https://coolors.co/" alt="link" className="list-group-item"> Coolors</a>
          <a href="https://pt-br.reactjs.org/docs/getting-started.html" alt="link" className="list-group-item"> ReactJS</a>
          <a href="https://developer.mozilla.org/pt-BR/" alt="link" className="list-group-item"> MDN</a>
        </ul>
      </div>
    </div>
  );
};

export default Links;
