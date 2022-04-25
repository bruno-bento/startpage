import "./App.scss";
import CardImage from "./components/Cards/CardImage/CardImage";
import MainContent from "./components/MainContent/MainContent";
import DataWeather from "./components/DataWeather/DataWeather";
import { FaCog } from "react-icons/fa";
function App() {
  return (
    <div>
      <nav>
        <button className="btn">
          <FaCog className="icons" />
        </button>
      </nav>

      <div className="App">
        <div>
          <header className="App-header">
            <h1>Olá, Bruno</h1>
          </header>
          <div className="cards">
            <CardImage />
            <MainContent />
            <DataWeather />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
