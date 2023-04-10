import React, { useEffect } from "react";
import "./Contact.css";

export default function Contact() {
  useEffect(() => {
    let formControl = document.querySelectorAll(".form-control");
    //returns nodelist in array shape so i will use foreach to loop on every element

    formControl.forEach((element) => {
      element.addEventListener("input", (e) => {
        e.target.value !== ""
          ? e.target.previousElementSibling.classList.remove("d-none")
          : e.target.previousElementSibling.classList.add("d-none");
      });
    });
  }, []);

  return (
    <>
      <div className="container py-5" id="contact" data-spy="scroll" data-target="#navbar-example3" data-offset="0">
        <div className="text-center">
          <h2>CONTACT ME </h2>
          <div className="mb-4">
            <span className="line"></span>
            <span>
              
              <i className="fa-solid fa-star"></i>
            </span>
            <span className="line"></span>
          </div>
        </div>
       <div className=" w-50 mx-auto ">
         <div className="my-5">
           <div className="form-text d-none">Name</div>
           <input
             type="text"
             className="form-control"
             id="exampleFormControlInput1"
             placeholder="Name"
           />
        
           <hr />
           <div className="form-text d-none">Email Adress</div>
           <input
             type="email"
             className="form-control"
             id="exampleFormControlInput1"
             placeholder="Email address"
           />
           <hr />
           <div className="form-text d-none">Phone Number</div>
           <input
             type="tel"
             className="form-control"
             id="exampleFormControlInput1"
             placeholder="Phone Number"
           />
           <hr />
         </div>
         <div className="mb-3">
           <div className="form-text d-none">Message</div>
           <textarea
             className="form-control"
             id="exampleFormControlTextarea1"
             rows="4"
             placeholder="Message"
           ></textarea>
           <hr />
         </div>
         <button className="btn p-3" style={{ background: "var(--secondColor)" , color:"#fff"}}>Send
</button>
       </div>
      </div>
    </>
  );
}
