import "./search.scss";
// import searchicon from "./Icon.png";
import {images} from '../../utils/images';

const Searchboxcomponent = ({ placeholder, onChange }) => {
  return (
    <div className="search-container">
      <div>
        <img src={images.search_ic} width="16px" height="16px"></img>
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
