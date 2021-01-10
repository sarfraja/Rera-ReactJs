import React from "react";
import {  MDBView,MDBMask } from "mdbreact";


const Introd = () =>{
    return(
        <MDBView>
        <img
          src="/logo/introd.jpeg"
          className="img-fluid"
          alt=""
          width="1400px"
          
        />
        <MDBMask overlay="green-slight" >
           
          </MDBMask>
      </MDBView>
    )
}
export default Introd;