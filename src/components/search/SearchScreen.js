import React, { useMemo, useState } from 'react';
import queryString from 'query-string'
import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const [{ searchText }, handleInputChange, reset] = useForm({
        searchText: q
    });

    const filtered = useMemo(() => getHeroesByName(searchText), [q]);

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)
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
                            value={searchText}
                            name="searchText"
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
