import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux';


const NavbarMovie = ({movies,setMovie}) => {
  const [Title,setTitle]=useState("")
  const [Rate,setRate]=useState(0)
  const dispatch=useDispatch()
console.log(movies)
  const handleTitle=(e)=>
  {  
       setTitle(e.target.value)
  }
  const handleRAte=(e)=>
  { 
  setRate(e.target.value)
  }
  
  const handlSearch=(movies)=>
  {
     var searched=movies

     console.log(searched)
    if(Rate!=0 )
    {
      searched= searched.filter(el=>el.Rate == Rate)
    }
    
    if(Title!="" )
    {
      searched= searched.filter(el=>el.Title.toUpperCase().trim().includes(Title.toUpperCase().trim()) )
    }
    setMovie(searched)

  }
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
            <Form.Control type="text"  placeholder="title" className=" mr-sm-2" name="Title"  onChange={(e)=>handleTitle(e)}/>
          </Col>
          <Col >
            <Form.Control type="text"  placeholder="rate" className=" mr-sm-2" name="Rate"  onChange={(e)=>handleRAte(e)}/>
          </Col>
          <Col xs="auto">
            <Button type="submit" onClick={handlSearch}>Submit</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
    </div>
  )
}

export default NavbarMovie