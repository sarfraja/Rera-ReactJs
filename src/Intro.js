import React from "react";
import {  MDBView,MDBMask } from "mdbreact";


const Intro = () =>{
    return(
      
        <MDBView>
          <br />
        <img
          src="/logo/intro.jpeg"
          className="img-fluid"
          alt=""
          width="1400px"
          style={{marginTop:'50px'}}
        />
        <MDBMask overlay="green-light" >
           
          </MDBMask>
      </MDBView>
    )
}
export default Intro;