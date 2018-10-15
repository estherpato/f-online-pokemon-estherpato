import React, { Component } from 'react';
import PokeList from './PokeList.js';
import FilterInput from './FilterInput.js';
import PropTypes from 'prop-types';

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

Home.propTypes = {
    inputValue: PropTypes.string || PropTypes.number,
    findMatches: PropTypes.func.isRequired,
    fillInput: PropTypes.bool,
    pokeArray: PropTypes.array.isRequired,
    pokemonFiltered: PropTypes.array.isRequired,
    value: PropTypes.string
}


export default Home;