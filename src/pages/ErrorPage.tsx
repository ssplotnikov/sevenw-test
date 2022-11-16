import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();
    return (
        <div>
            <h1>Opps!</h1>
            <p>{error.statusText || error.message}</p>
        </div>
    )
}
