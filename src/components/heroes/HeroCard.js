import React from 'react';
import { Link } from 'react-router-dom';
import { heroImages } from '../../helpers/heroImages';


export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters,
}) => {
    return (
        <div className="card">
            <div className="row g-0">
                <div className="col-4">
                    <img
                        src={heroImages(`./${id}.jpg`).default}
                        alt={superhero}
                        className="card-img"
                    />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>
                        {
                            (alter_ego !== characters) &&
                            <p className="text-card">{characters}</p>
                        }
                        <p><small className="text-muted">{first_appearance}</small></p>

                        <Link to={`./hero/${id}`}>Más</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
