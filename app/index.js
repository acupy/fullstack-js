import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

axios.get('/planets', {})
.then(resp => {
  console.log('RESP ::', resp);

})
.catch(function (error) {
  // Handle server or validation errors
  console.log(error);
  alert('Error :: ' + error);
});

ReactDOM.render(
  <h1>Planet-Reactor</h1>,
  document.getElementById('root')
);
