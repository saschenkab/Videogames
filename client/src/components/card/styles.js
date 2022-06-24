import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;
export const CardTitle = styled.h3`
  margin-top: -1px;
  color: black;
  font-family: "Roboto", sans-serif;
  text-align: center;
`;
export const CardImage = styled.img`
  background-size: cover;
  bakground-position: center;
  width: 100%;
  height: 180px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;

  @media (max-width: 900px) {
    height: 150px;
  }
  @media (max-width: 800px) {
    height: 120px;
  }

  @media (max-width: 600px) {
    height: 100px;
  }
`;

export const CardContainer = styled.div`
  margin-right: 16px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
  width: calc(33.3% - 150px);
  margin: 16px;
  height: 270px;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 0px 18px -8px rgba(81, 59, 86, 0.75);
  background: #fff;

  @media (max-width: 900px) {
    width: calc(33.33% - 120px);
    height: 200px;
  }

  @media (max-width: 800px) {
    width: calc(33.33% - 90px);
    height: 180px;
  }

  @media (max-width: 680px) {
    width: calc(33.33% - 60px);
    margin: 8px;
    height: 180px;
  }

  &:hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(0.9, 0.9);
  }

  &:hover ${CardInfo} {
    position: sticky;
    overflow: hidden;
  }

  &:hover ${CardImage} {
    transition: 0.5s all ease-out;
    transform: scale(2);
    background-size: auto;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;

    @media (max-width: 900px) {
      transform: scale(2.1);
    }

    @media (max-width: 800px) {
      transform: scale(2.3);
    }

    @media (max-width: 600px) {
      transform: scale(2.5);
    }
  }

  &:hover ${CardTitle} {
    color: white;
  }
`;

export const ReactLink = styled(Link)`
  text-decoration: none;
`;

export const CardGenresWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const CardGenre = styled.span`
  text-transform: uppercase;
  font-size: 9px;
  font-weight: 500;
  color: #fff;
  letter-spacing: 1px;
  font-family: "Roboto", sans-serif;
  margin-right: 5px;
  margin-bottom: 3px;
  background-color: rgba(81, 59, 86, 0.8);
  padding: 3px 8px;
  border-radius: 12px;
`;
