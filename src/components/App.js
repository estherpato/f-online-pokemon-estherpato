import React, { Component, Fragment } from 'react';
import PokeList from './PokeList.js';
import FilterInput from './FilterInput.js';
import '../stylesheets/App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokeArray: JSON.parse(localStorage.getItem("lastRequest")) || [],
            pokeArrayFiltered: [],
            evolutionChain: JSON.parse(localStorage.getItem("chain")) || [],
            value: '',
            fillInput: false,
        }

        this.findMatches = this.findMatches.bind(this);
        this.hideLabel = this.hideLabel.bind(this);
    }

    componentDidMount() {
        const pokemonsFromFetch = [];
            for (let i = 1; i < 26; i++) {
                fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
                    .then(res => res.json())
                    .then(data => {
                        pokemonsFromFetch.push(data);
                        this.getSpecies(data.species.url)
                        
                        // if (pokemonsFromFetch.length === 25) {
                        //     // remember localStorage only supports strings
                        //     localStorage.setItem("lastRequest", JSON.stringify(pokemonsFromFetch));
                        // }
                        this.setState({ pokeArray: [...pokemonsFromFetch] });
                    })
                    .catch(error => {
                        console.log('Hubo un problema con la petición: ' + error.message)
                    })
        }
    }

    getSpecies(url) {
        fetch(url)
            .then(res => res.json())
            .then(data => this.getEvoChain(data.evolution_chain.url))
    }

    getEvoChain(url) {
        const evoChain = [];
        fetch(url)
            .then(res => res.json())
            .then(data => {
                evoChain.push(data.chain);
                console.log('2:', evoChain)
                if (evoChain.length === 25) {
                    localStorage.setItem("chain", JSON.stringify(evoChain));
                }
                this.setState({ evolutionChain: [...evoChain] }, () => console.log('3:', evoChain))
            })
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
            pokeArrayFiltered: pokemonFiltered,
            fillInput: this.hideLabel(e.target.value),
            value: valueOnInput,
        })
    }

    render() {
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
                            fillInput={this.state.fillInput}
                            inputValue={this.state.value}
                        />
                        <PokeList
                            pokeArray={this.state.pokeArray}
                            pokeArrayFiltered={this.state.pokeArrayFiltered}
                            inputValue={this.state.value}
                        />
                    </main>

                    <div className="top-corner top-corner__left"></div>
                    <div className="top-corner top-corner__right"></div>
                    <div className="bottom-corner bottom-corner__left"></div>
                    <div className="bottom-corner bottom-corner__right"></div>
                </Fragment>
            );
        }
    }
}

export default App;