import React from "react";
import './Home.css'

import logo from '../assets/avataaars.svg'
const Home = ()=>{

    return(<>

<header>
    <div className="container d-flex justify-content-center align-items-center flex-column h-100">
        <img src={logo} alt="boy" className="my-3" />
<h1>START REACT
</h1>
<div>
            <span className="line2"></span>
            <span>
              {" "}
              <i className="fa-solid fa-star"></i>
            </span>
            <span className="line2"></span>
          </div><p>Graphic Artist - Web Designer - Illustrator

</p>
    </div>
</header>

</>)

}

export default Home ;