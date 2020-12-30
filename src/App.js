import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";

import FooterPage from "./footer";
import BlogPage from "./content";
import ContactFormPage from "./header";
// import CollapsePage from "./collapse";








function App(){
    return (
        <div><ContactFormPage />
        <BlogPage /><FooterPage />

         </div>
    )
}
export default App;

