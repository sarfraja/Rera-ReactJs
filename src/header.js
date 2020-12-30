import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBFormInline,
  MDBCard,
  MDBCardBody,
  MDBInput
} from 'mdbreact';
import './ContactFormPage.css';
import logo from "./logo.png" ;

class ContactFormPage extends React.Component {
  state = {
    collapseID: ''
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  componentDidMount() {
    document.querySelector('nav').style.height = '65px';
  }

  componentWillUnmount() {
    document.querySelector('nav').style.height = 'auto';
  }

  render() {
    const { collapseID } = this.state;
    const navStyle = { marginTop: '0px' };
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.toggleCollapse('navbarCollapse')}
      />
    );
    return (
      <div id='contactformpage'>
        <Router>
          <div>
            <MDBNavbar
              style={navStyle}
              color='deep-purple darken-4'
              dark
              expand='md'
              fixed='top'
              scrolling
              transparent
            >
              <MDBContainer>
                <MDBNavbarBrand>
                <img src="/logo/logo.png" className="align-center" alt="bulamadım" height="50px" width="50px" />
                  <strong className='white-text'>UP RERA CONSULTANT</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler
                  onClick={this.toggleCollapse('navbarCollapse')}
                />
                <MDBCollapse id='navbarCollapse' isOpen={collapseID} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBNavLink to='/'>Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to='/contact'>Contact</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to='/Address'>Address</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <MDBNavItem>
                      <MDBFormInline waves>
                        <div className='md-form my-0'>
                          <input
                            className='form-control mr-sm-2'
                            type='text'
                            placeholder='Your Postcode'
                            aria-label='Search'
                          />
                        </div>
                      </MDBFormInline>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {collapseID && overlay}
          </div>
        </Router>

        <MDBView>
          <MDBMask overlay='indigo-strong' />
          <MDBContainer
            style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
            className='d-flex justify-content-center align-items-center'
          >
            
            <MDBRow>
              <div className='white-text text-center text-md-left col-md-6 mt-xl-5 mb-5'>
                <h1 className='display-4 font-weight-bold'>Property Sales</h1>
                <hr className='hr-light' />
                <h6 className='mb-4'>
                We have a variety of luxury properties for sale throughout prime central London. Please contact the team directly to discuss our selection of off-market properties.
                </h6>
                <MDBBtn outline color='white'>
                  Learn More
                </MDBBtn>
              </div>
              <MDBCol md='6' xl='5' className='mb-4'>
                <MDBCard className='dark-grey-text'>
                  <MDBCardBody className='z-depth-2'>
                    <h3 className='dark-grey-text text-center'>
                      <strong>Write to us:</strong>
                    </h3>
                    <hr />
                    <MDBInput label='Your name' icon='user' />
                    <MDBInput label='Your email' icon='envelope' />
                    <MDBInput
                      label='Your message'
                      icon='pencil-alt'
                      type='textarea'
                      rows='3'
                    />
                    <div className='text-center mt-3 black-text'>
                      <MDBBtn color='indigo'>Send</MDBBtn>
                      <hr />
                      
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>


        
       
       




      </div>
    );
  }
}

export default ContactFormPage;