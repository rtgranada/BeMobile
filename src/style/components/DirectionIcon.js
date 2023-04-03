import React from "react";
import styled from "styled-components";
import { ChevronDown } from "@styled-icons/bootstrap";

const Down = styled(ChevronDown)`
  ${(props) => {}}
  color: ${(props) =>
    props.active === "true"
      ? `${props.theme.colors.secondary}`
      : `${props.theme.colors.text}`};
  font-size: ${(props) => {
    return props.size;
  }}px;
  transform: ${(props) => (props.active === "true" ? `rotate(0.5turn)` : ``)};
  transition: all 1s;
`;

const DirectionIcon = ({ size = 18, ...others }) => {
  return (
    <Down active={others.active?.toString()} className="testeAdd" size={size} />
  );
};

export default DirectionIcon;
