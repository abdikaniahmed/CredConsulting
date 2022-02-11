import "./styles.css";
// import Header from "./Components/header";
import NavApp from "./Components/navApp";
import Home from "./Components/home";

export default function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <NavApp />
      <Home />
    </div>
  );
}
