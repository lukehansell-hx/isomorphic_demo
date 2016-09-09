const React = require('react');
const { Component } = React;
import { Button, FormGroup, FormControl, ControlLabel, Col } from 'react-bootstrap'
import Form from 'react-router-form'

class Search extends Component {
  render() {
    return (
      <Form to="carparks" method="GET">
        <FormGroup>
          <Col sm={2}>
            <ControlLabel>
              From
            </ControlLabel>
          </Col>
          <Col sm={10}>
            <input type="date" name="from" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm={2}>
            <ControlLabel>
              To
            </ControlLabel>
          </Col>
          <Col sm={10}>
            <input type="date" name="to" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm={2}>
            <ControlLabel>
              Location
            </ControlLabel>
          </Col>

          <Col sm={10}>
            <select name="location">
              <option value="LGW">London Gatwick</option>
              <option value="LHR">London Heathrow</option>
            </select>
          </Col>
        </FormGroup>
        <input type="hidden" value="WEB1" name="agent"/>
        <Col sm={10} smOffset={2}>
          <Button type="submit" block bsStyle="primary">Search</Button>
        </Col>
      </Form>
    );
  }
}

module.exports = Search
