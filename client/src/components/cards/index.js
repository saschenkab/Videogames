import React from "react";
import Card from "../card";
import styled from "styled-components";

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Cards = ({ videogames }) => {
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
        <div>
          <h1>No hay juegos</h1>
        </div>
      )}
    </div>
  );
};

export default Cards;
