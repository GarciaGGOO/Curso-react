
import PropTypes from "prop-types";

const Message = ({ msg }) => {
  return (
    <div>
      <p>A mensagem é: {msg}</p>
    </div>
  );
};

Message.propTypes = {
  msg: PropTypes.string,
};

export default Message;
