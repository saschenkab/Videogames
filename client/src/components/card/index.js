import {
  CardContainer,
  ReactLink,
  CardImage,
  CardInfo,
  CardTitle,
  CardGenresWrapper,
  CardGenre,
} from "./styles";

const Card = ({ image, name, genres }) => {
  return (
    <>
      <CardContainer>
        <ReactLink to={`/detail/${name}`}>
          <CardImage src={image} alt="" />

          <CardInfo>
            <CardTitle>{name}</CardTitle>
            <CardGenresWrapper>
              {genres?.map((genre) => (
                <CardGenre key={genre}>{genre}</CardGenre>
              ))}
            </CardGenresWrapper>
          </CardInfo>
        </ReactLink>
      </CardContainer>
    </>
  );
};

export default Card;
