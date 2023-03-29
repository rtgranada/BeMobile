import { useTheme } from "styled-components";
import React from "react";

const Inner = (props) => {
  const theme = useTheme();
  return (
    <div
      style={{
        color: `${theme.colors.dullTxt}`,
        backgroundColor: `${theme.colors.lightBackground}`,
      }}
    >
      Inner
    </div>
  );
};

export default Inner;
