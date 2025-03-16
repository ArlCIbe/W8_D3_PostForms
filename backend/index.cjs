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

//fetches data from API and returns it to client
async function fetchPokemonInfo(_id = null) {

  try {
    const baseURL = 'https://pokeapi-ptvv.onrender.com';

    if (_id) {
      const response = await axios.get(`${baseURL}/pokemon`); //returns promise that'll resolve to all pokemon
      console.log('Response data:', response.data);
      return response.data;
    }
    else if(_id === 'team') {
      const response  = await axios.get(`${baseURL}/pokemon/team`); //returns promise that'll resolve to a team of random pokemon
      console.log('Response data:', response.data);
      return response.data;
    }
    else {
      const response = await axios.get(`${baseURL}/pokemon`); //returns promise that'll resolve to all pokemon
      console.log('Response data:', response.data);
      return response.data;
    }
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