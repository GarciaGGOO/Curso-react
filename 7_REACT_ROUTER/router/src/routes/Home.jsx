import React from "react";

// 6 - carregando de dados
import { useFetch } from "../hooks/useFetch";

// 7 - rota dinâmica
import { Link } from "react-router-dom"

const url = "http://localhost:3000/products";

const Home = () => {
  const { data: itens } = useFetch(url);

  return (
    <div className="container-test">
      <h1>Home</h1>
      <ul className="products">
        {Array.isArray(itens) ? (
          itens.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$: {item.price}</p>
               {/* 7 - rota dinâmica */}
               <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))
        ) : (
          <p>Nenhum item encontrado.</p>
        )}
      </ul>
    </div>
  );
};

export default Home;
