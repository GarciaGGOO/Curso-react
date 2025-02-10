import ChangeCounter from "../components/common/ChangeCounter";
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
  const { count } = useCounterContext();
  const { color, dispatch } = useTitleColorContext();

  // Função para alterar a cor do título
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div className="container-test">
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador: {count}</p>
      <ChangeCounter />

      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  );
};

export default Home;
