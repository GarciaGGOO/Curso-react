import { useState } from "react";
import "./App.css";

// 2 - imagem em assets
import night from './assets/night.jpg'

// 3 - UseState
import Data from "./components/Data";

// 4 - Lista de renderização
import ListRender from "./components/ListRender";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App" style={{paddingBottom: "500px"}}>
        <h1>Avançando em React</h1>
        {/* 1 - imagem em public */}
        <img src="/img.jpg" alt="Alguma imagem" />

        {/* 2 - imagem em assets */}
        <img src={night} alt="Outra imagem" />

        {/* 3 - UseState */}
        <Data />

        {/* 4 - Lista de renderização */}
        <ListRender />
      </div>
    </>
  );
}

export default App;
