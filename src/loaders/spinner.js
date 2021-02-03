import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
function Loader() {
      const [show, setShow] = useState(true);
      return (
          <Modal show={show} centered>
            <Modal.Header>
              <Modal.Title>Please Wait</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                  <Button variant="primary" disabled>
                        <Spinner
                              as="span"
                              animation="grow"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                        />
                        Loading...
                  </Button>
            </Modal.Body>
          </Modal>
      );
}

export default Loader;
    