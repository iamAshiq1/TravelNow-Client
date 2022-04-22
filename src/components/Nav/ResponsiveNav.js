import Button from "@restart/ui/esm/Button";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./nav.css";

const ResponsiveNav = () => {
  const { logOut, user } = useAuth();
  console.log(user.photoURL);

  function menuToggle(){
    const toggleMenu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active')
}
  
  return (
    <div>
      <Navbar style={{padding: "0px" }} className="nav sticky-top"
        collapseOnSelect
        expand="lg">
          <Navbar.Brand className='bannerText fw-bolder p-0 ms-3'><span style={{color: 'tomato'}}>TRAVEL</span><span style={{color: 'steelblue'}}>NOW <img className="bimg" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/plane-383-1173743.png" alt=""/></span > </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
        
          <Nav.Link className="link" as={Link} to="/Home">
            Home
          </Nav.Link>
          <Nav.Link className="link" as={Link} to="/Order">
           My Orders
          </Nav.Link>
          <Nav.Link className="link" as={Link} to="/ManageOrders">
           Manage Orders
          </Nav.Link>
          <Nav.Link className="link" as={Link} to="/AddService">
           Add Service
          </Nav.Link>
          {user?.displayName || user?.email ? (
            <div className="action">
            <div className="profile" onClick={() => {menuToggle()}}>
            <img
            width="35px"
            className="mx-2 rounded-circle"
            src={user?.photoURL}
            alt=""
          />
            </div>
            <div className="menu">
              <h3>{user?.displayName}</h3>
              <ul>
                <li>
                  <img src="/pic/user.png" alt="" />
                  <Link to="#">My Profile</Link>
                </li>
                <li>
                  <img src="/pic/edit.png" alt="" />
                  <Link to="#">Edit Profile</Link>
                </li>
                <li>
                  <img src="/pic/envelope.png" alt="" />
                  <Link to="#">Inbox</Link>
                </li>
                <li>
                  <img src="/pic/settings.png" alt="" />
                  <Link to="#">Setting</Link>
                </li>
                <li>
                  <img src="/pic/guide.png" alt="" />
                  <Link to="#">Help</Link>
                </li>
                <li>
                  <img src="/pic/log-out.png" alt="" />
                  {user?.displayName && (
                    <Button
                      className="btn text-secondary p-0 bg-danger px-1 text-light"
                      onClick={logOut}
                      variant="light"
                    >
                      Logout
                    </Button>
                  )}
                </li>
              </ul>
            </div>
          </div>
          ) : (
            <Nav.Link as={Link} to="/Login">
              <Button className="btn py-1" style={{backgroundColor: "#404DB6", color: "white"}} variant="light">
                Log in
              </Button>
            </Nav.Link>
          )}
          <h4 className='username mx-3 text-success pt-2 py-3 my-0'> <span className="fs-6 fw-bold text-danger text-decoration-underline">Hey:</span> {user?.displayName}</h4>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default ResponsiveNav;