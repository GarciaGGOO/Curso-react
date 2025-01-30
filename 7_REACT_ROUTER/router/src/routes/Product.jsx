import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
  const { id } = useParams();
  const url = "http://localhost:3000/products/" + id;
  const { data: product, loading, error } = useFetch(url);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  // Verifica se 'product' é válido antes de acessar suas propriedades
  if (!product) {
    return <p>Produto não encontrado</p>;
  }

  return (
    <div className="container-test">
      <p>ID do produto: {id}</p>
      <div>
        <h3>{product.name}</h3>
        <p>R$: {product.price}</p>

         {/* 8 - nested route */}
        <Link to={`/products/${id}/info`}>Mais informações</Link>
      </div>
    </div>
  );
};

export default Product;
