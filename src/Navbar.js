import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
      };
      this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
        collapse: !this.state.collapse,
      });
  }

  render() {
   
    
    
    return(
      <div>

        
          <header>
             
            <MDBNavbar   dark expand="md" scrolling fixed="top" style={{backgroundColor:"#2196f3"}}>
              <MDBNavbarBrand href="/">
              <img src="/logo/logo.png" className="align-center" alt="bulamadım" height="52px" width="70px" />
                  <strong>Up Rera Consultant</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={ this.onClick } />
              <MDBCollapse isOpen = { this.state.collapse } navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                      <MDBNavLink to="/">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                      <MDBNavLink to="/Contact">Contact</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                      <MDBNavLink to="/About">About</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/Catalogue">Catalogue</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="facebook-f" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="twitter" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="instagram" /></MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
        
       
      </div>
    );
  }
}

export default Nav;