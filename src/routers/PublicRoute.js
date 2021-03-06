import React from 'react';
import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types';

export const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => {
    return (
        <Route {...rest}
            // Basicamente cuando a Route le pasamos el componente, tb le mandamos
            // los props de history, match y location.
            // Si lo renderizamos condicional dentro de un route, los props serán
            // pasamos a la funcción callback
            component={(props) => (
                (!isAuthenticated) ?
                    <Component {...props} />
                    : <Redirect to="/" />
            )}
        />
    )
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}