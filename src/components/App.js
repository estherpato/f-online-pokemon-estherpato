import React, { Component, Fragment } from 'react';
import PokeList from './PokeList.js';
import FilterInput from './FilterInput.js';
import '../stylesheets/App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokeArray: [],
        }

    }
    componentDidMount() {
        // const url = 'http://pokeapi.salestock.net/api/v2/pokemon/';
        // const pokemonsFromFetch = [];
        // for (let i = 1; i < 5; i++) {
        //     fetch(url + i)
        //         .then(res => res.json())
        //         .then(data => {
        //             pokemonsFromFetch.push(data);
        //             this.setState({ pokeArray: [...pokemonsFromFetch] })
        //         })
        // }

        this.setState({ pokeArray: [...this.props.pokemons] })
    }

    render() {
        console.log('estado', this.state.pokeArray)
        if (this.state.pokeArray.length === 0) {
            return (
                <div className="loading-container">
                <img
                    src="https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/f/f6/Pikachu_Themed_Page.gif"
                    alt="Pikachu gif de espera"
                />
                <span className="loading-text">Cargando...</span>
                </div>
            );
        } else {
            return (
                <Fragment>
                    <FilterInput/>
                    <PokeList 
                        pokeArray={this.state.pokeArray}
                    />
                </Fragment>
            );
        }
    }
}

export default App;
