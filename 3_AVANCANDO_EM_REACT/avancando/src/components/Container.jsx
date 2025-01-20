import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <div>
      <h1>Conteúdo do componente pai</h1>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
