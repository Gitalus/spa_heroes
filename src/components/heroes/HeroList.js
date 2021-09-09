import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';


export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-2 g-lg-3 animate__animated animate__fadeIn">
            {
                heroes.map(hero => (
                    <div
                        key={hero.id}
                        className="col"
                    >
                        <HeroCard {...hero} />
                    </div>
                ))
            }
        </div>
    )
}
