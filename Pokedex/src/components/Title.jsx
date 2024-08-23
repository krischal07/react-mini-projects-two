import React from "react";
// import logo from "../assets/logo_pokemon.png";
import logo from "../assets/logo_pokemon.png";

const Title = () => {
  return (
    <div>
      <div className="border-4 border-red-500 w-full h-32 flex flex-col items-center h-44">
        <img src={logo} alt="" className="w-56 h-24" />
        <h1 className="text-3xl m-4 font-bold">Whos That Pokemon?</h1>
      </div>
    </div>
  );
};

export default Title;
