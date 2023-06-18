import React from "react";
import '../styles/navBar.css'
function Navbar(){
    return(
        <div className="main-div">
            <div className="logo">
                <span>Razor</span>
            </div>
            <div className="list">
                <li>Product</li>
                <li>Resoures</li>
                <li>Support</li>
                <li>Pricing</li>
                <li>Blog</li>
            </div>
            <div className="buttons">
                <li>Sign in</li>
                <li className="req-btn" >Request Demo</li>
            </div>
        </div>
    )
}

export default Navbar