import React, {Component} from 'react';
import './app.css';

import Header from '../header'
import PlanetRandom from '../planet-random'
import ItemList from '../item-list'
import PeopleDetail from '../people-detail'
import PlanetDetail from '../planet-detail'
import StarshipDetail from '../starship-detail'
import ErrorButton from '../error-button'
import ErrorIndicator from '../error-indicator'
import SwapiService from '../../services/swap-service';

export default class App extends Component{
    swapiService = new SwapiService();
    detail = null;
    state = {
        data:[],
        selectItem:2,
        hasError:false,
        contentType: 'people'

    }
    onItemSelected = (id)=>{
        this.setState({
            selectItem:id
        });
    }
    //відслідковування помилок
    componentDidCatch(){
        this.setState({
            hasError:true
        })
    }
    onContentTypeChange = (contentType) =>{
        this.setState({contentType})
        this.contentTypeSelector(contentType)
    }
    contentTypeSelector = (contentType) =>{
        console.log(contentType)
        switch (contentType) {
            case 'people': {
                this.swapiService.getAllPeople()
                    .then((data) => {
                        this.setState({data})
                    })
                this.detail = <PeopleDetail planetId={this.state.selectItem}/>
                return this.state.data
            }
            case 'starships': {
                this.swapiService.getAllStarships()
                    .then((data) => {
                        this.setState({data})
                    })
                this.detail = <StarshipDetail planetId={this.state.selectItem}/>
                return this.state.data
            }
            case 'planets': {
                this.swapiService.getAllPlanets()
                    .then((data) => {
                        this.setState({data})
                    })
                this.detail =  <PlanetDetail planetId={this.state.selectItem}/>
                return this.state.data
            }
        }
    }

    render(){
        if(this.state.hasError){
            return <ErrorIndicator />
        }
        const data = this.contentTypeSelector(this.state.contentType)
        return (
            <div className='container'>
                <Header 
                    contentType={this.state.contentType}
                    onContentTypeChange={this.onContentTypeChange}
                />
                <PlanetRandom />
                {/* <ErrorButton /> */}
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <ItemList onItemSelected={this.onItemSelected}
                            data={this.state.data}/>
                    </div>
                    <div className='col-12 col-md-6'  id="info">
                        {this.detail}
                    </div>
                </div>
            </div>
        )
    }
}