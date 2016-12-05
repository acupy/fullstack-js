import React from 'react';
import axios from 'axios';

const List = React.createClass({

  getInitialState: function(){
    return {
      planets: []
    }
  },

  componentDidMount: function(){
    axios.get('/planets', {})
    .then(resp => {
      this.setState({
        planets: resp.data
      });
    })
    .catch(function (error) {
      // Handle server or validation errors
      console.log(error);
      alert('Error :: ' + error);
    });

  },
  render: function(){

    var listItems = this.state.planets.map((item, index) => {
      return (
        <li key={index}>
            {item.name}
        </li>
      )
    });

    return (
      <ul>
        {listItems}
      </ul>
    )
  }
});

export default List;
