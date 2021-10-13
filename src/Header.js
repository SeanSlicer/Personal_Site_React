import React, { useState } from "react";

import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

export default function Header(props) {

  return (
    <header>
      <nav className="navbar">
        <button className="navbar-brand">ReactJS</button>
      </nav>
    </header>
  );
}
