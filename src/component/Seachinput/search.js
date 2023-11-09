import "./search.css";
import searchicon from "./Icon.png";

const Searchboxcomponent = ({ placeholder, onChange }) => {
  return (
    <div className="search-container">
      <div>
        <img src={searchicon} width="16px" height="16px"></img>
      </div>
      <input
        className="search-input"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Searchboxcomponent;
