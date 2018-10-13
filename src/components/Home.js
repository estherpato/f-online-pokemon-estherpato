import React, { Component, Fragment } from 'react';
import PokeList from './PokeList.js';
import FilterInput from './FilterInput.js';

class Home extends Component {
    render() {
        const { pokeArray, pokemonFiltered, value, fillInput, findMatches } = this.props;

        if (pokeArray.length < 25) {
            return (
                <div className="loading-container">
                    <img
                        src="https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/f/f6/Pikachu_Themed_Page.gif"
                        alt="Pikachu gif de espera"
                    />
                    <span className="loading-text">
                        Cargando tus 25 Pokemons...
                    </span>
                </div>
            );
        } else {
            return (
                    <main>
                        <FilterInput
                            findMatches={findMatches}
                            fillInput={fillInput}
                            inputValue={value}
                        />
                        <PokeList
                            pokeArray={pokeArray}
                            pokemonFiltered={pokemonFiltered}
                            inputValue={value}
                        />
                    </main>
            );
        }
    }
}

export default Home;