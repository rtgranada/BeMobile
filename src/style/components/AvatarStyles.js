import React from "react";
import styled from "styled-components";

const Image = styled.img`
  height: ${(props) => `${props.size}px`};
  width: ${(props) => `${props.size}px`};
  border-radius: 50%;
`;

const NoImage = styled.div`
  height: ${(props) => `${props.size}px`};
  width: ${(props) => `${props.size}px`};
  border-radius: 50%;
  background-color: #bdbdbd;
  color: #ffffff;
  line-height: ${(props) => `${props.size}px`};
  font-size: ${(props) => `${props.size / 2}px`};
  text-align: center;
`;

const Avatar = ({ name, url = "", size = 40, ...others }) =>
  url !== "" ? (
    <Image {...others} src={url} size={size} />
  ) : (
    <NoImage {...others} size={size}>
      {name.substr(0, 1)}
    </NoImage>
  );

export default Avatar;
