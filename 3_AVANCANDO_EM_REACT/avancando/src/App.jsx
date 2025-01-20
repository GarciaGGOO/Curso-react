import { useState } from "react";
import "./App.css";

// 2 - imagem em assets
import night from "./assets/night.jpg";

// 3 - UseState
import Data from "./components/Data";

// 4 - Lista de renderização
import ListRender from "./components/ListRender";

// 7 - Render condicional
import ConditionalRender from "./components/ConditionalRender";

// 8 - Props
import ShowUsername from "./components/ShowUsername";

// 9 - Desestruturando props
import CarDetails from "./components/CarDetails";

const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  { id: 2, brand: "KIA", color: "Branco", km: 200000 },
  { id: 3, brand: "Renault", color: "Azul", km: 32000 },
];

// 12 - Fragments
import FragmentEx from "./components/FragmentEx";

// 13 - Children
import Container from "./components/Container";

// 14 - funcao em prop
import ExecuteFunction from "./components/ExecuteFunction";

// 15 - State lift
import Message from "./components/Message";
import ChangeMessage from "./components/ChangeMessage";

function App() {
  // 14 - funcao em prop
  function showMessage() {
    console.log("Evento do componente pai");
  }

  // 15 - State lift
  const [message, setMessage] = useState("");
  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <>
      <div className="App" style={{ paddingBottom: "500px" }}>
        <h1>Avançando em React</h1>
        {/* 1 - imagem em public */}
        <img src="/img.jpg" alt="Alguma imagem" />

        {/* 2 - imagem em assets */}
        <img src={night} alt="Outra imagem" />

        {/* 3 - UseState */}
        <Data />

        {/* 4 - Lista de renderização */}
        <ListRender />

        {/* 7 - Render condicional */}
        <ConditionalRender />

        {/* 8 - Props */}
        <ShowUsername name="Garcia" />

        {/* 9 - Desestruturando props */}
        <CarDetails brand="VW" km={999} color="Vermelho" />

        {/* 10 - Reaproveitamento de componentes */}
        <CarDetails km={12999} brand="Audi" color="Preto" />
        <CarDetails color="Azul" brand="Fiat" km={2999} />

        {/* 11 - Renderização de lista com componente */}
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            brand={car.brand}
            color={car.color}
            km={car.km}
          />
        ))}
        {/* 12 - Fragments */}
        <FragmentEx />

        {/* 13- Children */}
        <Container>
          <p>Alguma coisa</p>
        </Container>

        {/* 14 - Funcao em prop */}
        <ExecuteFunction myFunction={showMessage} />

        {/* 15 - State lift */}
        <Message msg={message}/>
        <ChangeMessage handleMessage={handleMessage}/>
      </div>
    </>
  );
}

export default App;
