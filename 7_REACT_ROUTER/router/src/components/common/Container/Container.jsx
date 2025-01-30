import PropTypes from "prop-types";
import "./Container.css";

const Container = ({ children, styleType }) => {
  return (
    <div className={`container-base ${styleType === 'none' ? 'no-style' : ''}`}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  styleType: PropTypes.string,
};

Container.defaultProps = {
  styleType: 'default',
};

export default Container;
