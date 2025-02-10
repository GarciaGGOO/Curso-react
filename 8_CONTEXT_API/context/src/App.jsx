import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Context Api</h1>
      <Outlet />
    </div>
  );
}

export default App;
