import React, { Component } from 'react';
import '../stylesheets/FilterInput.css';

class FilterInput extends Component {
    render() {
        return (
            <div className="input-form">
                <label for="searchbar" className="input-label">Filtra Pokemons por nombre...</label>
                <input
                    className="input"
                    type="text"
                    id="searchbar"
                    name="searchbar"
                    placeholder="Filtra Pokemons por nombre..."
                    onChange={this.props.findMatches}
                />
            </div>
        );
    }
}

export default FilterInput;