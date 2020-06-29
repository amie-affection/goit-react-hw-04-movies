import React from "react";
import { NavLink } from "react-router-dom";
import HomePage from "../homePage/HomePage";
import MoviePage from "../moviePage/MoviePage";

const Header = () => {
  return (
    <header>
      <nav>
        <ul
          style={{
            display: "Flex",
            listStyle: "none",
          }}
        >
          <li>
            <NavLink
              exact
              to="/"
              style={{ padding: "10px", display: "block", color: "black" }}
              activeStyle={{ color: "red" }}
            >
              <HomePage />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              style={{ padding: "10px", display: "block", color: "black" }}
              activeStyle={{ color: "red" }}
            >
              <MoviePage />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
