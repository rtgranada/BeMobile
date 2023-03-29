import styled from "styled-components";
export const Container = styled.div`
  height: 10vh;
  background: #1C1C1C;
  transition: 1s;

  nav {
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 100%;
    margin: 0 auto;
    justify-content: space-between;
    color: #111;

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
