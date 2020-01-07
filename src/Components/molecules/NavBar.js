import React, { Component } from 'react';
import fire from '../../config/Fire';
import { Link } from 'react-router-dom';

//componente
import Button from '../atoms/Button';


export default class NavBar extends Component {
    out = e => {
        e.preventDefault();
        fire.auth().signOut().then(function () {
        }).catch(function (error) {
        });
    }

    render() {
        const { name } = this.props;
        return (
            <div>
                <h1>{name}</h1>
                <Link to="/"><Button title='Salir' /></Link>
            </div>
        )
    }
}
