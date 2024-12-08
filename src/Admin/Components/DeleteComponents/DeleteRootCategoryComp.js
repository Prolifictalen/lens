import React,{useState} from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import {Button, Modal,Toast} from 'react-bootstrap';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput
  }
  from 'mdb-react-ui-kit';

const DeleteRootCategoryComp = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVariant, setToastVariant] = useState('');

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const location = useLocation();
  const { token } = location.state||{};
  console.log("DelRootComp token: ",token); 

  const [category,setCategory]=useState('')
  const del=async()=>{
    const data = await axios.delete(`http://localhost:8000/api/v1/admin/deleterootcategory/${category}`,{
      headers:{
        Authorization:`bearer ${token}`,
      }
    });
    if(data.data.status==='Success'){
      setToastVariant('Success');
    }
    else if(data.data.status==='Warn'){
      setToastVariant('Warning');
    }
    else{
      setToastVariant('Danger');
    }
    setToastMessage(data.data.message);
    setShowToast(true);

    setCategory('')
    console.log(data);
  } 
  return (
    <div>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton style={{background:'#ff9194'}}></Modal.Header>
    <Modal.Body style={{background:'#ffdadb', paddingBlockStart:'-40%'}}>
    <MDBContainer fluid>
    <MDBRow className='d-flex justify-content-center align-items-center h-100'>
    <MDBCol col='12'>
    <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
    <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
    <h2 className="fw-bold mb-2 text-uppercase">Delete Category</h2>
    <p className="text-white-50 mb-5">Please Enter Category Name</p>
    <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' value={category} onChange={(e)=>setCategory(e.target.value)} placeholder='Category Name' type='text' size="lg"/>
    <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot Category Name?</a></p>
    <Button variant='primary' onClick={del}>Delete Category</Button>
    </MDBCardBody>
    </MDBCard>
    </MDBCol>
    </MDBRow>
    </MDBContainer>
    </Modal.Body>
    </Modal>
    {showToast && (
        <Toast className='d-inline-block m-1' bg={toastVariant.toLowerCase()}
        style={{position:'fixed', top:'50%', left:'50%', transform:'translate(-50%, -50%)'}} 
        onClose={() => setShowToast(false)} show={showToast}>
          <Toast.Header>
            <strong className='me-auto'>Add Item Status</strong>
            <small>Lenskart</small>
          </Toast.Header>
          <Toast.Body className="fw-bold {toastVariant === 'Dark' && 'text-white'}">
          <font color="white" size='3'>{toastMessage}</font><br/></Toast.Body>
          <div className="d-grid"><Button variant='light' onClick={()=>setShowToast(false)} style={{borderRadius:'14px',margin:'5px'}}>OK</Button></div>
        </Toast>
      )}
    </div>
  ) 
}

export default DeleteRootCategoryComp
