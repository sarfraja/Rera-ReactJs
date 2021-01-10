import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from "./Home";
import ContactPage from "./Contact";
import Nav from "./Navbar";
import FooterPage from "./Footer";
import About from "./About";
import Catalogue from "./Catalogue";




const App = () => {
    return(
        <>
      <Nav />
        <Switch>
            <Route exact path="/" component={Home}  />
            <Route path="/Contact" component={ContactPage} />
            <Route path="/About" component={About} />
            <Route path="/Catalogue" component={Catalogue} />
        </Switch>
        <FooterPage /> 
        
        </>
    )
}
export default App;