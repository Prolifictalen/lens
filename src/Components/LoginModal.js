import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import RegModal from './RegModal';
import LoginCart from '../img/LoginCart.png';
import Form from 'react-bootstrap/Form';
import ForgetModal from './ForgetModal';
import axios from 'axios';

const LoginModal = ({ show, handleClose }) => {
  const [regShow, setRegShow] = useState(false);
  const [forgetShow, setForgetShow] = useState(false);

  const handleRegShow = () => {
    handleClose();
    setRegShow(true);
  };

  const handleForgetShow = () => {
    handleClose();
    setForgetShow(true);
  };

  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const loginData={UserEID:email,UserPassword:password}

  const login=async()=>{
    const data = await axios.post("http://localhost:8000/api/v1/user/login",loginData);
    alert(data.data.message)
    setEmail('')
    setPassword('')
    console.log(data);
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Title>
          <img src={LoginCart} width="499px" height="220px" alt="" />
        </Modal.Title>
        <br />
        <Form style={{ width: '85%', margin: '0 auto' }}>
          <Form.Group>
            <Form.Label style={{ color: "#333368", fontSize: "28px", fontFamily: "serif" }}>Sign In</Form.Label>
            <Form.Control className="form-control-lg" type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          </Form.Group>
          <Form.Text style={{ fontSize: "10px", marginLeft: "5px", color: "red" }}>Please enter a valid Email ID</Form.Text>
          <Form.Group>
            <Form.Label style={{ color: "#333368", fontSize: "28px", fontFamily: "serif", marginTop: "10px" }}>Password</Form.Label>
            <Form.Control className="form-control-lg" type="Password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          </Form.Group>
        </Form>
        <span onClick={handleForgetShow} style={{ margin: "auto", marginTop: "5%", color: "#333368", cursor: 'pointer' }}><u>Forget Password</u></span>
        <Button variant="white" onClick={login} style={{ width: "85%", margin: "auto", marginTop: "20px", background: "lightgray", color: "#000042", fontSize: "20px" }}>
          Sign In
        </Button>
        <div style={{ textAlign: 'center', marginTop: '4%' }}>
          <span style={{ color: "#333368" }}>
            New Member?
            <span onClick={handleRegShow} style={{ textDecoration: 'underline', cursor: 'pointer', color: "#333368", marginLeft: '5px' }}>
              Create an Account
            </span>
          </span>
        </div>
        <br />
      </Modal>
      <RegModal show={regShow} handleClose={() => setRegShow(false)} handleLoginModalShow={() => handleClose()} />
      <ForgetModal show={forgetShow} handleClose={() => setForgetShow(false)} handleLoginModalShow={() => handleClose()} />
    </>
  );
}

export default LoginModal;
