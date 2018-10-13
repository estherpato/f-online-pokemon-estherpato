import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/PokeDetail.css';

class PokeDetail extends Component {
    render() {
        const { pokeArray, match } = this.props;
        if (this.props.pokeArray.length >= 1) {
            const filterID = parseInt(match.params.id);
            const pokemon = pokeArray.filter(item => item.id === filterID);
            const myPokemon = pokemon[0];

            let firstEvolution = myPokemon.evolution_chain.chain.evolves_to.length !== 0 ?
                myPokemon.evolution_chain.chain.evolves_to[0].species.name : null;
            let secondEvolution = myPokemon.evolution_chain.chain.evolves_to[0].evolves_to.length !== 0 ?
                myPokemon.evolution_chain.chain.evolves_to[0].evolves_to[0].species.name : null;

            let evolutionChain;
            if (firstEvolution !== null && myPokemon.name === myPokemon.evolution_chain.chain.species.name) {
                evolutionChain = `${myPokemon.evolution_chain.chain.species.name} evolves into ${firstEvolution}`
            } else if (secondEvolution !== null && myPokemon.name === firstEvolution) {
                evolutionChain = `${firstEvolution} evolves from ${myPokemon.evolution_chain.chain.species.name} -
                ${firstEvolution} evolves into ${secondEvolution}`
            } else if (secondEvolution === null && myPokemon.name === firstEvolution) {
                evolutionChain = `${firstEvolution} evolves from ${myPokemon.evolution_chain.chain.species.name}`
            } else if (secondEvolution !== null && myPokemon.name === secondEvolution) {
                evolutionChain = `${secondEvolution} evolves from ${firstEvolution}`
            } else {
                evolutionChain = 'This Pokemon has no evolutions! Ƶƶ(☄￣▵—▵￣)'
            }

            return (
                <Fragment>
                    <div className="details-container">
                        <h1 className="pokemon-name">{myPokemon.name}</h1>
                        <div className="pokeinfo-container">
                            <div className="pokeimg-container">
                                <img
                                    src={myPokemon.sprites.front_default}
                                    alt={`${myPokemon.name} front`}
                                    title={`${myPokemon.name} front`}
                                />
                                <img
                                    src={myPokemon.sprites.back_default}
                                    alt={`${myPokemon.name} back`}
                                    title={`${myPokemon.name} back`} />
                            </div>
                            <div className="pokeinfo">
                                <p>Height: {myPokemon.height / 10} m</p>
                                <p>Weight: {myPokemon.weight / 10} kg</p>
                                <ul>Abilites:
                        {myPokemon.abilities.map((ability, i) => {
                                        return (
                                            <li key={i} className="abilities-item">
                                                {ability.ability.name}
                                            </li>
                                        );
                                    })}
                                </ul>
                                <p className="evochain-info">{evolutionChain}</p>
                            </div>
                        </div>
                    </div>
                    <Link to="/" className="back-btn">Home</Link>
                </Fragment>
            );
        } else {
            return (
                <span>😱</span>
            );
        }
    }
}

export default PokeDetail;