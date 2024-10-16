const pokemonSelectionList = document.querySelectorAll('.pokedev')

pokemonSelectionList.forEach(pokemon => {
    //we will need to work with a click event made by the user on the pokemon list

    pokemon.addEventListener('click', () => {
        //remove the open class only from the card that is open
        const cardPokemonOpen = document.querySelector('.open')        
        cardPokemonOpen.classList.remove('open')

        //When clicking on a Pokémon in the list, we get the ID of that Pokémon to know which card to show
        const idPokemonSelected = pokemon.attributes.id.value

        const pokemonCardIdToOpen = 'card-' + idPokemonSelected
        const cardPokemonToOpen = document.getElementById(pokemonCardIdToOpen)
        cardPokemonToOpen.classList.add('open')

        //remove the active class that marks the selected pokemon
        const pokemonActiveInListing = document.querySelector('.active')
        pokemonActiveInListing.classList.remove('active')

        //add active class on selected list item
        const pokemonSelectedInList = document.getElementById(idPokemonSelected)
        pokemonSelectedInList.classList.add('active')

    })
})