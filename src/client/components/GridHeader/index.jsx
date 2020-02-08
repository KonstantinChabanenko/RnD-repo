import React from 'react';
import { Col, Row, Form } from 'react-bootstrap';

const GridHeader = ({ sortingOptions, selectedSortingOption, setSelectedSortingOption }) => (
  <Row className="mb-4">
    <Col md={3}>
      <Form.Control
        as="select"
        onChange={(e) => setSelectedSortingOption(e.target.value)}
        value={selectedSortingOption}
      >
        {sortingOptions.map(option => (
          <option
            key={option.id}
            value={option.id}
          >
            {option.label}
          </option>
        ))}
      </Form.Control>
    </Col>
    <Col md={9}></Col>
  </Row>
)

export default GridHeader;
