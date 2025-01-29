import { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch";

import "./App.css";

const url = "http://localhost:3000/products";

function App() {
  // 1 - resgatando dados
  const [products, setProducts] = useState([]);

  // 4 - Custom Hook
  const { data: items, httpConfig, loading, error } = useFetch(url);

  //useEffect(() => {
  //  async function fetchData() {
  //    const res = await fetch(url);
  //    const data = await res.json();]

  //    setProducts(data);
  //  }

  //  fetchData();
  //}, []);

  // 2 - enviando dados
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(product),
    // });

    // // 3  - carregamento dinâmico
    // const addedProduct = await res.json();

    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    // 5 - refatorando post
    httpConfig(product, "POST");
  };

  return (
    <div className="app">
      <h1>Lista de produtos</h1>
      {/* 6 - loading */}
      {loading && <p>Carregando dados...</p>}
       {/* 7 - tratando erro */}
       { error && <p>{error}</p> }
      {/* 1 - resgatando dados */}
      <ul>
        {items && items.length > 0 ? (
          items.map((product) => (
            <li key={product.id}>
              {product.name} - R$: {product.price}
            </li>
          ))
        ) : (
          <p>Carregando produtos...</p>
        )}
      </ul>
      {/* 2 - enviando dados */}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite aqui..."
              required
            />
          </label>
          <label>
            <span>Preço</span>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Digite aqui..."
              required
            />

            {loading && <input type="submit" disabled value="Enviar" />}
            {!loading && <input type="submit" value="Enviar" />}
          </label>
        </form>
      </div>
    </div>
  );
}

export default App;
