import React from 'react';
import axios from 'axios';
import {
  Thumbnail,
  Grid, Row, Col
} from 'react-bootstrap';

const List = React.createClass({
  getInitialState: function(){
    return {
      planets: []
    }
  },
  componentDidMount: function(){
    axios.get('/api/planets', {})
    .then(resp => {
      this.setState({
        planets: resp.data
      });
    })
    .catch(function (error) {
      // Handle server or validation errors
      console.log(error);
    });

  },
  render: function(){
    var listItems = this.state.planets.map((item, index) => {
      return (
          <Col xs={6} md={4} key={index}>
            <Thumbnail src={"img/" + item.name.toLowerCase() + ".jpg"}>
              <h3><a href={"planet/"+item.name}>{item.name}</a></h3>
            </Thumbnail>
          </Col>
      )
    });

    return (<Grid><Row>{listItems}</Row></Grid>)
  }
});

export default List;
