import React from 'react';
import axios from 'axios';
import {
  Thumbnail,
  Grid, Row, Col,
} from 'react-bootstrap';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: [],
    };
  }
  componentDidMount() {
    axios.get('/api/planets', {})
    .then((resp) => {
      this.setState({
        planets: resp.data,
      });
    })
    .catch((error) => {
      // Handle server or validation errors
      console.log(error);
    });
  }
  render() {
    const listItems = this.state.planets.map((item, index) => {
      return (
        <Col xs={6} md={3} key={index}>
          <Thumbnail src={`img/${item.name.toLowerCase()}.jpg`}>
            <h3><a href={`planet/${item.name}`}>{item.name}</a></h3>
          </Thumbnail>
        </Col>
      );
    });

    return (<Grid><Row>{listItems}</Row></Grid>);
  }
}

export default List;
