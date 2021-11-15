import "./App.css";

import Card from "./components/Developer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card name="Rômulo Gurgel" age=" 28 anos" country=" Brasil" />
        <Card name="Théo Leonardo" age=" 8 anos" country=" Brasil" />
        <Card name="Flash The Husky" age=" 2 anos" country=" Sibéria" />
      </header>
    </div>
  );
}
export default App;
