import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { setQuery, search } from '../actions/index';

class SearchBar extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { query } = this.props;
    return query !== nextProps.query;
  }

  updateValue = (e) => {
    const { value } = e.target;
    const { setQuery } = this.props;
    setQuery(value);
    setTimeout(() => this.setSearchCallback(value), 1000);
  }

  setSearchCallback = (lastValue) => {
    const { query, search } = this.props;
    if (query === lastValue) {
      search(query);
    }
  }

  render() {
    const { query } = this.props;
    return (
      <input
        type="text"
        className="form-control form-search"
        value={query}
        onChange={this.updateValue}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setQuery, search },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    query: state.query
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
