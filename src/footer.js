import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
          <img src="/logo/logo.png" className="align-center" alt="bulamadım" height="50px" width="50px" />
            <h5 className="title">UP RERA CONSULTANT</h5>
            <p>
            We have a variety of luxury properties for sale throughout prime central London. Please contact the team directly to discuss our selection of off-market properties.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Services</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Block Management</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Property Management</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Sales</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Commercial</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;