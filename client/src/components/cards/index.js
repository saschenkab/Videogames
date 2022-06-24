import React from "react";
import Card from "../card";
import { useSelector } from "react-redux";
import Loader from "../loader";
import sad from "../../common/images/sad.gif";
import { MessageWrapper, CardsWrapper, Message, Gif } from "./styles";

const Cards = ({ videogames }) => {
  const loading = useSelector((state) => state.loading);

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  return (
    <div>
      {Array.isArray(videogames) && videogames.length > 0 ? (
        <CardsWrapper>
          {videogames.map((videogame) => (
            <Card
              key={videogame.id}
              id={videogame.id}
              name={videogame.name}
              image={videogame.image}
              genres={videogame.genres}
            />
          ))}
        </CardsWrapper>
      ) : (
        <MessageWrapper>
          <Message>No games Found</Message>
          <Gif src={sad} alt="" />
        </MessageWrapper>
      )}
    </div>
  );
};

export default Cards;
