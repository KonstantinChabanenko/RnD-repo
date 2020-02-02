import React from 'react';
import { Modal, Spinner } from 'react-bootstrap';

const SpinnerComponent = () => (
  <div className="spinner-wrapper position-absolute">
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  </div>
)

const Loader = () => (
  <Modal show={true} backdrop={true} dialogAs={SpinnerComponent} />
)

export default Loader;
