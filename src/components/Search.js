import React, { Component } from 'react';
import '../style/Search.css';


class Search extends Component {
  render() {
    return (
      <div className="form">
      <form className="searchform cf">
        <input type="text" placeholder="Search Github Users" />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
