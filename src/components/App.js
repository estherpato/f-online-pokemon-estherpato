import React, { Component, Fragment } from 'react';
import PokeList from './PokeList.js';
import FilterInput from './FilterInput.js';
import '../stylesheets/App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokeArray: [],
            pokeArrayFiltered: [],
        }

        this.findMatches = this.findMatches.bind(this);

    }

    componentDidMount() {
        const pokemonsFromFetch = [];
        for (let i = 1; i < 26; i++) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
                .then(res => res.json())
                .then(data => {
                    pokemonsFromFetch.push(data);
                    this.setState({ pokeArray: [...pokemonsFromFetch] })
                })
                .catch(error => {
                    console.log('Hubo un problema con la petición: ' + error.message)
                })
        }
    }

    findMatches(e) {
        const valueOnInput = e.target.value;
        const pokemonFiltered = this.state.pokeArray.filter(pokemon => {
            return pokemon.name.includes(valueOnInput.toLowerCase());
        })
        this.setState({ pokeArrayFiltered: pokemonFiltered })
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
                        />
                        <PokeList
                            pokeArray={this.state.pokeArray}
                            pokeArrayFiltered={this.state.pokeArrayFiltered}
                        />
                    </main>
                    
                    <div className="deco1"></div>
                    <div className="deco2"></div>
                    <footer className="mofletes">
                        <div className="deco3"></div>
                        <div className="deco4"></div>
                    </footer>
                </Fragment>
            );
        }
    }
}

export default App;
