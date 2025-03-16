# module03_week08_day03

# Lab: POST Routes / Possible points: 5

## **Overview:**

In web development, POST routes refer to a type of HTTP request method used to submit data to be processed to a specified resource. Unlike GET requests that retrieve data, POST requests are designed to send data to the server to create a new resource or update an existing one. POST routes are commonly employed when dealing with forms on websites, as they allow users to submit information such as login credentials, form data, or file uploads securely.

## Objectives

Make calls from the frontend to the backend by creating POST calls to the POST routes on the [pokemon backend](https://pokeapi-ptvv.onrender.com/)

## Routes

### GET /Pokemon/

- Description: Retrieves all Pokemon stored in the database. 
- Method: GET
- URL: `https://pokeapi-ptvv.onrender.com/pokemon`

### GET Pokemon/team

- Description: Retrieves the Pokemon team stored in the database.
- Method: GET
- URL: `[https://pokeapi-ptvv.onrender.com/Pokemon/team)` 

### POST /Pokemon

- Description: Creates a new Pokemon entry in the database.
- Method: POST
- URL: `https://pokeapi-ptvv.onrender.com/Pokemon`
- MUST CONTAIN ALL FIELDS TO BUILD A POKEMON

### GET Pokemon/:id

- Description: Retrieves a specific Pokemon by its ID.
- Method: GET
- URL: `https://pokeapi-ptvv.onrender.com/Pokemon/:id`

# Task 1:

- In the same frontend that you worked on previously create a form using bootstrap components
- Create different input fields in the form so that you can put in the information that is needed in order to create a new pokemon
- Make sure that the form restricts information to the same structure laid out in the schema

# Task 2:

- Once you have properly made the form and the fields within it, now Create a button that will send a post call to the [backend server](https://pokeapi-ptvv.onrender.com/) thus adding the newly created pokemon
- Be sure to create a function that will the handle the on submit action when the button is clicked.

# Task 3: 
- Now all that is left is to test your code!
- You can use the thunder client extension in your vs code editor to test the routes that you've made and see if your code is functioning properly.
- Make sure that all of the new info that you put in is displaying properly
- After that make the pokemon display on the webpage

# Conclusion

- The end product should look like a website full of different pokemon with descriptions and pictures of the pokemon.

- Go Catch Em All!!!

![](https://media.tenor.com/6TrSeaqBHjQAAAAM/ash-ketchum-pokemon.gif)

//line 25: does Pokemon have to be capitalized here?

//Stretch
//retrieve the entire Pokedex; since there are so many Pokemon, I imagine this would affect the speed of the page loading. how can i improve that?
//add all the properties of a pokemon card
//adjust the FE to make the cards look better; maybe combine this the Pokemon React Bootstrap assignment? The size of those cards would be a better canvas
//make the card fade between the evolutions of each pokemon