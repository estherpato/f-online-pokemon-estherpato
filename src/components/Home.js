import React, { Component, Fragment } from 'react';
import PokeList from './PokeCard.js';
import FilterInput from './FilterInput.js';


class Home extends Component {
    render() {
        const { pokeArray, pokemonFiltered, value, fillInput } = this.state;
        console.log('Array para sacar info', this.state.pokeArray[1]);
        if (this.state.pokeArray.length < 25) {
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
                <Fragment>
                    <main>
                        <FilterInput
                            findMatches={this.findMatches}
                            fillInput={fillInput}
                            inputValue={value}
                        />
                        <PokeList
                            pokeArray={pokeArray}
                            pokemonFiltered={pokemonFiltered}
                            inputValue={value}
                        />
                    </main>
                </Fragment>
            );
        }
    }
}


export default Home;