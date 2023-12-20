import PropTypes from "prop-types";
const SearchInput = ({ onSearch, activeKeyword }) => {
  const onChangeHandler = (e) => {
    onSearch(e.target.value);
  };
  return (
    <div className="w-full flex mx-auto justify-center">
      <input
        className="border-2 border-gray-300 rounded-lg min-w-[300px] w-[30%] h-11 px-2 bg-transparent"
        name="search"
        type="text"
        value={activeKeyword ? activeKeyword : ""}
        placeholder="search"
        onChange={onChangeHandler}
      />
    </div>
  );
};

SearchInput.propTypes = {
  onSearch: PropTypes.func.isRequired,
  activeKeyword: PropTypes.string,
};

export default SearchInput;
