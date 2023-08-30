import React, { useState ,useEffect,useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cookies from 'js-cookie';
import { GlobalContext } from '../../Context/context';
import { Link } from 'react-router-dom';
import "../../GuestNav.css"

export default function UserNav() {
 
  const { state, dispatch } = useContext(GlobalContext)


    const [categories, setCategory] = useState([]);

  useEffect(() => {
      const fetchCategories = async () => {
          try {
              const response = await axios.get(`http://localhost:1234/api/all-categories`);
              console.log(response.data); // Log the response data
              setCategory(response.data.categories);
          } catch (error) {
              console.log(error);
          }
      };

      fetchCategories();
  }, []);
  
 

  return (
    <>
<Navbar expand="lg" className="bg-body-tertiary" id="nav" >
<Container fluid>
  <Navbar.Brand href="" className="logo text-white" >Hijaby Wardrobe</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" className={"icon"} />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto  nav-list">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/product">Products</Nav.Link>
      <NavDropdown title="Categories" id="basic-nav-dropdown">
      {categories.map((val, key) => (
                         <Link className='text-decoration-none' to={`/product/category/${val.CategoryName}`} key={key}>
                      
        <NavDropdown.Item href="#action/3.1" style={{textDecoration:"none"}}> {val.CategoryName} </NavDropdown.Item>
       
                      </Link>
                  ))}
      </NavDropdown>
    </Nav>
    <Nav className="d-lg-none"> {/* For toggle bar */}
    <Nav.Link to='/profile' className="btn btn-outline-dark d-flex align-items-center gap-3 text-white">
                    <img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" style={{ height: '3vh', objectFit: 'contain' }} alt="" />
                    Profile
                  </Nav.Link>
                  <Nav.Link className="btn btn-dark" to='/cart'>Cart</Nav.Link>
                  <Nav.Link className="btn btn-dark" onClick={() => {
                                Cookies.remove('token')
                                dispatch({ type: "USER_LOGOUT" })}}>Sign Out</Nav.Link>
      </Nav>

  </Navbar.Collapse>
  
  <Nav className="d-none d-lg-flex"> {/* For normal navigation */}
  <Nav.Link to='/profile' className="btn btn-outline-dark d-flex align-items-center gap-3 text-white">
                    <img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" style={{ height: '3vh', objectFit: 'contain' }} alt="" />
                    Profile
                  </Nav.Link>
                  <Nav.Link className="btn btn-dark" to='/cart'>Cart</Nav.Link>
                  <Nav.Link className="btn btn-dark" onClick={() => {
                                Cookies.remove('token')
                                dispatch({ type: "USER_LOGOUT" })}}> Sign Out </Nav.Link>
    </Nav>
</Container>
</Navbar>

</>
    )
}
