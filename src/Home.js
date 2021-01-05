import React from 'react';


import FooterPage from "./Footer";
import BlogPage from "./Content";
import ContactFormPage from "./Header";
import CollapsePage from "./Collapse";



const Home = () => {
    return(
        <>
      
        
        <ContactFormPage />
        
        <CollapsePage />
        
        <BlogPage />
        <FooterPage /> 
        
        </>
    )
}
export default Home;