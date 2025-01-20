import PropTypes from 'prop-types';

const ExecuteFunction = ({ myFunction }) => {
  return (
    <div><button onClick={myFunction}>Clique em mim</button></div>
  )
}

ExecuteFunction.propTypes = {
  myFunction: PropTypes.func,
};

export default ExecuteFunction