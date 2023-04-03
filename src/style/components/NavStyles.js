import styled from "styled-components";
export const ContNav = styled.div`
  background: #1C1C1C;
  transition: 1s;
  margin-bottom: 32px;

  nav {
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    max-height: 60px;
    margin: 0px auto;
    padding: 0 5% 0 5%;    
    justify-content: space-between;
    color: #111;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);

    h4 {
      font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      color: ${(props) => props.theme.colors.icons};

      li {
        display: inline-block;
        margin-left: 10px;
   
      }
    }
  }
  }
`;
