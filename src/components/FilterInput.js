import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/FilterInput.css';

class FilterInput extends Component {
    render() {
        let labelClass = this.props.fillInput ? 'input-label--hidden' : 'input-label'

        return (
            <div className="input-form">
                <label
                    htmlFor="searchbar"
                    className={labelClass}
                >
                    Filter Pokemons by name...
                </label>
                <input
                    className="input"
                    type="text"
                    id="searchbar"
                    name="searchbar"
                    value={this.props.inputValue}
                    onChange={this.props.findMatches}
                />
            </div>
        );
    }
}

FilterInput.propTypes = {
    inputValue: PropTypes.string,
    findMatches: PropTypes.func.isRequired
}

export default FilterInput;