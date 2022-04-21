import Forecast from "./components/Forecast";
import "./App.css";

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1 className="header">Прогноз на 5 дней</h1>
      </header>
      <Forecast />
    </div>
    </>
  );
}

export default App;
