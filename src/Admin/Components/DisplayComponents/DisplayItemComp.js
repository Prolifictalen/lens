import React, {useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import {Card, Table, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DisplayItemComp = () => {
  const location = useLocation();
  const { token } = location.state||{};
  console.log("DisplayItemComp token: ",token);

  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/admin/getitems',{
      headers:{
        Authorization:`bearer ${token}`,
      }
    }).then((res) => {
          console.log(res)
          setData(res.data);
        });
  }, []);

  return (
    <>
      <Card style={{ width:'80%', height: "80%", border: "1px solid black", margin : "auto" }}>
      <center><label><h2>Items List</h2></label></center>
      <center>
      <Table striped bordered hover style={{width:'80%'}}>
      <thead>
        <tr>
          <th>Item ID</th>
          <th>Item Name</th>
          <th>Item</th>
          <th>Discription</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {/* {data.map((item) =>{
        return(
            <>
            <tr>
            <td>{item.itemID}</td>
            <td>{item.title}</td>
            <td><img src='{{item.imgPath}}' alt='' height='50px' width='50px'></img></td>
            <td>{item.discription}</td>
            <td>{item.itemPrice}</td>
            <td>
            <Link to ="/update" ><Button variant="primary">Update</Button></Link>&nbsp;&nbsp;
            <Link to ="/delete" class="text-danger"><Button variant="danger">Delete</Button></Link>&nbsp;&nbsp;
            <Button variant="success" onClick={()=>{item.status="Completed"}}>Complete</Button>&nbsp;
            </td>
            </tr>
            </>
          );
          })} */}
      </tbody>
      </Table>
      </center>
     </Card> 
    </>
  )
}

export default DisplayItemComp
