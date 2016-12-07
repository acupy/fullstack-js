import React from 'react';
import axios from 'axios';
import {
  Grid, Row, Col,
} from 'react-bootstrap';

import Youtube from './Youtube.jsx';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      youtube: '',
    };
  }
  componentDidMount() {
    axios.get(`/api/planet/${this.props.params.planetName}`, {})
    .then((resp) => {
      this.setState({
        name: resp.data[0].name,
        youtube: resp.data[0].youtube,
      });
    })
    .catch((error) => {
      // Handle server or validation errors
      console.log(error);
    });
  }
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <h1>{this.state.name}</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={3} md={3}>
            <Youtube url={this.state.youtube} />
          </Col>
          <Col xs={9} md={9} />
        </Row>
      </Grid>
    );
  }
}
export default Details;
