import React from 'react';

export function ReactModal(largeImageURL, tags) {
  return (
    <div>
      <div>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
}
