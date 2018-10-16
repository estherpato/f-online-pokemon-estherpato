import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PokeCard from './PokeCard.js';
import PropTypes from 'prop-types';
import '../stylesheets/PokeList.css';

class PokeList extends Component {
    render() {
        const { pokeArray, pokemonFiltered, inputValue } = this.props;
        let arrayOnScreen = pokemonFiltered.length === 0 ? pokeArray : pokemonFiltered;

        if (pokemonFiltered.length === 0 && inputValue !== '') {
            return (
                <div
                    className="invalid-search"
                >
                    Por favor, introduce una búsqueda válida ϞϞ(๑⚈ ․̫ ⚈๑)∩
                </div>
            );
        }
        else {
            return (
                <ul className="poke-list">
                    {arrayOnScreen.map((pokemon) => {
                        return (
                            <li key={pokemon.id}>
                                <Link to={`/pokemon/${pokemon.id}`}>
                                    <PokeCard
                                        name={pokemon.name}
                                        id={pokemon.id}
                                        image={pokemon.sprites.front_default}
                                        types={pokemon.types}
                                        evolution={pokemon.species.evolves_from_species}
                                    />
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            );
        }
    }
}

PokeList.propTypes = {
    pokeArray: PropTypes.array,
    pokemonFiltered: PropTypes.array,
    inputValue: PropTypes.string,
}

export default PokeList;