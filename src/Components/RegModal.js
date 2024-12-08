import {React, useState} from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import axios from 'axios'

const RegModal = ({ show, handleClose, handleLoginModalShow }) => {
  const handleSignInClick = () => {
    handleClose();
    handleLoginModalShow();
  };

  const [UserFirstName, setUserFirstName]=useState('');
  const [UserLastName, setUserLastName]=useState('');
  const [UserEID, setUserEID]=useState('');
  const [UserPassword, setUserPassword]=useState('');
  const [UserRePassword, setUserRePassword]=useState('');
  const [UserMobileNo, setUserMobileNo]=useState('');
  const [UserGender, setUserGender]=useState('');
  const [UserDob, setUserDob]=useState('');
  const [UserState, setUserState]=useState('');
  const [UserCity, setUserCity]=useState('');
  const [UserAddress, setUserAddress]=useState('');
  const [UserPincode, setUserPincode]=useState('');

  const RegData = {UserFirstName,UserLastName,UserDob,UserGender,UserEID,UserMobileNo,UserPassword,UserRePassword,UserAddress,UserPincode,UserCity,UserState}
  const register = async()=>{
    const data = await axios.post("http://localhost:8000/api/v1/user/register",RegData);
    alert(data.data.message);
    reset();
    console.log(data);
  }

  const reset=()=>{
    setUserFirstName('')
    setUserLastName('')
    setUserGender('')
    setUserDob('')
    setUserEID('')
    setUserMobileNo('')
    setUserAddress('')
    setUserState('')
    setUserCity('')
    setUserPassword('')
    setUserRePassword('')
    setUserPincode('')
  }

  return (
    <>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title style={{ marginLeft: "30px", color: "#333368" }}>Create an Account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form style={{ width: '85%', margin: '0 auto' }}>
          <Form.Group className="mb-4">
            <Form.Control className="form-control-lg" type="text" placeholder="First Name*" value={UserFirstName} onChange={(e)=>setUserFirstName(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control className="form-control-lg" type="text" placeholder="Last Name*" value={UserLastName} onChange={(e)=>setUserLastName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control className="form-control-lg" type="text" placeholder="Gender*" value={UserGender} onChange={(e)=>setUserGender(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control className="form-control-lg" type="date" placeholder="DOB*" value={UserDob} onChange={(e)=>setUserDob(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control className="form-control-lg" type="tel" placeholder="Mobile*" value={UserMobileNo} onChange={(e)=>setUserMobileNo(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control className="form-control-lg" type="email" placeholder="Email*" value={UserEID} onChange={(e)=>setUserEID(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control className="form-control-lg" type="text" placeholder="Address*" value={UserAddress} onChange={(e)=>setUserAddress(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control className="form-control-lg" type="text" placeholder="State*" value={UserState} onChange={(e)=>setUserState(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control className="form-control-lg" type="text" placeholder="City*" value={UserCity} onChange={(e)=>setUserCity(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control className="form-control-lg" type="password" placeholder="Password*" value={UserPassword} onChange={(e)=>setUserPassword(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control className="form-control-lg" type="password" placeholder="Re-Password*" value={UserRePassword} onChange={(e)=>setUserRePassword(e.target.value)}/>
          </Form.Group>
        <Form.Group className="mb-4">
        <Form.Control className="form-control-lg" type="number" placeholder="Pincode*" value={UserPincode} onChange={(e)=>setUserPincode(e.target.value)}/>
          </Form.Group>
        </Form>
        <Button variant="white" onClick={register} style={{ width: "85%", marginLeft: "35px", marginTop: "20px", background: "lightgray", color: "#000042", fontSize: "20px" }}>
          Create an account
        </Button>
        <div style={{ textAlign: 'center', marginTop: '4%' }}>
          <span style={{ color: "#333368" }}>
            Have an account?
            <span onClick={handleSignInClick} style={{ textDecoration: 'underline', cursor: 'pointer', color: "#333368", marginLeft: '5px' }}>
              Sign in
            </span>
          </span>
        </div>
      </Modal.Body>
    </Modal>
    </>
  );
};

export default RegModal;
