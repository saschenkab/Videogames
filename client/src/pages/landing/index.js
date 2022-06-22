import React from "react";
import { Background, Shadow, Edge, Front, Botoncito } from "./styles";

const Landing = () => {
  return (
    <Background>
      {/* <button>
          <span class="shadow"></span>
          <span class="edge"></span>
          <span class="front text"> Click me</span>
        </button>
      </> */}
      <Botoncito>
        <Shadow />
        <Edge />
        <Front to="/home">Play</Front>
      </Botoncito>
    </Background>
  );
};

export default Landing;
