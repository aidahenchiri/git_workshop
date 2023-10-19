import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux';


const NavbarMovie = () => {
  const [Title,setTitle]=useState()
  const [Rate,setRate]=useState()
  const dispatch=useDispatch()
  const handleSearch=(e)=>
  { 
    setTitle({Title,[e.target.Title]:e.target.value})
     
  }
  const handleRAte=(e)=>
  { 
  setRate({Rate,[e.target.Rate]:e.target.value})
  }
  console.log(Title,Rate)
  
  // const handleSearchButton = async (search) => {
  //   try {
  //     await dispatch(getByRate(Rate,Title));
  //   } catch (error) {
  //     console.error('Error deleting product:', error);
  //   }
  // };

  return (
    <div>
    <Navbar className="bg-body-tertiary justify-content-between">
      <Form inline>
        <InputGroup>
       
        </InputGroup>
      </Form>
      <Form inline>
        <Row>
          <Col>
            <Form.Control type="text"  placeholder="title" className=" mr-sm-2" name="Title"  onChange={(e)=>handleSearch(e)}/>
          </Col>
          <Col >
            <Form.Control type="text"  placeholder="rate" className=" mr-sm-2" name="Rate"  onChange={(e)=>handleRAte(e)}/>
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
    </div>
  )
}

export default NavbarMovie