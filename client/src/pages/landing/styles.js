import { Link } from "react-router-dom";
import background from "../../common/images/background.gif";
import styled from "styled-components";

export const Front = styled(Link)`
  display: block;
  position: relative;
  padding: 8px 20px;
  border-radius: 12px;
  font-size: 1.1rem;
  color: white;
  background: hsl(134deg, 75%, 72%);
  will-change: transform;
  transform: translateY(-4px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  text-decoration: none;
  font-family: "VT323", monospace;
  font-size: 30px;
  text-shadow: 0 0 2px rgb(87, 204, 153);

  &:active {
    color: #22577a;
  }
`;

export const Shadow = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: hsl(0deg 0% 0% / 0.25);
  will-change: transform;
  transform: translateY(2px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
`;

export const Edge = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: linear-gradient(
    90deg,
    rgba(87, 204, 153, 1) 0%,
    rgba(47, 111, 83, 1) 8%,
    rgba(47, 111, 83, 1) 92%,
    rgba(87, 204, 153, 1) 100%
  );
`;

export const Background = styled.div`
  background: url(${background});
  background-size: cover;
  background-position: center;
  overflow: hidden;
  height: 100vh;
  position: relative;
`;

export const Botoncito = styled.button`
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  transition: filter 250ms;
  user-select: none;
  touch-action: manipulation;
  text-decoration: none;
  top: 50%;
  left: 50%;

  &:hover {
    filter: brightness(110%);
  }

  &:hover ${Front} {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  &:active ${Front} {
    transform: translateY(-2px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  &:hover ${Shadow} {
    transform: translateY(4px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  &:active ${Shadow} {
    transform: translateY(1px);
    transition: transform 34ms;
  }

  &::focus:not(:focus-visible) {
    outline: none;
  }
`;
