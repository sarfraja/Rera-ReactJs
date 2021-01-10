import React from 'react';



import BlogPage from "./Content";
import ContactFormPage from "./Header";
import CollapsePage from "./Collapse";
import Intro from "./Intro";
import Introd from "./Introd";
import CardBox from "./Card"

const Home = () => {
    return(
        <>
      
        <Intro />
        <ContactFormPage />
        <CardBox />
        <CollapsePage />
        
        <BlogPage />
        <Introd />
        
        </>
    )
}
export default Home;