import { useState, useEffect } from "react";

// 4 - Custom hook
export const useFetch = (url) => {
  const [data, setData] = useState({ products: [] });

  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(null);

  // 6 - Loading
  const [loading, setLoading] = useState(false);

  // 7 - erros
  const [error, setError] = useState(null);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      setMethod(method);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
    // 7 - Tratamento de erros
   try {
      // 6 - loading
      setLoading(true);

      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);

        setData({ products: [] });
      }
    } catch (error) {
      console.log(error.message)

      setError("Houve algum erro ao carregar os dados")
    } finally {
      setLoading(false);
    }
  };

    fetchData();
  }, [url, callFetch]);

  // 5 - Refatorando Post
  useEffect(() => {
    const httpRequest = async () => {
      let json;

      if (method === "POST") {
        setLoading(true);
        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);

        json = await res.json();
        setLoading(false);
      }

      setCallFetch(json);
    };

    httpRequest();
  }, [config, method, url]);

  return { data, httpConfig, loading, error };
};
