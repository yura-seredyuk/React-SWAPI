import React from 'react';
import './app.css';

import PlanetRandom from '../planet-random'

//import HeaderApp

const App = () => {
    return (
        <div className='container'>
            {/*header*/}
            {/*random planet*/}
            <PlanetRandom />
            <div className='row'>
                <div className='col-6'>
                    {/*item list*/}
                </div>
                <div className='col-6'>
                    {/*persone details*/}
                </div>
            </div>
        </div>
    )
}

export default App;