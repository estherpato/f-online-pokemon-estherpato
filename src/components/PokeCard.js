import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/PokeCard.css';

class PokeCard extends Component {
    render() {
        const { name, id, image, types, evolution } = this.props;
        let evolvesFromName = evolution !== null ? `Evolves from ${evolution.name}` : '';
        return (
            <div className="card-container">
                <div className="img-container">
                    <img
                        src={image}
                        alt={name}
                        title={name}
                        className="poke-img"
                    />
                    <span className="id-container">ID / {id}</span>
                </div>
                <div className="info-container">
                    <p className="poke-name">{name}</p>
                    <ul className="class-info">
                        {types.map((type, i) => {
                            return (
                                <li
                                    key={i}
                                    className={`class-info__item ${type.type.name}`}
                                >
                                    {type.type.name}
                                </li>
                            );
                        })}
                    </ul>
                    <div className="evolution-info">
                        <span
                            className="evolution-info__text"
                        >
                            {evolvesFromName}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

PokeCard.propTypes = {
    name: PropTypes.string,
    id: PropTypes.number,
    image: PropTypes.string,
    types: PropTypes.array,
    evolution: PropTypes.object,
}

export default PokeCard;