import React from 'react';

export function Button({ onClick }) {
  return (
    <button onClick={() => onClick()} type="button">
      Load More
    </button>
  );
}
