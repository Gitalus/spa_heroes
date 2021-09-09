import React from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroeById } from '../../selectors/getHeroById';

export const HeroeScreen = () => {

    const { heroeId } = useParams();

    const hero = getHeroeById(heroeId);

    if (!hero) {
        return <Redirect to="/" />
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    return (
        <div>
            <h1>Heroe</h1>
            <hr />
            <h1>{superhero}</h1>
        </div>
    )
}
