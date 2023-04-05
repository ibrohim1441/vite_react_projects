import "./App.css";
import Header from "./Components/home/header/Header";
import Home from "./Components/home/homePart/Home";
import "../src/General/general.scss";
import General from "./General/General";
function App() {
  return (
    <div className="App">
      <div className="container">
        <General />
      </div>
    </div>
  );
}

export default App;