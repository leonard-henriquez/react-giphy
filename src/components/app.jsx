import React, { Component } from 'react';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const apiKey = 'a1jdCI70Xmry4SqQHJHuRccAFQT2cj67';

export default class App extends Component {
  constructor () {
    super();

    this.state = {
      gifs: [],
      selectedGifId: null,
    };
  }

  search = (query) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=25&offset=0&rating=G&lang=en`
    fetch(url)
      .then(res => res.json())
      .then(res => this.setState({ gifs: res.data }));
  }

  select = (id) => {
    this.setState({ selectedGifId: id });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList className="gif-list" gifs={this.state.gifs} select={this.props.select} />
        </div>
      </div>
    );
  }
}
