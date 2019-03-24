import React from 'react';
import { connect } from 'react-redux';

import SearchBar from './search_bar';
import Gif from '../components/gif';
import GifList from './gif_list';

const App = ({ gifs }) => {
  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <div className="selected-gif">
          {/* <Gif id={gifs[0]} /> */}
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
    gifs: state.gif
  };
}

export default connect(mapStateToProps, null)(App);
