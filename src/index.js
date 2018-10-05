import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './stylesheets/Fonts.css';
import './stylesheets/Settings.css';

const pokemons = [
    { "id": 1, "name": "bulbasaur", "types": ["poison", "grass"], "evolution": null, "sprite": {"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"} },
    { "id": 2, "name": "ivysaur", "types": ["poison", "grass"], "evolution": "bulbasaur", "sprite": {"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"} },
    { "id": 3, "name": "venusaur", "types": ["poison", "grass"], "evolution": "ivysaur", "sprite": {"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"} },
    { "id": 4, "name": "charmander", "types": ["fire"], "evolution": null, "sprite": {"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"} },
    { "id": 5, "name": "charmeleon", "types": ["fire"], "evolution": "charmander","sprite": {"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"} },
    { "id": 6, "name": "charizard", "types": ["flying", "fire"], "evolution": "charmeleon", "sprite": {"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"} },
    { "id": 7, "name": "squirtle", "types": ["water"], "evolution": null, "sprite": {"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"} },
    { "id": 8, "name": "wartortle", "types": ["water"], "evolution": "squirtle", "sprite": {"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"} },
    { "id": 9, "name": "blastoise", "types": ["water"], "evolution": "wartortle", "sprite": {"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"} },
    { "id": 10, "name": "caterpie", "types": ["bug"], "evolution": null, "sprite": {"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"} }
];


ReactDOM.render(<App pokemons={pokemons}/>, document.getElementById('root'));
