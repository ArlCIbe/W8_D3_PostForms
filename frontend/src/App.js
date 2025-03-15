import './App.css';
import Header from './Header';
import PokemonCard from './PokemonCard';
import RandomButton from "./RandomButton";
import CreateButton from "./CreateButton";
import PokeForm from "./PokeForm";
import { useState } from "react";

function App() {
  const [pokemons, setPokemons] = useState([
    {
        _id: "659d88b6d44184e7d92ad1d6",
        image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png",
        title: "Diglett",
        description: "It lives about one yard underground, where it feeds on plant roots. It sometimes appears aboveground. ",
        type: "Ground"
    },
    {
        _id: "659d88b6d44184e7d92ad1d6",
        image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png",
        title: "Diglett",
        description: "It lives about one yard underground, where it feeds on plant roots. It sometimes appears aboveground. ",
        type: "Ground"
    },
    {
        _id: "659d88b6d44184e7d92ad1d6",
        image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png",
        title: "Diglett",
        description: "It lives about one yard underground, where it feeds on plant roots. It sometimes appears aboveground. ",
        type: "Ground"
    },
    {
        _id: "659d88b6d44184e7d92ad1d6",
        image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png",
        title: "Diglett",
        description: "It lives about one yard underground, where it feeds on plant roots. It sometimes appears aboveground. ",
        type: "Ground"
    },
    {
        _id: "659d88b6d44184e7d92ad1d6",
        image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png",
        title: "Diglett",
        description: "It lives about one yard underground, where it feeds on plant roots. It sometimes appears aboveground. ",
        type: "Ground"
    },
    {
        _id: "659d88b6d44184e7d92ad1d6",
        image_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png",
        title: "Diglett",
        description: "It lives about one yard underground, where it feeds on plant roots. It sometimes appears aboveground. ",
        type: "Ground"
    }
])

let pokemonCardsHTML = []; //will store PokemonCard components

for(let i = 0; i < pokemons.length; i++) { //iterates over pokemons[]
    
  const pokemon = pokemons[i]; //enables access to pokemons[] element @ the current index; pokemon is the temporary variable used for the pokemon object in the current iteration

  let pokemonCardHTML = //stores the properties of each individual pokemon necessary for display 
    <PokemonCard 
      key={pokemon._id}
      image_url={pokemon.image_url} 
      title={pokemon.title} 
      type={pokemon.type} 
    />

  pokemonCardsHTML.push(pokemonCardHTML); //adds each PokemonCard to pokemonCardsHTML[]
}
/* ALTERNATIVE TO ABOVE: cleaner, acts directly on pokemons[]
  const pokemonCardsHTML = pokemons.map(pokemon => (
      <PokemonCard 
        key={pokemon._id} // Add a unique key for each child in a list
        image_url={pokemon.image_url} 
        title={pokemon.title} 
        type={pokemon.type} 
      />
  )); 
*/

  return (
    
    <div className="App">

        <Header />

        <RandomButton />

        <PokeForm />

        <CreateButton /> {/*inline display; create button and random button in their own row */}

    </div>
  );
}

export default App;