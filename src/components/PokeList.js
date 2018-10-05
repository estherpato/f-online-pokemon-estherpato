import React, { Component } from 'react';
import PokeCard from './PokeCard.js';
import '../stylesheets/PokeList.css';

class PokeList extends Component {
    render() {
        const { pokeArray, pokeArrayFiltered } = this.props;
        if (pokeArrayFiltered.length === 0) {
            return (
                <ul className="poke-list">
                    {pokeArray
                        .sort((a, b) => a.id - b.id)
                        .map((pokemon) => {
                            return (
                                <li key={pokemon.id}>
                                    <PokeCard
                                        name={pokemon.name}
                                        id={pokemon.id}
                                        image={pokemon.sprite.front_default}
                                        types={pokemon.types}
                                    />
                                </li>
                            );
                        })}
                </ul>
            );
        }
        else {
            return (
                <ul className="poke-list">
                    {pokeArrayFiltered
                        .sort((a, b) => a.id - b.id)
                        .map((pokemon) => {
                            return (
                                <li key={pokemon.id}>
                                    <PokeCard
                                        name={pokemon.name}
                                        id={pokemon.id}
                                        image={pokemon.sprite.front_default}
                                        types={pokemon.types}
                                    />
                                </li>
                            );
                        })}
                </ul>
            );
        }
    }
}

export default PokeList;