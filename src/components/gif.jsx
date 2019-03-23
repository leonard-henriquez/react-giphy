import React from 'react';

const Gif = ({ id }) => {
  if (! id) {
    return null;
  }

  const src = `https://media1.giphy.com/media/${id}/giphy.gif`;
  return (
    <img src={src} alt="" className="gif" />
  );
};

export default Gif;
