import React from 'react';
import { render } from 'react-dom';
import ContactFormPage from './Header';

const nav = () => {
    render(
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
                      <MDBNavLink  to="/contact">Contact</MDBNavLink>
                     
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to='/address'>Address</MDBNavLink>
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
    )
}

export default nav;