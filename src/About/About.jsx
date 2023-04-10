import React from "react";
import './About.css'

const About = () => {
 return(
    <>
    <div id="about" className="py-5">
      <div className="container">
        <div className="text-center">
          <h2>About</h2>
          <div className="mb-4">
              <span className="line2"></span>
              <span>
              
                <i className="fa-solid fa-star"></i>
              </span>
              <span className="line2"></span>
            </div>
          
        </div>
        <div className="row">
          <div className="col-md-6">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="col-md-6">
            <p>
              You can create your own custom avatar for the masthead, change the
              icon in the dividers, and add your email address to the contact
              form to make it fully functional!
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
 )
};

export default About;
