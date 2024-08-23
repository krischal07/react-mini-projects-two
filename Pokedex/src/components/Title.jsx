import React from "react";
// import logo from "../assets/logo_pokemon.png";
import logo from "../assets/logo_pokemon.png";

const Title = () => {
  return (
    <div className="border-4 border-red-500 w-full h-32 flex justify-center">
      <img src={logo} alt="" className="w-56 h-24" />
    </div>
  );
};

export default Title;
