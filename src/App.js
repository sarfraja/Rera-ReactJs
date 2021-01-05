import React from 'react';
import { render } from 'react-dom';
import { Route, Switch } from 'react-router-dom';

import Home from "./Home";
import ContactPage from "./Contact";





const App = () => {
    return(
        <>
      
        <switch>
            <Route exact path="/" component={Home}  />
            <Route path="/Contact" component={ContactPage} />
        </switch>
        
        
        
        </>
    )
}
export default App;