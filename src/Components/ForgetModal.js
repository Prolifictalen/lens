import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const ForgetModal = ({ show, handleClose, handleLoginModalShow }) => {
  const handleSignInClick = () => {
    handleClose();
    handleLoginModalShow();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="modal-title">Forget Password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="forget-form">
          <Form.Group className="mb-4">
            <Form.Control className="form-control-lg" type="email" placeholder="Email*" />
          </Form.Group>
        </Form>
        <Button variant="white" onClick={handleClose} style={{ width: "85%", marginLeft: "35px", marginTop: "20px", background: "lightgray", color: "#000042", fontSize: "20px" }}>
          Forget Password
        </Button>
        <div style={{ textAlign: 'center', marginTop: '4%' }}>
          <span style={{ color: "#333368" }}>
            Remember Password?
            <span onClick={handleSignInClick} style={{ textDecoration: 'underline', cursor: 'pointer', color: "#333368", marginLeft: '5px' }}>
              Sign in
            </span>
          </span>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ForgetModal;
