import React, { Component } from 'react';

import './item-list.css'

export default class ItemList extends Component{


    render(){
        return(
            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Luke Skywalker
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                   Dart Vader
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    R2-D2
                </li>
            </ul>
        )
    }
}