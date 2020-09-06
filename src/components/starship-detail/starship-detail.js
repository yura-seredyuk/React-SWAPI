import React, { Component } from 'react';

import './starship-detail.css'

export default class StarshipDetail extends Component{


    render(){
        return(
            <div className='starship-detail jumbotron rounded'>
                <img 
                    src="https://starwars-visualguide.com/assets/img/starships/5.jpg" 
                    className='starship-image'
                />
                <div>
                    <h4>Sentinel-class landing craft</h4>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <span className='tern'>Model:</span>
                            <span>Sentinel-class landing craft</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Manufacturer:</span>
                            <span>Sienar Fleet Systems, Cyngus Spaceworks</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Class:</span>
                            <span>Landing Craft</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Cost:</span>
                            <span>240,000 credits</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Speed:</span>
                            <span>1,000km/h</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Hyperdrive Rating:</span>
                            <span>1.0</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>MGLT:</span>
                            <span>70</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Length:</span>
                            <span>38m</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Cargo Capacity:</span>
                            <span>180 metric tons</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Mimimum Crew:</span>
                            <span>5</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Passengers:</span>
                            <span>75</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    } 
}