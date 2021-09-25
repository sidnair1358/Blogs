import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content"></div>
      <Home />
    </div>
  );
}

export default App;
