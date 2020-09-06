import React, { Component } from 'react';

import './planet-detail.css'

export default class PlanetDetail extends Component{


    render(){
        return(
            <div className='planet-detail jumbotron rounded'>
                <img 
                    src="https://starwars-visualguide.com/assets/img/planets/2.jpg" 
                    className='planet-image'
                />
                <div>
                    <h4>Alderaan</h4>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <span className='tern'>Population:</span>
                            <span>2000000000</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Rotation Period:</span>
                            <span>24 days</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Orbital Period:</span>
                            <span>364 days</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Diameter:</span>
                            <span>12,500km</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Gravity:</span>
                            <span>1 Standard</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Terrain:</span>
                            <span>Grasslands, Mountains</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Surface Water:</span>
                            <span>40%</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Climate:</span>
                            <span>Temperate</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    } 
}