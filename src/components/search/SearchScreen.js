import React, { useState } from 'react';
import { heroes } from '../../data/heroes';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = () => {

    const [{ hero }, handleInputChange, reset] = useForm({
        hero: ''
    });
    const [filtered, setFiltered] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (hero.length < 1) {
            setFiltered([])
            return;
        }

        let _heroesFiltered = heroes.filter((_hero) => {
            let lowerHero = hero.toLowerCase();
            let cadena = '';
            for (const att in _hero) {
                cadena += _hero[att];
            }
            return cadena.toLowerCase().includes(lowerHero);
        })

        setFiltered(_heroesFiltered);
        reset();
    };

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-4">
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            value={hero}
                            name="hero"
                            onChange={handleInputChange}
                            autoComplete="off"
                        />
                        <button
                            type="submit"
                            className="btn mt-1 w-100 btn-outline-primary"
                        >
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-8">
                    <h4>Results</h4>
                    <hr />
                    {
                        filtered.length > 0 ?
                            filtered.map((hero) => (
                                <HeroCard
                                    key={hero.id}
                                    {...hero}
                                />
                            ))
                            :
                            <p className="text-muted">Data not found</p>
                    }
                </div>
            </div>
        </div>
    )
}
