import styled from "styled-components";

export const Container = styled.div`
  padding: calc(0px + 0.1vw);
  width: fit-content;
  block-size: fit-content;
  display: flex;

  background-color: white;
  border-radius: 5vh;
  & > * {
    margin: calc(0px + 0.8vw);
    justify-content: center;
    align-items: center;
    color: #318CE7;
  }
  box-shadow: 2px 2px 10px rgba(0,0,0,1);
`;