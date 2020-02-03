import React from 'react';
import { Modal } from 'react-bootstrap';
import Spinner from './Spinner';

const Loader = () => (
  <Modal show={true} backdrop={true} dialogAs={Spinner} />
)

export default Loader;
