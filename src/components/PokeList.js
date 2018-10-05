import React, { Component } from 'react';
import PokeCard from './PokeCard.js';

class PokeList extends Component {
    render() {
        const { pokeArray } = this.props;
        return (
            <div>

                <ul>
                    {pokeArray
                    .sort((a,b) => a.id - b.id)
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
            </div>
        );
    }
}

export default PokeList;