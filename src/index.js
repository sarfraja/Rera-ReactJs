import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ContactPage from "./Contact";

import registerServiceWorker from './registerServiceWorker';




ReactDOM.render(<div>
   <BrowserRouter>
   <App />
   
   </BrowserRouter>
    
 
    
    </div>, document.getElementById('root'));



registerServiceWorker();