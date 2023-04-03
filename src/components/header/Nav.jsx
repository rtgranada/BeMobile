import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { ContNav } from "../../style/components/NavStyles";
import Brand from "../brand/Brand";
import Switch from "./Switch";

const Nav = (props) => {
  const { title } = useContext(ThemeContext);
  return (
    <ContNav>
      <nav>
        <Link to="/">
          <Brand />
        </Link>
        <ul>
          <FontAwesomeIcon icon={faSun} />
          <Switch
            toggleTheme={props.toggleTheme}
            isDarkTheme={title === "light" ? false : true}
          />
          <FontAwesomeIcon icon={faMoon} />
        </ul>
      </nav>
    </ContNav>
  );
};

export default Nav;
