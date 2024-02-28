import RouteComponent from "./components/routes/RouteComponent.jsx";
import NavBar from "./components/navBar/NavBar.jsx";

import "./App.css";

function App() {
  return (
    <div className="App gridCenter">
      <NavBar />

      <RouteComponent />
    </div>
  );
}

export default App;
