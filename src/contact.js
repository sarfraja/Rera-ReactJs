import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";

const ContactPage = () => {
  return (

    


    <section className="my5"  style={{ marginTop:'-3em'}} >
      <br /><br /><br /><br />
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Contact us
      </h2>
      <p className="text-center w-responsive mx-auto pb-5">
      The Real Estate (Regulation and Development) Act, 2016 is an Act of the Parliament of India which seeks to protect home-buyers as well as help boost investments in the real estate industry. The Act came into force from 1 May 2016.
      </p>
      <MDBRow>
        <MDBCol lg="5" className="lg-0 mb-4">
          <MDBCard>
            <MDBCardBody>
              <div className="form-header blue accent-1">
                <h3 className="mt-2">
                  <MDBIcon icon="envelope" /> Write to us:
                </h3>
              </div>
              <p className="dark-grey-text">
                We'll write rarely, but only the best content.
              </p>
              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="Your name"
                  iconClass="grey-text"
                  type="text"
                  id="form-name"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="Your email"
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="tag"
                  label="Subject"
                  iconClass="grey-text"
                  type="text"
                  id="form-subject"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="pencil-alt"
                  label="Icon Prefix"
                  iconClass="grey-text"
                  type="textarea"
                  id="form-text"
                />
              </div>
              <div className="text-center">
                <MDBBtn color="light-blue">Submit</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="7">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14413.162346885149!2d81.77794725414695!3d25.428546789349735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398534ad170e1f17%3A0x71479535f196f80c!2sKalindipuram%2C%20Prayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1609999416947!5m2!1sen!2sin" width="600" height="450" frameBorder="0" style="border:0;" allowFullScreen="" aria-hidden="false" tabIndex="0"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
          <MDBRow className="text-center">
            <MDBCol md="4">
              <MDBBtn tag="a" floating="true" color="blue" className="accent-1">
                <MDBIcon icon="map-marker-alt" />
              </MDBBtn>
              <p>Kalindipuram, 211011</p>
              <p className="mb-md-0">India</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating="true" color="blue" className="accent-1">
                <MDBIcon icon="phone" />
              </MDBBtn>
              <p>+91 9839333312, +91 7376333322</p>
              <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating="true" color="blue" className="accent-1">
                <MDBIcon icon="envelope" />
              </MDBBtn>
              <p>www.upreraconsultant.com</p>
              <p className="mb-md-0">uprera@gmail.com</p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section>


  );
}

export default ContactPage;