import { useState, useEffect } from "react";

// 4 - Custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null);

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
      try {
        setLoading(true);

        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Erro ao buscar dados");
        }

        const json = await res.json();
        setData(Array.isArray(json) ? json : json.products || []);
        setError(null); // Limpa erros anteriores
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        setData([]); // Garante que data seja um array
        setError("Erro ao carregar os dados");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

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
