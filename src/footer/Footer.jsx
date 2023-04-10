import React from 'react'
import './Footer.css'

export default function Footer
() {
  return (
    <>
 <footer className="py-5">
    <div className="container text-center">
      <div className="row">
        <div className="col-md-4">
        <h3>LOCATION</h3>
      <p> 2215 John Daniel Drive
      </p>
      <p>Clark, MO 65243</p>

        </div>
        <div className="col-md-4">
        <h3> AROUND THE WEB</h3>
      <div className="iconParent my-3" >
      <span className="iconBox">
        <i className="fa-brands fa-facebook-f"></i>
      </span>
      
      <span className="iconBox">
        <i className="fa-brands fa-twitter"></i>
      </span>
      
      <span className="iconBox">
        <i className="fa-brands fa-linkedin-in"></i>
      </span>
      
      <span className="iconBox">
        <i className="fab fa-dribbble"></i>
      </span>

      </div>
        </div>
        <div className="col-md-4">
        <h3> ABOUT FREELANCER</h3>
      <p> Freelance is a free to use, MIT licensed Bootstrap theme created by Route
      </p>
        </div>
      </div>
      <div />
    </div>
  </footer>
  <div className="copyright p-4">
    <div className="container">
      <small >
        Copyright © Your Website 2021
        </small>
    </div>
  </div>
    </>
  )
}
