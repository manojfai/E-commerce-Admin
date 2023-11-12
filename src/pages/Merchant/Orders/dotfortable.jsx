import React from 'react';

function DotForTable({ code }) {
  const dotColor = code ? '#007F5F' : '#B98900';
  return (
    <span
      style={{
        backgroundColor: dotColor,
        borderRadius: '50%',
        display: 'inline-block',
        width: '8px',
        height: '8px',
        marginRight: '4px'
      }}></span>
  );
}

export default DotForTable;
