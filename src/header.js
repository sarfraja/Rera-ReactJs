import React from 'react';

import {
 
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBFormInline,
  MDBCard,
  MDBCardBody,
  MDBInput,
  
} from 'mdbreact';
import './ContactFormPage.css';








class ContactFormPage extends React.Component {
  state = {
    collapseID: ''
  };

 

  render() {
    
    
    return (
      <div id='contactformpage'>
        
          
        

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