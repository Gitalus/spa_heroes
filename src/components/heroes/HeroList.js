import React from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';


export const HeroList = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher);

    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3">
            {
                heroes.map(hero => (
                    <div
                        key={hero.id}
                        className="col"
                    >
                        {hero.superhero}
                    </div>
                ))
            }
        </div>
    )
}
