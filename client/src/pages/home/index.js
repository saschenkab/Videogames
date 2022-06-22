import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../redux/actions";
import Cards from "../../components/cards";
const Home = () => {
  const dispatch = useDispatch();
  const videogamesFiltered = useSelector((state) => state.videogames);

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  return (
    <>
      <Cards videogames={videogamesFiltered} />
    </>
  );
};

export default Home;
