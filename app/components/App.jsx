import React from 'react';

import NavBar from './NavBar.jsx';

function App(props) {
  return (
    <div>
      <NavBar />
      {props.children}
    </div>
  );
}

export default App;
