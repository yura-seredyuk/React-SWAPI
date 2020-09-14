import React, { Component } from 'react';
import SwapiService from '../../services/swap-service';
import ErrorButton from '../error-button'
import ErrorIndicator from '../error-indicator'

import './people-detail.css'

export default class PeopleDetail extends Component{
    swapiService = new SwapiService();
    
    state={
        people:[],
        hasError:false
    }

    componentDidMount(){
        this.updatePeople();
    }
    componentDidUpdate(prevProps){
        if(this.props.planetId !== prevProps.planetId){
            this.updatePeople();
        }
    }
    updatePeople =()=>{
        const {planetId}=this.props;
        if(!planetId){
            return;
        } 
        this.swapiService.getPeople(planetId)
        .then((people)=>{
            this.setState({people})
        })
    }
    componentDidCatch(){
        this.setState({
            hasError:true
        })
    }
    render(){
        const {id,name,birthYear,height,mass,gender,hairColor,skinColor} = this.state.people;
        return(
            <div className='people-detail jumbotron rounded'>
                <img 
                    src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} 
                    className='person-image'
                />
                <div>
                    <h4>{name}</h4>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <span className='tern'>Birth Year:</span>
                            <span>{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Height:</span>
                            <span>{height}cm</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Mass:</span>
                            <span>{mass}kg</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Gender:</span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Hair Color:</span>
                            <span>{hairColor}</span>
                        </li>
                        <li className="list-group-item">
                            <span className='tern'>Skin Color:</span>
                            <span>{skinColor}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    } 
}