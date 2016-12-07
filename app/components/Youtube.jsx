import React from 'react';

function Youtube(props) {
  return (
    <iframe
      width={props.width || 300}
      height={props.height || 300}
      src={props.url}
    />
  );
}

export default Youtube;
