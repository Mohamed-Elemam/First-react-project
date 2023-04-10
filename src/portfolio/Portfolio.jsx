import "./Portfolio.css";
import cabin from "../assets/cabin.png";
import cake from "../assets/cake.png";
import game from "../assets/game.png";
import safe from "../assets/safe.png";
import circus from "../assets/circus.png";
import submarine from "../assets/submarine.png";
import React, { useState } from "react";

const Portfolio = () => {
  //images + titles
  let images = [
    {
      source: cabin,
      name: "LOG CABIN",
      index: 0,
    },
    {
      source: cake,
      name: "TASTY CAKE ",
      index: 1,
    },
    {
      source: circus,
      name: "CIRCUS TENT ",
      index: 2,
    },
    {
      source: game,

      name: "CONTROLLER  ",
      index: 3,
    },
    {
      source: safe,
      name: "LOCKED SAFE ",
      index: 4,
    },
    {
      source: submarine,
      name: "SUBMARINE ",
      index: 5,
    },
  ];

  const [modalImageSrc, setModalImageSrc] = useState("");
  const [modalTitle, setModalTitle] = useState("");


  return (
    <>
      <div className="section py-5" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2>PORTFOLIO </h2>
            <div className="mb-4">
              <span className="line"></span>
              <span>
                {" "}
                <i className="fa-solid fa-star"></i>
              </span>
              <span className="line"></span>
            </div>
          </div>
          <div className="row">
            {images.map((image) => (
              <div className="col-md-6 col-lg-4 mb-3" key={image.index}>
                <div className="parent">
                  <img
                    src={image.source}
                    data-index={image.index}
                    alt={image.name}
                  />
                  <div
                    className="layer"
                    data-toggle="modal"
                    data-target=".bd-example-modal-lg"
                    onClick={() => {
                      setModalImageSrc(image.source);
                      setModalTitle(image.name);
                    }}
                  >
                    <i className="fas fa-plus "></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      

      <div
        className="modal fade bd-example-modal-lg"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div
              className="  my-3 ms-auto"
              
            >
              {/*  */}
              <span
                className=" close d-block me-5  "
                data-dismiss="modal"
                aria-label="Close" style={{ textAlign: "left", color: "var(--secondColor)", fontSize: "40px",cursor:"pointer" }}
              >
                <span aria-hidden="true">
                  <i className="fas fa-x ms-auto "></i>
                </span>
              </span>
            </div>
            <div>
              <br />
              <h2 className="text-center modalTitle"> </h2>

              <div className="text-center my-2">
                <h2 className="modalTitle">{modalTitle}</h2>
                <div className="mb-4">
                  <span className="line"></span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span className="line"></span>
                </div>
              </div>
            </div>
            <div className="modal-body mx-auto text-center">
              <img src={modalImageSrc} alt="img" className=" modalImage w-75 py-3 " />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia neque assumenda ipsam nihil, molestias magnam,
                recusandae quos quis inventore quisquam velit asperiores, vitae?
                Reprehenderit soluta, eos quod consequuntur itaque. Nam.
              </p>
            </div>
            <div className="text-center my-3">
              <button
                type="button"
                className="btn "
                data-dismiss="modal"
                style={{ background: "var(--secondColor)" }}
              >
                  
                  <i className="fas fa-xmark px-2" ></i>

                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
