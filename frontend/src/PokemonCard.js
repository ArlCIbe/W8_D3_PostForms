import React from "react";

function PokemonCard(props){

    var BackColor

    if (props.type == "Fire") {BackColor = "red"}
    if (props.type == "Grass") {BackColor = "green"}
    if (props.type == "Electric") {BackColor = "yellow"}
    if (props.type == "Water") {BackColor = "blue"}
    if (props.type == "Fairy") {BackColor = "pink"}
    if (props.type == "Bug") {BackColor = "black"}
    if (props.type == "Poison") {BackColor = "purple"}
    if (props.type == "Ground") {BackColor = "brown"}
    if (props.type == "Normal") {BackColor = "brown"}

    return (
        
        <div className="pokemonCard">

            <img src={props.image_url} alt={'${props.title} image'} />

            <h3 className="pokemonName">{props.title}</h3>

            <div className="footer" style={{backgroundColor: BackColor}}>

                <div className="pokemonType"> 
                    
                    <h3>{props.type}</h3>

                </div>

            </div>

        </div>
    );
}

export default PokemonCard;

/* Alternate methods:
    //mapping eliminates multiple conditional statements
    const typeColors = {
            Fire: "red",
            Grass: "green",
            Electric: "yellow",
            Water: "blue",
            Fairy: "pink",
            Bug: "black",
            Poison: "purple",
            Ground: "brown",
            Normal: "brown",
    }; 

    //destructured props are easier to read
    ({ title, image_url, type })
    */