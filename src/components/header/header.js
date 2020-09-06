import React, { Component } from 'react';

import './header.css'

export default class Header extends Component{


    render(){
        return(
            <nav class="header navbar navbar-expand-lg navbar-dark">
                <a class="navbar-brand" href="#">Star DB</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarColor02">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">People<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Planets</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Starships</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}