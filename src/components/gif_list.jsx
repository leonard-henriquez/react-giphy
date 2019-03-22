import React, { Component } from 'react';

import Gif from './gif';

export default class GifList extends Component {
  constructor () {
    super();
    this.state = {

    };
  }

  renderList = () => {
    return (
      this.props.gifs.map(gif => <div><Gif id={gif.id} key={gif.id} /></div>)
    );
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}
