import React from "react";
import styled from "styled-components";
import { Dot } from "@styled-icons/bootstrap";

const SingleDot = styled(Dot)`
  ${(props) => {}}
  color: ${(props) => props.theme.colors.thTxt};
`;

const DotIcon = ({ size = 49, ...others }) => {
  return (
    <SingleDot
      active={others.active?.toString()}
      className="testeAdd"
      size={size}
    />
  );
};

export default DotIcon;
