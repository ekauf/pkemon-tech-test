import { pokemonArray } from "./data/pokemon.js";

const cardContainer = document.querySelector(".card-container");

const renderPokemon = (pokemon) => {
  let htmlString = "";

  pokemonArray.forEach((pokemon) => {
    console.log(pokemon);
    htmlString += ` 
    <section>
        <img src="" alt=""></img>
        <h1> </h1>
        <p> </p>
    </section>
    `;
  });

  cardContainer.innerHTML = htmlString;
};

renderPokemon();
