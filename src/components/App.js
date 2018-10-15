import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import PokeDetail from './PokeDetail.js';
import '../stylesheets/App.css';

const evoChain = [];
const species = [];

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokeArray: JSON.parse(localStorage.getItem("pokemon")) || [],
            pokemonFiltered: [],
            value: '',
            fillInput: false,
        }

        this.findMatches = this.findMatches.bind(this);
        this.hideLabel = this.hideLabel.bind(this);
    }

    componentDidMount() {
        const pokemonsFromFetch = [];
        if (this.state.pokeArray.length === 0) {
            for (let i = 1; i < 26; i++) {
                fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
                    .then(res => res.json())
                    .then(data => {
                        pokemonsFromFetch.push(data);
                        this.getSpecies(data.species.url, pokemonsFromFetch)    
                    })
                    .catch(error => {
                        console.log('Hubo un problema con la petición: ' + error.message)
                    })
            }
        }
    }

    getSpecies(url, pokeArray) {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                species.push(data)
                this.getEvoChain(data.evolution_chain.url, pokeArray, species)
            })
    }

    getEvoChain(url, pokeArray, species) {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                evoChain.push(data);
                this.setPokeArray(pokeArray, species, evoChain)
            })
    }

    setPokeArray(pokeArray, species, evoChain) {
        const pokeArraySorted = pokeArray.sort((a, b) => a.id - b.id);
        const pokeSpeciesSorted = species.sort((a, b) => a.id - b.id);
        const pokeChainSorted = evoChain.sort((a, b) => a.id - b.id);
        let pokeArrayCompleted = [];
        for (let i = 0; i < pokeArraySorted.length; i++) {
            pokeArrayCompleted[i] = {
                ...pokeArraySorted[i],
                species: pokeSpeciesSorted[i],
                evolution_chain: pokeChainSorted[i]
            }

            if (pokeArrayCompleted.length === 25) {
                localStorage.setItem("pokemon", JSON.stringify(pokeArrayCompleted));
            }
        }
        this.setState({ pokemons: [...pokeArrayCompleted] })
    }

    hideLabel(event) {
        return event !== '' ? true : false;
    }

    findMatches(e) {
        const valueOnInput = e.target.value;
        const pokemonFiltered = this.state.pokeArray.filter(pokemon => {
            return pokemon.name.includes(valueOnInput.toLowerCase());
        });

        this.setState({
            pokemonFiltered: pokemonFiltered,
            fillInput: this.hideLabel(e.target.value),
            value: valueOnInput,
        })
    }

    render() {
        const { pokeArray, pokemonFiltered, value, fillInput } = this.state;
        console.log('Array para sacar info', this.state.pokeArray[18]);
        return (
            <Fragment>
                <Switch>
                    <Route
                        exact path="/"
                        render={props => <Home
                            pokeArray={pokeArray}
                            pokemonFiltered={pokemonFiltered}
                            value={value}
                            fillInput={fillInput}
                            findMatches={this.findMatches}
                        />}
                    />
                    <Route
                        path="/pokemon/:id"
                        render={(props) => <PokeDetail
                            match={props.match}
                            pokeArray={pokeArray}
                        //onClickHandler={this.handleButton}
                        />}
                    />
                </Switch>

                <div className="top-corner top-corner__left"></div>
                <div className="top-corner top-corner__right"></div>
                <div className="bottom-corner bottom-corner__left"></div>
                <div className="bottom-corner bottom-corner__right"></div>
            </Fragment>
        );
    }
}

export default App;