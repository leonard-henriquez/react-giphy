import React from 'react';

import Gif from './gif';

const GifList = ({ gifs }) => {
  return (
    <div className="gif-list">
      {gifs.map(({ id }) => <div><Gif id={id} key={id} /></div>)}
    </div>
  );
};

export default GifList;
