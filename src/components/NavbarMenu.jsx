import React, { Fragment } from "react";
import {BsFillCloudSunFill} from 'react-icons/bs'
import '../App.css'
const NavbarMenu = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-primary nav">
        <div className="container-fluid">
          <p className="navbar-brand m-0">
            <BsFillCloudSunFill className="mx-2 mb-2"/>
              Clime-Proyect
          </p>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavbarMenu;
