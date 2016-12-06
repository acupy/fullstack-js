import React from 'react';
import axios from 'axios';
import {
  Grid, Row, Col,
} from 'react-bootstrap';

import Youtube from './Youtube.js';

const Details = React.createClass({
  getInitialState: function(){
    return {
      name: "",
      youtube: ""
    }
  },
  componentDidMount: function(){
    axios.get('/api/planet/' + this.props.params.planetName, {})
    .then(resp => {
      this.setState({
        name: resp.data[0].name,
        youtube: resp.data[0].youtube
      });
    })
    .catch(function (error) {
      // Handle server or validation errors
      console.log(error);
    });

  },
  render: function(){
    console.log(this.props.params);
    return (
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <h1>{this.state.name}</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={3} md={3}>
            <Youtube url={this.state.youtube}/>
          </Col>
          <Col xs={9} md={9}>

          </Col>
        </Row>
      </Grid>
    );
  }
});
export default Details;
