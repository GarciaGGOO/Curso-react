import { useParams } from "react-router-dom";

const Info = () => {
  const { id } = useParams();
  return (
    <div className="container-test">
      <h1>Mais informações do produto de id {id}</h1>
    </div>
  );
};

export default Info;
