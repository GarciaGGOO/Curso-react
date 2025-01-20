import PropTypes from "prop-types";

const ShowUsername = (props) => {
  return (
    <div>
      <h2>O nome do usuário é: {props.name}</h2>
    </div>
  );
};

// Adicionando validação das props
ShowUsername.propTypes = {
  name: PropTypes.string.isRequired, // `name` deve ser uma string e é obrigatório
};

export default ShowUsername;
