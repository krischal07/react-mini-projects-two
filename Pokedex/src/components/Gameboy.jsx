import React, { useEffect, useState } from "react";
import "../components/Gameboy.css";
const Gameboy = () => {
  const [pokedata, setPokeData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
      const data = await response.json();
      //   console.log(response);

      setPokeData(data);
      console.log(pokedata);
    };
    fetchData();
    // console.log(pokedata.name);
  }, []);

  return (
    <div className="gamecontainer border-4 border-yellow-400 flex justify-center">
      <div className="gameboy bg-red-500 w-96 h-[500px] flex flex-col items-center">
        <img src={pokedata.sprites.front_default} alt="" />
        <h1 className="text-2xl m-4 font-bold">{pokedata.name}</h1>
      </div>
      <div className="corner"></div>
    </div>
  );
};

export default Gameboy;
