import React from 'react';

import NavBar from './NavBar.js';

const App = React.createClass({
  render: function(){
    return (
      <div>
        <NavBar></NavBar>
        {this.props.children}
      </div>
    );
  }
});

export default App;
