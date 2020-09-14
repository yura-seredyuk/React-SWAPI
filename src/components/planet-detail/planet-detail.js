import React, { Component } from 'react';
import SwapiService from '../../services/swap-service';
import ErrorButton from '../error-button'
import ErrorIndicator from '../error-indicator'

import './planet-detail.css'

export default class PlanetDetail extends Component{
    swapiService = new SwapiService();

    state={
        planet:[],
        hasError:false
    }
    componentDidMount(){
        this.updatePlanet();
    }
    componentDidUpdate(prevProps){
        if(this.props.planetId !== prevProps.planetId){
            this.updatePlanet();
        }
    }
    componentDidCatch(){
        this.setState({
            hasError:true
        })
    }
    updatePlanet =()=>{
        const {planetId}=this.props;
        if(!planetId){
            return;
        } 
        this.swapiService.getPlanet(planetId)
        .then((planet)=>{
            this.setState({planet})
        })
    }
    render(){
        if(this.state.hasError){
            return <ErrorIndicator />
        }
        const {name,id,population,diameter,rotationPeriod,gravity,orbitalPeriod,terrain,surfaceWater,climate} = this.state.planet
        return(
            <div className='planet-detail jumbotron rounded'>
                <img 
                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
                    className='planet-image'
                />
                <div>
                    <h4>{name}</h4>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <span className='tern'>Population:</span>
                            <span>{population}</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Rotation Period:</span>
                            <span>{rotationPeriod}  days</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Orbital Period:</span>
                            <span>{orbitalPeriod}  days</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Diameter:</span>
                            <span>{diameter}km</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Gravity:</span>
                            <span>{gravity}</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Terrain:</span>
                            <span>{terrain}</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Surface Water:</span>
                            <span>{surfaceWater}%</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Climate:</span>
                            <span>{climate}</span>
                        </li>
                    </ul>
                    {/* <ErrorButton /> */}
                </div>
            </div>
        )
    } 
}