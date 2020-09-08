import React, { Component } from 'react';
import SwapiService from '../../services/swap-service';

import Spinner from '../spinner'
import './planet-random.css'

export default class PlanetRandom extends Component{

    swapiService = new SwapiService();

    state = {
        // id:5,
        // name:null,
        // population:null,
        // rotationPeriod:null,
        // diameter:null
        planet:{},
        loading:true
    }
    // виклик функції
    // constructor(){
    //     super();
    //     this.updatePlanet();
    //     this.interval = setInterval(this.updatePlanet, 1500)
    //     clearInterval(this.interval);
    // }
    componentDidMount(){
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 1500)
 
    }
    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading:false
        })
    }
    updatePlanet = () =>{
        const id = Math.floor(Math.random()*20)+3;
        this.swapiService.getPlanet(id)
        .then(this.onPlanetLoaded)
            
            // (planet) => {
            // this.setState(
            //     {planet
            //     // id,
            //     // name:planet.name,
            //     // population:planet.population,
            //     // rotationPeriod:planet.rotation_period,
            //     // diameter:planet.diameter
            // }
            // )
        // })
    }
    render(){

        const {planet, loading} = this.state;
        const spinner = loading ? <Spinner /> : null;
        const content = !loading ? <PlanetView  planet={planet}/> : null;
        // if(loading){
        //     return <Spinner />
        // }
        return(
            <div className='planet-random jumbotron rounded'>
                {spinner}
                {content}
            </div>
        )
    } 
}

const PlanetView = ({planet}) =>{
    const {id,name, population, rotationPeriod, diameter} = planet;
    return(
        <React.Fragment>
        <img 
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
            className='planet-image'
        />
        <div>
            <h4>{name}</h4>
            <ul className="list-group">
                <li className="list-group-item">
                    <span className='tern'>Population</span>
                    <span>{population}</span>
                </li>
                <li className="list-group-item">
                    <span className='tern'>Rotation period</span>
                    <span>{rotationPeriod}</span>
                </li>
                <li className="list-group-item">
                    <span className='tern'>Diameter</span>
                    <span>{diameter}</span>
                </li>
            </ul>
        </div>
        </React.Fragment>
    )
}