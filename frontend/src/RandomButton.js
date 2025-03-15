import Button from 'react-bootstrap/Button';
import PokemonCard from "./PokemonCard";
import { useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Image from 'react-bootstrap/Image';

function RandomButton() {

    const [randomPokemons, setRandomPokemons] = useState([]); //will hold the team of random Pokemon

    const [loadingPokemon, setLoadingPokemon] = useState(false); //allows me to show a loading spinner

    const [randUserMessage, setRandUserMessage] = useState(''); //shows the loading message
    
    const fetchPokemons = async() => {

        setLoadingPokemon(true);

        setRandUserMessage('Fetching Pokemon Cards...');

        try{
            const response = await fetch('https://pokeapi-ptvv.onrender.com/pokemon/team');    
            
            if (!response.ok){ //checks if response is ok before fetching the Pokemon
                throw new Error('Network response was not ok.');
            }

            const data = await response.json(); //changes response into JSON before display

            console.log('Fetched data:', data);

            setRandomPokemons(data); //actually fetches Pokemon

            setRandUserMessage(''); //clears the loading message since data has been fetched
        }
        catch(error) {
            console.error('Error:', error)

            setRandUserMessage('Failed to fetch Pokemon.');
        }
        finally{
            setLoadingPokemon(false); //clears loading spinner
        }
    }

    return (
        <div id="refresh">

            <div className='pokemon-cards'> 
                {randomPokemons.map( (pokemon) => (
                    <PokemonCard 
                        key={pokemon._id}
                        image_url={pokemon.image_url}
                        title={pokemon.title}
                        type={pokemon.type}   
                    />
                ))}
            </div>

            <Button aria-label="button to get a group of random Pokemon" onClick={fetchPokemons}>

                <Image src="./refresh.png" rounded />

            </Button>

            { loadingPokemon ? 
                (<Spinner animation='border' role='status'>
                    <span className='visually-hidden'>Pokemon team loading...</span>
                </Spinner>) : (randUserMessage && <p>{randUserMessage}</p>) 
            }
        </div>
    )
}

export default RandomButton;

/* ALTERNATIVE METHOD:
    var pokemonCardsHTML = [];

    for(var i = 0; i < pokemons.length; i++) {

        var pokemon = pokemons[i];

        var pokemonCardHTML = <PokemonCard image_url={pokemon.image_url} title={pokemon.title} type={pokemon.type} />

        pokemonCardsHTML.push(pokemonCardHTML);
    } 
*/