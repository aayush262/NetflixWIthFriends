import React from "react";
import GoogleAuth  from "./GoogleAuth";
import logo from './../images/logo 1.png';


const Header = () => {
    return <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <span className="ml-3 text-xl"><img style={{maxWidth:'33%'}} src={logo} /></span>
        
      </a>
     
      <div className="md:ml-auto mr-8 inline-flex items-center bg-gray-100 border-0 focus:outline-none hover:bg-gray-200 rounded text-white mt-4 md:mt-0" >
        <GoogleAuth />
      </div>
    </div>
  </header>
  
}

export default Header;