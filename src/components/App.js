import React, { Component } from 'react';
import '../stylesheets/App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokeArray: [],
        }


    }
    componentDidMount() {
        const url = 'http://pokeapi.salestock.net/api/v2/pokemon/';
        const emptyArray = []

        for (let i = 1; i < 4; i++) {
            fetch(url + i)
                .then(res => res.json())
                .then(data => {
                    emptyArray.push(data)
                })
        }
        console.log('poke call', emptyArray)
    }



    render() {
        return (
            <div className="App">

            </div>
        );
    }
}

export default App;
