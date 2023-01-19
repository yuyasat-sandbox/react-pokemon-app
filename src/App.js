import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import { getAllPokemon, getPokemon } from './utils/pokemon.js';

function App() {
  const initialUrl = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      let res = await getAllPokemon(initialUrl);

      loadPokemon(res.results);
      setLoading(false);
    }
    fetchPokemonData();
  }, [])
  const loadPokemon = async (data) => {
    // Promise.allの中には配列を入れる。すべてfetchが終わるまで待つ
    let _pokemonData = await Promise.all(
      data.map((pokemon) => {
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    )
    setPokemonData(_pokemonData);
  };
  console.log(pokemonData)
  return (
    <div className="App">
      {loading ? (
        <h1>ロード中・・・</h1>
      ) : (
        <div className='pokemonCardContainer'>
          {pokemonData.map((pokemon, i) => {
            return <Card key={i} pokemon={pokemon} />
          })}
        </div>
      )}
    </div>
  );
}

export default App;
