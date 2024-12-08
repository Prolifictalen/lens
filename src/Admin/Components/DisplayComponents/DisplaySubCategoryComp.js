import React, {useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import {Card, Table, Button} from 'react-bootstrap';
// import { Link } from 'react-router-dom';

const DisplaySubCategoryComp = () => {
  const location = useLocation();
  const { token } = location.state||{};
  console.log("DisplaySubCategoryComp token: ",token);
  
  const [data, setData] = useState('')

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/admin/getstylecategories',{
      headers:{
        Authorization:`bearer ${token}`,
      }
    }).then((res) => {
          console.log(res)
          setData(res.data);
        });
  }, []);

  return (
    <div className="border-3 border-info border" style={{marginLeft:'40px',marginRight:'40px'}}>
      <Card className="shadow">
        <Card.Body>
          <div className="mb-3 mt-4">
          <center>
            <h3 className="fw-bold text-uppercase mb-2"><font color="#023E8A">***  Available Style Categories  ***</font></h3>
            <p className="mb-5">------------------------------------------------------------------------------------------------------------------------------------</p>
            <Table striped bordered hover style={{width:'80%'}}>
            <thead>
              <tr>
              <th>Category ID</th>
              <th>Categories</th>
              <th>Discription</th>
              </tr>
            </thead>
            <tbody>
            {data && data.map((category) =>{
            return(
            <>
            <tr>
            <td>{category._id}</td>
            <td>{category.CategoryName}</td>
            <td>{category.CategoryDisc}</td>
            <td>
            <Button variant="primary">Update</Button>&nbsp;&nbsp;
            <Button variant="danger">Delete</Button>&nbsp;&nbsp;
            </td>
            </tr>
            </>
            );
            })}
            </tbody>
            </Table>
          </center>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default DisplaySubCategoryComp
