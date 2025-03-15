//MODULES
const express = require('express');
//sets app up to define routes and middleware and to handle HTTP requests in Node.js apps

const cors = require('cors'); //allows FE & BE to communicate when they're served from different origins

const axios = require('axios'); //JS library used to manage HTTP requests

const app = express(); //actually creates app

const corsOptions = { //designates what will be allowed to access the API
origin: '*', //allows all domains to access the API
methods: ['GET', 'POST', 'PUT', 'DELETE'],
};

app.use(cors(corsOptions)); //enables CORS in express apps

const port = 3001; //specifies the network port the server will be listening to for incoming HTTP requests

async function fetchPokemonInfo() {
try {
  const pokeURLS = [ //Pokemon API URL array will allow me to fetch the URLs all at once
    'https://pokeapi-ptvv.onrender.com/pokemon',
    'https://pokeapi-ptvv.onrender.com/pokemon/team',
    'https://pokeapi-ptvv.onrender.com/pokemon/:id'
  ];

  const pokeRequests = pokeURLS.map(pokeURL => axios.get(pokeURL)); //creates a new array containing the promises fetched from the URLs in pokeURLS[]

  const pokeResponses = await Promise.all(pokeRequests); //creates a promise that returns an array of results only when ALL its promises resolve

  const data = pokeResponses.map(response => response.data); //creates a new array containing the actual data received from the URLs

  console.log(data);

  return data;
} 
catch (error) {
  console.error('Error fetching data:', error);

  throw error; //rethrows the error so it can be adressed at higher levels of code, if needed
}
}

let pokemonData = null; //will store the fetched data

app.get('/', (req, res) => { /* '/' --> all domains can access your API; default CORS configuration */
  if (pokemonData === null) {
    return res.status(503).json({ error: 'The data is stil being fetched. Try again later.' });
  }

  if (!pokemonData) {
    return res.status(500).json({ error: 'An error occurred while fetching the data.' });
  }

  res.json(pokemonData); //route handler function; sends response in JSON format
});

const server = app.listen(port, () => { 
console.log(`Server is running on http://localhost:${port}`)
})

server.on('error', (error) => {
console.error('There was an error starting the server:', error);

return;
});

fetchPokemonInfo()
.then(data => {
  pokemonData = data;

  console.log('All data fetched successfully')

})

.catch(error => console.error('Error in fetching data:', error));