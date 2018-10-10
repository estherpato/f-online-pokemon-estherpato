import React, { Component } from 'react';
import '../stylesheets/FilterInput.css';

class FilterInput extends Component {
    render() {
        let labelClass = this.props.fillInput ? 'input-label--hidden' : 'input-label'

        return (
            <div className="input-form">
                <label
                    for="searchbar"
                    className={labelClass}
                >
                    Filtra Pokemons por nombre...
                </label>
                <input
                    className="input"
                    type="text"
                    id="searchbar"
                    name="searchbar"
                    onChange={this.props.findMatches}
                />
            </div>
        );
    }
}

export default FilterInput;