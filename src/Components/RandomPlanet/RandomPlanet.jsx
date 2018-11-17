import React, { Component } from 'react';
import './RandomPlanet.css'
import SwapiService from '../../services/index';
import Spiner from '../../services/loader';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: false,
        error: false,
    }
    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 3500)
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    onPlanetLoaded = (planet) => {
        this.setState( {
            planet,
            loading: false,
            error: false,
        })
    }
    onError = (err) => {
        this.setState({
            error: true,
            loading: false,
        })
    }
    updatePlanet = () => {
        const id = Math.floor(Math.random() * 20) + 3;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    }   
    render() {
        const { planet, loading, error} = this.state;
        const hasData = !(loading || error);

        const errorMassage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spiner/> : null;
        const content = hasData ? <PlanetView  planet={planet}/> : null;

        return (
            <div className='random-planet jumbotron rounded'>
                {errorMassage}
                {content}
                {spinner}
            </div>
        )
    }
}

const PlanetView = ({planet}) => {
    const { name, population, rotationPeriod, diameter, id} = planet;
    return (
        <React.Fragment>
             <img className="planet-image" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="img"/>
                <div className='card-body'>
                    <h4>{name}</h4>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <span className='term'>Population: {population}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Rotation Period: {rotationPeriod}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Diameter: {diameter}</span>
                        </li>
                    </ul>
                </div>
        </React.Fragment>
    )
}

