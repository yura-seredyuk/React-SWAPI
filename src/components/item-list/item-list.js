import React, { Component } from 'react';
import SwapiService from '../../services/swap-service';

import './item-list.css'

export default class ItemList extends Component{
    swapiService = new SwapiService();

    render(){
        const list=this.props.data.map((item)=>{
            return(
                <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                    key = {item.id}
                    onClick={()=>this.props.onItemSelected(item.id)}
                >
                    <a className="item-link" href="#info">{item.name}</a>
                </li>
            )
        })
        return(
            <ul className="list-group">
                {list}
            </ul>
        )
    }
}
