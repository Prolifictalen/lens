import React,{useState} from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
  }
  from 'mdb-react-ui-kit';
  import {Button,Toast} from 'react-bootstrap'
  import './CompDesignFolder/LoginCompDesign.css'

const LoginComp = () => {
    const [AdminMailID,setAdminMailID]=useState('')
    const [AdminPassword,setAdminPassword]=useState('')
    const loginData={AdminMailID,AdminPassword}

    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastVariant, setToastVariant] = useState('');

    const [isLoggedIn,setIsLoggedIn]=useState(false);

    const [token,setToken]=useState('');

    const login=async()=>{
    const data = await axios.post("http://localhost:8000/api/v1/admin/login",loginData);
    if(data.data.status==='Success'){
      setToken(data.data.token)
      setToastVariant('Success');
      setTimeout(() => {
        setIsLoggedIn(true)
      }, 3000);
    }
    else if(data.data.status==='Warn'){
      setToastVariant('Warning');
    }
    else{
      setToastVariant('Danger');
    }

    setToastMessage(data.data.message);
    setShowToast(true);

    setAdminMailID('')
    setAdminPassword('')
    console.log(data);
  }

    // useEffect(()=>{
    //     setIsLoggedIn(true);
    // }, []);
    
  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>
    <MDBRow>
      <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

        <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
          Hello Admin !!! <br />
          <span style={{color: 'hsl(218, 81%, 75%)'}}>for your business</span>
        </h1>

      </MDBCol>
      <MDBCol md='6' className='position-relative'>
        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

        <MDBCard className='my-5 bg-glass'>
          <MDBCardBody className='p-5'>
          <div className='d-flex flex-row mt-2'>
                <img src='https://play-lh.googleusercontent.com/wci9Z4zbtaznuyoBgdgHaq9upO4I-NeP2rWCn3HpPulUozjryAXaHsqm0Ykj-3x3kZM' alt='' height='70px' width='120px' className="mb-0"/>
                <span className="h1 fw-bold mb-0">Admin Portal</span>
              </div>
              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}><b>Sign into your account</b></h5>
              <MDBInput wrapperClass='mb-4' placeholder='Email address' type='email' size="lg" value={AdminMailID} onChange={(e)=>setAdminMailID(e.target.value)}/>
              <MDBInput wrapperClass='mb-4' placeholder='Password' type='password' size="lg" value={AdminPassword} onChange={(e)=>setAdminPassword(e.target.value)}/>
              <center>
              <Button className="mb-4 px-5" variant='dark' size='lg' style={{width:'45%'}} onClick={()=>login()}>Login</Button><br/>

              <a className="small text-muted" href="#!">Forgot password?</a><br/><br/><br/>
              <div className="small text-muted me-1">Terms of use.  Privacy policy</div>

              </center>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    
    {/* {isLoggedIn && token && (<Navigate to="/admin/home" token={token}/>)} */}
    {isLoggedIn && token && (<Navigate to="/admin/home" state={{ token }} />)}

    {showToast && (
        <Toast className='d-inline-block m-1' bg={toastVariant.toLowerCase()}
        style={{position:'fixed', top:'50%', left:'50%', transform:'translate(-50%, -50%)'}} 
        onClose={() => setShowToast(false)} show={showToast}>{/* delay={3000} autohide attributes also can be used */}
          <Toast.Header>
            <strong className='me-auto'>Login Status</strong>
            <small>Lenskart</small>
          </Toast.Header>
          <Toast.Body className={toastVariant === 'Dark' && 'text-white'}><font color="white" size='3'><b>{toastMessage}</b></font><br/></Toast.Body>
        </Toast>
      )}
  </MDBContainer>
  )
}

export default LoginComp

