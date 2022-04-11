import "./App.css";
import CardImage from "./components/CardImage/CardImage";
import MainContent from "./components/MainContent/MainContent";
import AdditionalCards from "./components/AdditionalCards/AddtionalCards";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Olá, Bruno</h1>
      </header>

      <div className="cards">
        <CardImage/>
        <MainContent/>
        <AdditionalCards/>
      </div>
    </div>
  );
}

export default App;
