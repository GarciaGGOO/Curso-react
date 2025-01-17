// 4 - Template expression

import React from "react";
import MyComponent from "./MyComponent";
const name = "Garcia";

const data = {
  age: 20,
  job: "Desenvolvedor",
};
const TemplateExpression = () => {
  return (
    <div>
      <p>A soma é {2 + 2}</p>
      <MyComponent />
      <h3>Bem vindo {name}</h3>
      <p>
        Sua idade é {data.age} anos e você é um {data.job}.
      </p>
    </div>
  );
};

export default TemplateExpression;
