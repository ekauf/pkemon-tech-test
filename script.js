import { pokemonArray } from "./data/pokemon.js";

const cardContainer = document.querySelector(".card-container");

const renderPokemon = (pokemon) => {
  let htmlString = "";

  pokemonArray.forEach((pokemon) => {
    console.log(pokemon);
    htmlString += ` 
    <section>
        <img src="${pokemon.sprite}" alt="This is a Pokemon"></img>
        <h1>${pokemon.name}</h1>
        <p>${pokemon.name} (#${pokemon.id}) is a ${pokemon.types} type pokemon.</p>
    </section>
    `;
  });

  cardContainer.innerHTML = htmlString;
};

renderPokemon(renderPokemon);
