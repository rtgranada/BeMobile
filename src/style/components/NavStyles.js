import styled from "styled-components";
export const Container = styled.div`
  height: 10vh;
  background: ${(props) => props.theme.colors.primary};
  transition: 1s;

  nav {
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 100%;
    margin: 0 auto;
    justify-content: space-around;
    color: #111;

    ul {
      list-style: none;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      color: ${(props) => props.theme.colors.text};

      li {
        display: inline-block;
    margin-left: 10px;
    color: ${(props) => props.theme.colors.text};
    transition: 1s;
        a {
          text-decoration: none;
          color: ${(props) => props.theme.colors.text};
          transition: 1s;
        }
      }
    }
  }


  
  }
`;
