import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul
          style={{
            display: "Flex",
            listStyle: "none",
            marginBottom: "0px",
          }}
        >
          <li>
            <NavLink
              exact
              to="/"
              style={{ padding: "10px", display: "block", color: "black" }}
              activeStyle={{ color: "red" }}
            >
              <h2>Home</h2>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              style={{ padding: "10px", display: "block", color: "black" }}
              activeStyle={{ color: "red" }}
            >
              <h2>Movie</h2>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
