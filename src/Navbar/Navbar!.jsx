import "./Navbar.css";
import { Container, Nav, Navbar } from "react-bootstrap/";
import React, { useEffect } from "react";

export default function Navbar1() {
  useEffect(() => {
    function onScroll() {
      addEventListener("scroll", () => {
        let stick = document.querySelector(".stick");
        stick.classList.toggle("sticky", window.screenY > 0);
      });
    }
    window.addEventListener("scroll", onScroll);

    return () => {
      window.addEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="container">
      {/* <Navbar expand="lg" className="Navbar stick fixed-top" id="scroll-spy"   >
        <Container>
          <Navbar.Brand href="#home">Start React</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"className="p-2">
            <span >
              <i className="fas fa-bars"></i>
              <b className="ms-3">Menu</b>
            </span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#portfolio" >PORTFOLIO</Nav.Link>
              <Nav.Link href="#about" >ABOUT</Nav.Link>
              <Nav.Link href="#contact">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      <nav
        className="navbar navbar-expand-lg Navbar  fixed-top px-5"
        id="scroll-spy"
      >
        <a className="navbar-brand" href="#home">
          Start React
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span>
            <i className="fas fa-bars"></i>
            <b className="ms-3">Menu</b>
          </span>
        </button>

      
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ">
              <a className="nav-link" href="#portfolio">
                PORTFOLIO
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                CONTACT
                </a>
        
        </li>
        
      </ul>
      
    </div>
  </nav>
    </div>
  );
}
