import { useCounterContext } from "../hooks/useCounterContext";

import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Contact = () => {
const {count} = useCounterContext();
const {color} = useTitleColorContext();
  return (
    <div className="container-test">
      <h1 style={{color: color}}>Página de contados</h1>
      <p>Valor do contador: {count}</p>
    </div>
  );
};

export default Contact;
