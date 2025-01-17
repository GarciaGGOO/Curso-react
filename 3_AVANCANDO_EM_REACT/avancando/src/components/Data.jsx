import { React, useState } from "react";

const Data = () => {
  let someData = 10;
  const [num, SetNum] = useState(0);

  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
        {/* Assim o componente não é renderizado*/}
        <button onClick={() => someData++}>+</button>
      </div>
      <div>
        <p>Valor: {num}</p>
        <button onClick={() => SetNum(num + 1)}>+</button>
        <button onClick={() => SetNum(num - 1)}>+</button>
      </div>
    </div>
  );
};

export default Data;
