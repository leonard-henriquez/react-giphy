import React from 'react';
import { connect } from 'react-redux';

import Gif from '../components/gif';

const GifList = ({ gifs }) => {
  if (!gifs || !gifs.length) {
    return (
      <div className="gif-list" />
    );
  }
  return (
    <div className="gif-list">
      { gifs.map(({ id }) => <div><Gif id={id} key={id} /></div>) }
    </div>
  );
};

function mapStateToProps(state) {
  return {
    gifs: state.gifs
  };
}

export default connect(mapStateToProps, null)(GifList);
