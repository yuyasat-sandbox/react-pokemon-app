import { useEffect } from 'react';
import './App.css';
import { getAllPokemon } from './utils/pokemon.js';

function App() {
  const initialUrl = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    const fetchPokemonData = async () => {
      let res = await getAllPokemon(initialUrl);
      console.log(res);
    }
    fetchPokemonData();
  }, [])
  return (
    <div className="App">
    </div>
  );
}

export default App;
