import React from 'react';
import { connect } from 'react-redux';

import SearchBar from './search_bar';
import Gif from '../components/gif';
import GifList from './gif_list';

const App = ({ gifs }) => {
  const id = (gifs && gifs.length) ? gifs[0].id : null;
  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <div className="selected-gif">
          <Gif id={id} />
        </div>
      </div>
      <div className="right-scene">
        <GifList className="gif-list" />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    gifs: state.gifs
  };
}

export default connect(mapStateToProps, null)(App);
