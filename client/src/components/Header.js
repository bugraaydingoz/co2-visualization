import React from 'react'

export const Header = (props) => {
    return (
        <div className="header">
            <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">CO2 VISUALIZATION</a>
                </div>
            </nav>

            <div className="header-text">
                <h1 className="subtitle is-1">
                    CO2 Visualization
            </h1>
                <h2 className="subtitle is-6">
                    It is a simple web app where random values are getting pulled every 10 seconds.
            </h2>
            </div>
        </div>
    )
}