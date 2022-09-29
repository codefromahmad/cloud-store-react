import About from "./components/About";
import AllInOne from "./components/AllInOne";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Support from "./components/Support";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Support />
      <AllInOne />
    </div>
  );
}

export default App;
