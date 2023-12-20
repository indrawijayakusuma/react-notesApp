import PropTypes from "prop-types";
const Card = ({ children }) => {
  return (
    <div className="border-2 rounded-md p-5 max-w-sm shadow-lg transform transition hover:scale-105">
      {children}
    </div>
  );
};

const Title = ({ children }) => {
  return (
    <h2 className="text-2xl font-bold underline line-clamp-1">{children}</h2>
  );
};

const SubTitle = ({ children }) => {
  return <p>{children}</p>;
};

const Body = ({ children }) => {
  return (
    <div className="mt-2">
      <p className="line-clamp-3">{children}</p>
    </div>
  );
};

const Footer = ({ children }) => {
  return <div className="mt-3 flex gap-2">{children}</div>;
};

Card.Title = Title;
Card.SubTitle = SubTitle;
Card.Body = Body;
Card.Footer = Footer;

Card.propTypes = {
  children: PropTypes.node,
};

Title.propTypes = {
  children: PropTypes.node,
};

SubTitle.propTypes = {
  children: PropTypes.node,
};

Body.propTypes = {
  children: PropTypes.node,
};
Footer.propTypes = {
  children: PropTypes.node,
};

export default Card;
