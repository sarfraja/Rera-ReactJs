import React from "react";
import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody } from "mdbreact";

const CardBox = () => {
  return (
    
    <MDBCardGroup style={{marginTop:'50px'}}>
    
      <MDBCard>
        <MDBCardImage src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">Publications</MDBCardTitle>
          <MDBCardText>
          See our latest publications and project management case studies.
          </MDBCardText>
          <MDBBtn color="primary" size="md">
            read more
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg" alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">Testimonials</MDBCardTitle>
          <MDBCardText>
          Take a look at what our customers had to say about us.
          </MDBCardText>
          <MDBBtn color="primary" size="md">
            read more
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src="https://mdbootstrap.com/img/Photos/Others/images/77.jpg" alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">Social Wall</MDBCardTitle>
          <MDBCardText>
          Get social with us and see what's happening on Pastor Real Estate social channels.
          </MDBCardText>
          <MDBBtn color="primary" size="md">
            read more
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
  );
}

export default CardBox;