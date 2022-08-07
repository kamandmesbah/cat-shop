import "./search-box.styles.css";

const SearchBox = (props) => (
  <input
    type="search"
    className={`search-box {this.props.className}`}
    placeholder={props.placeHolder}
    onChange={props.onChangeHandler}
  />
);

export default SearchBox;
