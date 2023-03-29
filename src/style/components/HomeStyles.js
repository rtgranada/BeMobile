import styled from "styled-components";
export const Container = styled.div`
  * {
    padding: 0;
    margin: 0;
  }

  width: 100%;
  //height: 90vh;
  //background: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-itens: center;
  transition: 1s;

  nav {
    height: fit-content;
    display: flex;
    //align-items: center;
    width: 100%;
    //min-height: 100%;
    margin: 0 auto;
    justify-content: space-between;
    color: ${(props) => props.theme.colors.text};
  }
`;

export const SearchBox = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #cdcdcd;
  border-radius: 10px;
  cursor: pointer;
  background: ${(props) => props.theme.colors.inputBg};

  input {
    // border-radius: 3%;
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
`;
