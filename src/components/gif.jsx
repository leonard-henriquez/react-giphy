import React, { Component } from 'react';

export default class Gif extends Component {
  constructor() {
    super();

    this.state = {
    };
  }

  render() {
    const src = `https://media1.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" />
    );
  }
}
