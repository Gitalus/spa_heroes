import React, { useState } from 'react';
import queryString from 'query-string'
import { useLocation } from 'react-router';
import { heroes } from '../../data/heroes';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    console.log(queryString.parse(location.search));

    const [{ hero }, handleInputChange, reset] = useForm({
        hero: ''
    });
    const [filtered, setFiltered] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`?q=${hero}`)
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
