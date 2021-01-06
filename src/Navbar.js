import React from 'react';

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
 
  MDBContainer,
  MDBFormInline,
 
  
} from 'mdbreact';
import './ContactFormPage.css';








class Nav extends React.Component {
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
    );
  }

}

export default Nav;