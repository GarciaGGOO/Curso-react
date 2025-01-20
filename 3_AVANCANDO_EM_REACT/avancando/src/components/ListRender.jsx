import { useState } from "react";

const ListRender = () => {
  // Inicializa o estado com um array useState([])
  const [list] = useState(["Garcia", "Jorge", "Ícaro"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Jorge", age: 27 },
    { id: 2, name: "Garcia", age: 20 },
    { id: 3, name: "João", age: 21 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) =>
      prevUsers.filter((user) => randomNumber !== user.id)
    );
  };

  return (
    <div>
      <ul>
        {/* 4 - render sem key, forma não recomendada */}
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        {/* 5 - render com key use sempre uma chave unica */}
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} anos
          </li>
        ))}
      </ul>
      {/* 6 - Previous state */}
          <button onClick={deleteRandom}>Delete aleatório</button>
    </div>
  );
};

export default ListRender;
