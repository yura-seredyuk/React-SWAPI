import React, { Component } from 'react';

import './header.css'

export default class Header extends Component{
    listItems = [
        {name: 'people', label: 'People'},
        {name: 'planets', label: 'Planets'},
        {name: 'starships', label: 'Starships'}
    ]
    state = {
        showHide:''
    }
    onShowHide = ()=>{
        this.setState({
            showHide:this.state.showHide==''?'show':''
        });
        console.log(this.state.showHide)
    }
    render(){
        const {contentType,onContentTypeChange} = this.props;
        const listItems = this.listItems.map(({name,label}) => {
            const isActive = contentType === name;
            const classN = isActive ? 'active': '';
            return (
                <li className={`nav-item ${classN}`}
                    key={name}
                    onClick={()=>{onContentTypeChange(name); 
                    this.onShowHide()}}>
                    <a className="nav-link" href="#">{label}</a>
                </li>
            );
        })
        return(
            <nav className="header navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href="#">Star DB</a>
                <button className="navbar-toggler" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarColor02" 
                        aria-controls="navbarColor02" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                        onClick = {()=>{this.onShowHide()}}
                        >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse ${this.state.showHide} navbar-collapse`} id="navbarColor02">
                    <ul className="navbar-nav mr-auto">
                        {listItems}
                    </ul>
                </div>
            </nav>
        )
    }
}