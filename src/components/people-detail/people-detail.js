import React, { Component } from 'react';

import './people-detail.css'

export default class PeopleDetail extends Component{


    render(){
        return(
            <div className='people-detail jumbotron rounded'>
                <img 
                    src="https://starwars-visualguide.com/assets/img/characters/3.jpg" 
                    className='person-image'
                />
                <div>
                    <h4>R2-D2</h4>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <span className='tern'>Birth Year:</span>
                            <span>33BBY</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Species:</span>
                            <span>Droid</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Height:</span>
                            <span>96cm</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Mass:</span>
                            <span>32kg</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Gender:</span>
                            <span>n/a</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Hair Color:</span>
                            <span>n/a</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Skin Color:</span>
                            <span>White, Blue</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Homeworld:</span>
                            <span>Naboo</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    } 
}