import React, { Component } from 'react';
import '../stylesheets/PokeCard.css';

class PokeCard extends Component {
    render() {
        const { name, id, image, types } = this.props
        return (
            <div className="card-container">
                <div className="img-container">
                    <img
                        src={image}
                        alt={name}
                        title={name}
                        className="img"
                    />
                    <span className="id-container">ID / {id}</span>
                </div>
                <div className="info-container">
                    <h2 className="poke-name">{name}</h2>
                    <ul className="class-info">
                        {types.map((type,i) => {
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
                </div>
            </div>
        );
    }
}

export default PokeCard;