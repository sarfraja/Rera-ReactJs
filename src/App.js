import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from "./Home";
import ContactPage from "./Contact";
import Nav from "./Navbar";
import FooterPage from "./Footer";





const App = () => {
    return(
        <>
      <Nav />
        <Switch>
            <Route exact path="/" component={Home}  />
            <Route path="/Contact" component={ContactPage} />
        </Switch>
        <FooterPage /> 
        
        </>
    )
}
export default App;