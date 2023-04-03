import React from "react";
import { Logo } from "../../style/components/Logo.js";
import BeMobileLogo from "../../assets/imgs/logo.png";

const Brand = (props) => {
  return (
    <Logo>
      <img src={BeMobileLogo} alt="Logo" />
    </Logo>
  );
};

export default Brand;
