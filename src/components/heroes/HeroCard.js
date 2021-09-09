import React from 'react'

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
    return (
        <div className="col">
            <div className="card">
                <div className="row g-0">
                    <div className="col-4">
                        <img
                            src={`./assets/heroes/${id}.jpg`}
                            alt={superhero}
                            className="card-img" />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            {
                                (alter_ego !== characters) &&
                                <p className="text-card">{characters}</p>
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
