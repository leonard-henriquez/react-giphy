import React from 'react';

const Gif = ({ id, onClick }) => {
  if (!id) {
    return null;
  }

  const src = `https://media1.giphy.com/media/${id}/giphy.gif`;
  return (
    <img src={src} alt="" className="gif" onClick={onClick} />
  );
};

export default Gif;
