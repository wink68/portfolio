import styled from "styled-components";

export const Background = styled.div`
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
`;

export const Container = styled.div`
  margin: 7vh auto;
  padding: 3vh;
  width: 65vh;

  display: flex;
  align-item: center;
  background-color: #F0F8FF;
  border-radius: 2vh;
`;

export const SmallBox = styled.div`
  padding-top: 2vh;
  width: 10vh;
  height: 10vh;

  display: flex;
  justify-content: center;
  align-item: center;
  background-color: #00BFFF;
  border-radius: 2vh;
  cursor: pointer;

  transition-duration: 3s;
  transition-timing-function: ease;
  transition-delay: 0.5s;
  animation: slide-left-to-right;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  
  @keyframes slide-left-to-right {
    from {
      margin-left: 0%;
    }
    to {
      margin-left: 75%;
    }
  }
`;

export const TextBox = styled.div`
  margin: 0 1vh;

  font-weight: 600;
  color: white;
  text-align: center;
`;