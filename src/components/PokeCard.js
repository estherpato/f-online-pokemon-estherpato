import React, { Component } from 'react';

class PokeCard extends Component {
    render() {
        const { name, id, image, types } = this.props
        return (
            <div className="card-container">
                <div className="img-container">
                    <img
                        src={image}
                        alt={name}
                    />
                    <div className="id-container">ID / {id}</div>
                </div>
                <div className="info-container">
                    <h2 className="poke-name">{name}</h2>
                    <ul className="class-info">
                        {types.map(type => {
                            return (
                                <li key={id}>
                                    {type}
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