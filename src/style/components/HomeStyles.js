import styled from "styled-components";
import { screenSmallerThan } from "../themes/util";
export const Container = styled.div`
  * {
    padding: 0;
    margin: 0;
  }
  align-self: center;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-itens: center;
  transition: 1s;

  nav {
    height: fit-content;
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 0 auto;
    justify-content: space-between;
    color: ${(props) => props.theme.colors.text};

    ${screenSmallerThan.desktop`${(props) =>
      `flex-direction: column; align-items: start;`}`}

    h4 {
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 28px;
      align-self: center;
      ${screenSmallerThan.desktop`${(props) => `align-self: start;`}`}
    }
  }
`;

export const SearchBox = styled.div`
  width: 30%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #cdcdcd;
  border-radius: 4px;
  cursor: pointer;
  background: ${(props) => props.theme.colors.inputBg};

  input {
    width: 100%;
    border: none;
    outline: none;
    padding: 8px 10px;
    color: ${(props) => props.theme.colors.inputTxt};
    background: ${(props) => props.theme.colors.inputBg};
  }

  span {
    padding: 1rem;
    color: ${(props) => props.theme.colors.inputTxt};
  }

  ${screenSmallerThan.desktop`${(props) => `width: 100%; margin-top: 20px;`}`}
`;
