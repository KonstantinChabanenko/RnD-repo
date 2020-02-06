import React from 'react';
import { Col, Row, Form } from 'react-bootstrap';

const GridHeader = ({ sortingOptions, selectedSortingOption, setSelectedSortingOption }) => (
    <Row className="mb-4">
        <Col md={3}>
            <Form.Control as="select" onChange={(e) => setSelectedSortingOption(e.target.value)}>
                {sortingOptions.map(option => (
                    <option
                        key={option.id}
                        value={option.id}
                        selected={option.id === selectedSortingOption ? 'selected' : ''}
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
