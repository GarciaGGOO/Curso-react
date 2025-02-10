import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CounterContext = createContext();

export const CounterContextProvider = ({ children }) => {
  const [count, setCount] = useState(5);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <CounterContext.Provider value={{ count, setCount, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

CounterContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CounterContextProvider;
