import React from 'react';
import {
  FormControl
} from 'react-bootstrap';

class SearchBar extends React.Component {
  onChangeHandler() {
    let query = this.refs.query.value.trim();
    this.props.searchHandler(query);
  }
  render() {
    return (
      <div className="container">
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filter_text}
          ref="query"
          onChange={this.onChangeHandler.bind(this)}
          className="form-control"
        />
      </div>
    );
  }
}

export default SearchBar;
