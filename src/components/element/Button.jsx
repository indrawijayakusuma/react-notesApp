import PropTypes from "prop-types";
const Button = ({ children, type, clickHandler = () => {}, id }) => {
  if (!type) {
    return (
      <button
        type="submit"
        className="border-2 border-gray-300 rounded-lg px-3 py-2 hover:bg-gray-300"
        onClick={() => clickHandler(id)}
      >
        {children}
      </button>
    );
  }

  return (
    <div>
      {type === "danger" && (
        <button
          type="submit"
          className="border-2 border-red-300 rounded-lg px-3 py-2 hover:bg-red-300"
          onClick={() => clickHandler(id)}
        >
          {children}
        </button>
      )}
      {type === "warning" && (
        <button
          type="submit"
          className="border-2 border-yellow-300 rounded-lg px-3 py-2 hover:bg-yellow-300"
          onClick={() => clickHandler(id)}
        >
          {children}
        </button>
      )}
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["danger", "warning"]),
  clickHandler: PropTypes.func,
  id: PropTypes.string,
};

export default Button;
