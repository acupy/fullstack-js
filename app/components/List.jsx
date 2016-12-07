import React from 'react';
import axios from 'axios';
import {
  Thumbnail,
  Grid, Row, Col,
} from 'react-bootstrap';

import SearchBar from './SearchBar.jsx';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.allPlanets = [];
    this.state = {
      planets: [],
    };
  }
  componentDidMount() {
    axios.get('/api/planets', {})
    .then((resp) => {
      this.allPlanets = resp.data;
      this.setState({
        planets: resp.data,
      });
    })
    .catch((error) => {
      // Handle server or validation errors
      console.log(error);
    });
  }
  handleSearch(filterText) {
    let filteredPlanets;
    if (filterText) {
      filteredPlanets = this.allPlanets.filter((planet) => {
        return planet.name.toLowerCase().includes(filterText.toLowerCase());
      });
    }

    this.setState({
      planets: filterText ? filteredPlanets : this.allPlanets,
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

    return (
      <div>
        <SearchBar
          searchHandler={this.handleSearch.bind(this)}
        />
        <Grid>
          <Row>{listItems}</Row>
        </Grid>
      </div>
    );
  }
}

export default List;
