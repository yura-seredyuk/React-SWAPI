import React, { Component } from 'react';
import SwapiService from '../../services/swap-service';

import './starship-detail.css'

export default class StarshipDetail extends Component{
    swapiService = new SwapiService();
    
    state={
        starship:[],
        hasError:false
    }
    componentDidMount(){
        this.updateStarship();
    }
    componentDidUpdate(prevProps){
        if(this.props.planetId !== prevProps.planetId){
            this.updateStarship();
        }
    }
    updateStarship =()=>{
        const {planetId}=this.props;
        if(!planetId){
            return;
        } 
        this.swapiService.getStarship(planetId)
        .then((starship)=>{
            this.setState({starship})
        })
    }


    render(){
        const {id,name,model,manufacturer,clas,cost,speed,hyperdriveRating,MGLT,length,cargoCapacity,mimimumCrew,passengers} = this.state.starship;
        const Speed = speed == 'n/a'?'n/a':speed+'km/h';
        return(
            <div className='starship-detail jumbotron rounded'>
                <img 
                    src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} 
                    className='starship-image'
                />
                <div>
                    <h4>{name}</h4>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <span className='tern'>Model:</span>
                            <span>{model}</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Manufacturer:</span>
                            <span>{manufacturer}</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Class:</span>
                            <span>{clas}</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Cost:</span>
                            <span>{cost} credits</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Speed:</span>
                            <span>{Speed}</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Hyperdrive Rating:</span>
                            <span>{hyperdriveRating}</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>MGLT:</span>
                            <span>{MGLT}</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Length:</span>
                            <span>{length}m</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Cargo Capacity:</span>
                            <span>{cargoCapacity} metric tons</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Mimimum Crew:</span>
                            <span>{mimimumCrew}</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Passengers:</span>
                            <span>{passengers}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    } 
}