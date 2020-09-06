import React from 'react';
import './app.css';

import Header from '../header'
import PlanetRandom from '../planet-random'
import ItemList from '../item-list'
import PeopleDetail from '../people-detail'
import PlanetDetail from '../planet-detail'
import StarshipDetail from '../starship-detail'

//import HeaderApp

const App = () => {
    return (
        <div className='container'>
            {/*header*/}
            <Header />
            {/*random planet*/}
            <PlanetRandom />
            <div className='row'>
                <div className='col-6'>
                    {/*item list*/}
                    <ItemList />
                </div>
                <div className='col-6'>
                    {/*persone details*/}
                    <PeopleDetail />
                    <PlanetDetail />
                    <StarshipDetail />
                </div>
            </div>
        </div>
    )
}

export default App;