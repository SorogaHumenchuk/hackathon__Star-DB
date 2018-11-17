import React,{ Component } from 'react';
import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import ItemList from '../ItemList/ItemList';
import PersonDetails from '../PersonDetails/PersonDetalis';
import ErrorBtn from '../ErrorBtn/ErrorBtn';
import './App.css'

export default class App extends Component {

    state = {
        selectedPerson: 5
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }
    render() {
        return (
            <div className="container">
                <Header/>
                <RandomPlanet/>
                <ErrorBtn/>
                <div className='row mb2'>
                    <div className='col-md-6'>
                        <ItemList
                            onItemSelected={this.onPersonSelected}/>
                    </div>
                    <div className='col-md-6'>
                        <PersonDetails
                            personId={this.state.selectedPerson}/>
                    </div>
                </div>
            </div>
        )
    }
}