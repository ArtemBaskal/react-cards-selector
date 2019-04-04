import React from "react";

class SearchBar extends React.Component {
  render() {
    // console.log(this.searchInput);
    return (
      <div>
        <form>
          <div>
            <label>Search</label>
            <input
              type="text"
              // ref={input => {
              //   this.searchInput = input;
              // }}
              // onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
