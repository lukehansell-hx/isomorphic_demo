const React = require('react');
const {
  Component,
  PropTypes: {
    func,
    string
  }
} = React;
import { Button, FormGroup, FormControl, ControlLabel, Col } from 'react-bootstrap'

const SearchForm = ({
  onSubmit,
  onChange,
  action,
  to,
  from,
  location,
}) => (
  <form action={action} method="GET" onSubmit={onSubmit}>
    <FormGroup>
      <Col sm={2}>
        <ControlLabel>
          From
        </ControlLabel>
      </Col>
      <Col sm={10}>
        <input type="date" value={from} name="from" onChange={onChange} />
      </Col>
    </FormGroup>
    <FormGroup>
      <Col sm={2}>
        <ControlLabel>
          To
        </ControlLabel>
      </Col>
      <Col sm={10}>
        <input type="date" value={to} name="to" onChange={onChange} />
      </Col>
    </FormGroup>
    <FormGroup>
      <Col sm={2}>
        <ControlLabel>
          Location
        </ControlLabel>
      </Col>

      <Col sm={10}>
        <select name="location" onChange={onChange} value={location} >
          <option value="LGW">London Gatwick</option>
          <option value="LHR">London Heathrow</option>
        </select>
      </Col>
    </FormGroup>
    <Col sm={10} smOffset={2}>
      <Button type="submit" block bsStyle="primary">Search</Button>
    </Col>
  </form>
);

SearchForm.propTypes = {
  onSubmit: func,
  onChange: func,
  from: string,
  to: string,
  location: string,
  action: string
}

module.exports = SearchForm
