import React from "react";
import { navLinks } from "../constants";

const Navbar = () => (
  <nav>
    <div>
      <h3>
        Siboria<h3>.</h3>
      </h3>
    </div>
    <ul>
      {navLinks.map((nav, index) => (
        <li>
          <a href="">{nav.title}</a>
        </li>
      ))}
    </ul>
    <div>
      <button>Our Collections</button>
    </div>
  </nav>
);

export default Navbar;
