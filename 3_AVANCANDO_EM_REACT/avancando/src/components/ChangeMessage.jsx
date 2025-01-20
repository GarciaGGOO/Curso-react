import React from "react";
import PropTypes from "prop-types";

const ChangeMessage = ({ handleMessage }) => {
  const messages = ["Oi", "Olá", "Tudo bem?"];

  return (
    <div>
      <button onClick={() => handleMessage(messages[0])}>1</button>
      <button onClick={() => handleMessage(messages[1])}>2</button>
      <button onClick={() => handleMessage(messages[2])}>3</button>
    </div>
  );
};

ChangeMessage.propTypes = {
  handleMessage: PropTypes.func.isRequired, // `handleMessage` deve ser uma função e é obrigatório
};

export default ChangeMessage;
