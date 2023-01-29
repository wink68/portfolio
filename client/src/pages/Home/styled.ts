import styled from "styled-components";

export const Background = styled.div`
  margin: 0px;
  padding: 0px;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  background-image: linear-gradient(140deg, #E0FFFF, #F0F8FF, #87CEFA, #00BFFF, #1E90FF, #191970, #4169E1);
`;

export const Layout = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  i:hover {
    color: #89CFF0;
    transform: scale(1.15);
    transition: .1s ease-in-out;
  }
`;

export const Container = styled.div`
  margin: 1vh;
  padding: 7vh 6vw !important;
  width: 100%;
  height: 74vh;

  background-color: white;
  border: none;
  border-radius: 5vh;
  overflow: hidden;
  text-shadow: 1vh 1vh 2vh rgba(0,0,0,0.2);
`;

export const nav = styled.div`
  padding: 0 1.5vw;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Home = styled.div`
  width: 100%;
  height: 100%;
  
  scroll-behavior: smooth !important;
  overflow: visible;
`;