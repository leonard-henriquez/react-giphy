import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { value } = this.state;
    return value !== nextState.value;
  }

  updateValue = (e) => {
    const { value } = e.target;
    this.setState({ value });
    setTimeout(() => this.setSearchCallback(value), 1000);
  }

  setSearchCallback = (lastValue) => {
    const { value } = this.state;
    const { search } = this.props;
    if (value === lastValue) {
      search(value);
    }
  }

  render() {
    const { value } = this.state;
    return (
      <input
        type="text"
        className="form-control form-search"
        value={value}
        onChange={this.updateValue}
      />
    );
  }
}
