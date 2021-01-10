import React, { Component } from "react";
import { MDBBtn, MDBCollapse } from "mdbreact";


class CollapsePage extends Component {
state = {
  collapseID: ""
}

toggleCollapse = collapseID => () => {
  this.setState(prevState => ({
    collapseID: prevState.collapseID !== collapseID ? collapseID : ""
  }));
}

render() {
  return (
      <>
       
      <div className="container"
      >
        <br />
        
      <MDBBtn
        color="primary"
       
        onClick={this.toggleCollapse("Collapse")}
        style={{ marginBottom: "1rem" }}>



      Why Sell with us +
    </MDBBtn>
    <MDBCollapse id="Collapse" isOpen={this.state.collapseID}>
      <div >
       <center><h3>Why Sell with Up Rera Consultant.</h3>
        <p>With our unique marketing platform and distinguished brand positioning, we maximize the potential return from the sale of your home.</p>
        <h3>Up Rera Consultant.</h3>
        <p>Showcase your home to qualified homebuyers on our exclusive network of the Uttar Pradesh most authoritative news, lifestyle, financial and real estate media.</p>
        <h3>Fuelled by Innovation</h3>
        <p>Bring the story of your home to life through innovative digital marketing and transformative new technology.</p>
         <h3>Unlock Your Home’s Value</h3>
         <p>Your home is a foundation for financial security and wealth, as well as a life well lived. <br />
Through distinctive brand positioning, media exclusivity and trail-blazing technology, Up Rera Consultant elevates your property positioning and real estate marketing to maximize the returns from your home sale.
</p>
         <h3>Marketing the Unique</h3>
         <p>Each home has a unique story.  Utilizing industry-leading photography, videography, augmented and virtual reality, and digital and traditional media, we artfully craft that story to attract qualified homebuyers and real estate investors.
A Global Showcase<br />
In a connected world, your home’s buyer could be across the street – or across the continent. Our real estate marketing platform reaches buyers locally and Online Platform, Up Rera Consultant extends the highest caliber of service and marketing to every client, regardless of your property’s size, neighborhood or price point. 
</p>
<h3>Trusted Real Estate Advisors</h3>
<p>Our real estate advisors offer in-depth knowledge, exemplify professionalism and deliver attentive service tailored to your needs.  </p>
</center> 
</div>
          
        </MDBCollapse><br />
    <MDBBtn
      color="primary"
      onClick={this.toggleCollapse("Collapse1")}
      style={{ marginBottom: "1rem" }}
    >
      Why Buy with us +
    </MDBBtn>
        <MDBCollapse id="Collapse1" isOpen={this.state.collapseID}>
        
       <center>
      <h2>Why Buy With Up Rera Consultant.</h2>
       <p>Only an expert can help you create more value from your home purchase. We help ensure that the home you buy is a solid foundation for your financial security, as well as the lifestyle you desire.</p>
    <h2>Trusted Real Estate Advisors</h2>
    <p>Up Rera Consultant is trusted by the up some  sophisticated homebuyers and investors.  We are market leaders who have helped thousands build wealth through real estate.</p>
      <h2>A Tradition of Service</h2>
      <p>Our Experience in tradition of exceptional service. Our team offer personalized attention tailored to your needs, regardless of the neighborhood or price of your desired home.</p>
        <h2>Buying a Home with Up Rera Consultant.</h2>
        <p>Confidence and Clarity<br /><br />
        In an information-rich world, there is no shortage of real estate data and news; the challenge is in knowing how this information can be used to your advantage when buying a home. At Up rera Consultant, understanding your personal and financial goals is our first priority. From there, we empower you with market insight and strategic advice so that you can make decisions with confidence.

        </p>
        <h2>Secure Your Future</h2>
        <p>We help maximize the long-term value of your home with negotiation skills and strategies that help secure your home at an optimal price given today’s market conditions.</p>
        <h2>Unlock Property Value</h2>
        <p>If buying your next home depends on the sale of a current one, Sotheby’s International Realty Canada helps you to maximize the return from your home sale with our global marketing platform and distinguished brand positioning.</p>
        <h2>Specialized Experts in Every Neighbourhood</h2>
        <p>Up Rera Consultant  extends the highest caliber of service to every client, regardless of the size, neighborhood or price point of your home. we have top agents in your neighborhood of interest that can help.</p>
          <h2>Complimentary Service for Homebuyers</h2>  
          <p>Our services for homebuyers are complimentary and at minimum cost to you.</p>   
          <h2>Trusted Real Estate Advisors</h2>  
          <p>Up Rera Consultant is the #1 most trusted brand in residential real estate & commercial. Our reputation has earned the repeat business of Uttar Pradesh most discerning real estate buyers and investors.</p>
        <h2>Leadership Speaks Volumes</h2>
        <p>By dedicating ourselves to extending attentive and personalized service to clients buying homes across every price point.</p>
        </center>
      </MDBCollapse><br />
        <MDBBtn
      color="primary"
      onClick={this.toggleCollapse("Collapse2")}
      style={{ marginBottom: "1rem" }}
    >
      The Rental Process +
    </MDBBtn>
        <MDBCollapse id="Collapse2" isOpen={this.state.collapseID}>
         <center><h2>The Rental Process</h2>
        <img src="/logo/rental.png" className="align-center" alt="bulamadım" height="500px" width="700px" />
        <h2>Step 1:   Property Valuation</h2>
        <p>Let expert agents take a look at your property and determine the highest achievable rent in line with market rents. Our experience will guarantee that your property won't stand empty for long.<br />
        This is why we consistently achieve the asking price across all our clients properties.
        </p>
        <h2>Step 2: Choose an agent</h2>
        <p>Upon choosing Up Rera Consultant team you can count on a professional team, which will work hard for you seven days a week to market your property via our web-site, all major national and international property portals, as well as our extensive client network.</p>
       <h2>Step 3:  Clean & prepare</h2>
       <p>The more presentable a property the more rent it will fetch. As Uttar Pradesh market is maturing, tenants have become more discerned. Therefore make sure you have your property professionally cleaned inside.</p>
        <h2>Step 4:  Market the property</h2>
        <p>Too often you find properties advertised where image and the individual property don't match. We will put together an honest description of your property highlighting its selling points and include photos showing it in its best light.</p>
        <h2>Step 5: Viewings</h2>
        <p>Our RERA licensed agents will take potential tenants around your property at a time that suits them. Meaning we are available during evenings and weekends as well as our normal working hours. We don't just send anyone but an agent with in-depth knowledge on your property; prospective tenants are less likely to deal with an agency, which looks like they have no idea, what they are talking about. A professional knowledgeable area specialist with a good attitude and general market knowledge instill trust into a client which is crucial for making that all important lease agreement.</p>
        <h2>Step 6:  Negotiate an offer</h2>
        <p>Keeping your minimum requirements in mind we will try and get you the best offer. However, if we feel that the property will move slowly i.e. in an area of low demand/oversupply we may suggest you to be flexible with the numbers of cheques for example, reducing rent can also be an option if there is a risk of the property standing empty for too many weeks / months.</p>
        <h2>Step 7:  Tenant screening</h2>
        <p>We will then vet the interested party; ask for passport ID, Address proof and 2 photograph, and in the case that the tenant is a company, a copy of their company trade license, passport of the head of the company. Of course our agent dealing with the tenant will also be able to give you his personal feedback on how they came across i.e. likely to look after your property, We will also understand how big the family is and what profession they are in and whether they have pets or not.</p>
        <h2>Step 8:  Agreeing to let</h2>
        <p>Once you agree to the offer, we will collect a security deposit from the prospective tenant.</p>
        <h2>Step 9:  Signing tenancy agreement</h2>
        <p>We will provide you and the tenant with a draft copy of the contract and should there be any additional conditions to be added by either party then we will do so accordingly. The contract will also feature specifics about how the maintenance of the property will be taken care of, and the terms of payment from tenant to landlord. We will collect the full amount of the rent payments and pass them on to the landlord before we hand over the keys to the tenant. </p>
        </center>
        </MDBCollapse>

        </div>
      </>
    );
  }
}

export default CollapsePage;