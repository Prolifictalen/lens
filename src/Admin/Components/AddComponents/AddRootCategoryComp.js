import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Col, Button, Row, Container, Card, Form, Toast } from 'react-bootstrap'

const AddRootCategoryComp = () => {
  const location = useLocation();
  const { token } = location.state || {};
  console.log("AddRootCategoryComp Token: ",token);

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVariant, setToastVariant] = useState('');
  
  const [CategoryName,setCategoryName]=useState('');
  const [CategoryDisc,setCategoryDisc]=useState('');
  const AddCategoryData={CategoryName,CategoryDisc};

  const AddCategory = async() => {
    const data = await axios.post('http://localhost:8000/api/v1/admin/addrootcategory',AddCategoryData,{
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

    setCategoryName('')
    setCategoryDisc('')
    console.log(data);  
  };

  return (
    <>
      <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          <div className="border-3 border-info border"></div>
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3 mt-4">
                <h3 className="fw-bold text-uppercase mb-2">Add New Category</h3>
                <p className="mb-5">Please Enter Category and it's Details!!</p>
                <Form className="mb-3">
                  <Form.Group className="mb-3">
                    <Form.Label className="text-center fw-bold">Category Name<span className="required-asterisk">*</span></Form.Label>
                    <Form.Control type="text" placeholder="Enter Category" onChange={(e)=>setCategoryName(e.target.value)} value={CategoryName}/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-center fw-bold">About Category</Form.Label>
                    <Form.Control type="text" placeholder="Write Category Discription" onChange={(e)=>setCategoryDisc(e.target.value)} value={CategoryDisc}/>
                  </Form.Group>
                  
                  <div className="d-grid">
                    <Button variant="info" onClick={()=>AddCategory()}>
                      Add Category
                    </Button>
                  </div>
                </Form>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {showToast && (
        <Toast className='d-inline-block m-1' bg={toastVariant.toLowerCase()}
        style={{position:'fixed', top:'50%', left:'50%', transform:'translate(-50%, -50%)'}} 
        onClose={() => setShowToast(false)} show={showToast}>
          <Toast.Header>
            <strong className='me-auto'>Add Category Status</strong>
            <small>Lenskart</small>
          </Toast.Header>
          <Toast.Body className={toastVariant === 'Dark' && 'text-white'}><font color="white" size='3'>{toastMessage}</font><br/></Toast.Body>
        </Toast>
      )}
    </Container>
    </>
  )
}

export default AddRootCategoryComp
