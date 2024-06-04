import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [chosen, setChosen] = useState(false);
  const [pokemonName, setPokemonName] = useState("ditto");
  const [pokemonData, setPokemonData] = useState({
    name: "",
    img: "",
    id: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
  });

  const searchPokemon = () => {
    const response = fetch(`https://pokeapi.co/api/v2/pokemon/torchic`)
      .then((response) => response.json())
      .then((response) => setPokemonName(response.sprites.front_default));
  };
  searchPokemon();
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <p>Input the pokemon you want to search for! </p>
        <input />
        <img src={pokemonName} />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>Hello World</p>
    </>
  );
}

export default App;
