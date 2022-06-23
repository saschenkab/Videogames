import styled from "styled-components";

export const LoaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const Scanner = styled.div`
  h1 {
    color: transparent;
    font-size: 2rem;
    position: relative;
    overflow: hidden;
  }

  h1::before {
    content: "Loading...";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    border-right: 4px solid #38a3a5;
    overflow: hidden;
    color: #57cc99;
    animation: load91371 2s linear infinite;
  }

  @keyframes load91371 {
    0%,
    10%,
    100% {
      width: 0;
    }

    10%,
    20%,
    30%,
    40%,
    50%,
    60%,
    70%,
    80%,
    90%,
    100% {
      border-right-color: transparent;
    }

    11%,
    21%,
    31%,
    41%,
    51%,
    61%,
    71%,
    81%,
    91% {
      border-right-color: #38a3a5;
    }

    60%,
    80% {
      width: 100%;
    }
  }
`;
