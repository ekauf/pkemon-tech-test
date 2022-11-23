import { pokemonArray } from "./data/pokemon.js";
const cardContainer = document.querySelector(".card-container");

const renderPokemon = (pokemon) => {
  let htmlString = "";

  pokemonArray.forEach((pokemon) => {
    console.log(pokemon);
    htmlString += `
      <section class="card">
          <img src="${
            pokemon.sprite
          }" alt="This is a Pokemon" class="card__image"></img>
          <div class="card__content">
          <h1 class="card__heading">${
            pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
          }</h1>
          <p class="card__text">${
            pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
          } (#${pokemon.id}) is a ${pokemon.types.join(" & ")} type pokemon.</p>
          </div>
      </section>
      `;
  });

  cardContainer.innerHTML = htmlString;
};

renderPokemon(renderPokemon);
