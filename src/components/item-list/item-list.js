import React, { Component } from 'react';
import SwapiService from '../../services/swap-service';

import './item-list.css'

export default class ItemList extends Component{
    swapiService = new SwapiService();

    state = {
        planetList:null
    }
    componentDidMount(){
        this.swapiService.getAllPlanets()
        .then((planetList)=>{
            this.setState({planetList})
        })
    }

    render(){
        return(
            <ul className="list-group">
                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                    Luke Skywalker
                </li>
                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                   Dart Vader
                </li>
                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                    R2-D2
                </li>
            </ul>
        )
    }
}