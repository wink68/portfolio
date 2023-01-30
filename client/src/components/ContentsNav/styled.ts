import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 1.5vh;
  padding: calc(0px + 0.1vw);
  width: fit-content;
  block-size: fit-content;
  display: flex;

  background-color: white;
  border-radius: 5vh;
  box-shadow: 2px 2px 10px #808080;
  & > * {
    margin: calc(0px + 1.0vw);
    justify-content: center;
    align-items: center;
    color: #318CE7;
  }
  #home {
    margin-right: calc(0px - 0.5vw);
  }
  #profile {
    margin-right: calc(0px - 0.5vw);
  }
`;