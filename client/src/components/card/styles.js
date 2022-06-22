import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardImage = styled.img`
  background-size: cover;
  bakground-position: center;
  width: 100%;
  height: 150px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;

  &:hover {
    transition: 0.2 all ease-out;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    position: absolute;
    height: 235px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    top: 0;
  }
`;

export const CardInfo = styled.div`
  z-index: 2;
  background-color: #38a3a5;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 16px 24px 24px 24px;

  &:hover {
    position: absolute;
    top: 0;
    padding: 16px;
    width: 100%;
  }
`;

export const CardContainer = styled.div`
  margin-right: 16px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
  background-color: #38a3a5;
  width: calc(33.3% - 52px);
  margin: 16px;
  height: 300px;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1.1, 1.1);
  }

  &:hover ${CardInfo} {
    background-color: transparent;
    position: relative;
    color: white;
  }
`;

export const ReactLink = styled(Link)`
  text-decoration: none;
`;

export const CardTitle = styled.h3`
  margin-top: 5px;
  color: #fff;
  margin-bottom: 10px;
  font-family: "Roboto", sans-serif;
  text-align: center;
`;

export const CardGenresWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CardGenre = styled.span`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  letter-spacing: 1px;
  font-family: "Roboto", sans-serif;
  margin: 5px;
  background-color: #22577a;
  padding: 3px 8px;
  border-radius: 12px;
`;
