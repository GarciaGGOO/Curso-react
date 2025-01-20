import { useState } from "react";

const ConditionalRender = () => {
  const [x, setX] = useState(true);

  const invertStatus = () => {
    setX((prevX) => !prevX);
  };

  const name = "Garcia";

  return (
    <div>
      {/* 7 - render condicional */}
      <h3>Isso será exibido?</h3>
      {x && <p>Se x for true sim!</p>}
      <button onClick={invertStatus}>Inverter</button>

      <h3>Render ternário</h3>
      {/* 8 - Else */}
      {name === "Jorge" ? (
        <div>
          <p>Olá Jorge</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado</p>
        </div>
      )}
    </div>
  );
};

export default ConditionalRender;
