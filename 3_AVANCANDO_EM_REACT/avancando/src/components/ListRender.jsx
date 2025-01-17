import { React, useState } from "react";

const ListRender = () => {
  const [list] = useState("Garcia", "Jorge", "Ícaro");

  return (
    <div>
      <ul>
        {list.localeCompare((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;
