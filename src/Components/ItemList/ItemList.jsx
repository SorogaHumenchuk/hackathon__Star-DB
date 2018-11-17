import React, {Component} from 'react';
import './ItemList.css';
import SwapiService from '../../services/index';
import Spiner from '../../services/loader'


export default class ItemList extends Component {
    
    SwapiService = new SwapiService();
    
    state = {
        peopleList: null,
    }
    componentDidMount() {
        this.SwapiService
            .getAllPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList
                })
            })
    }
    renderItems(arr) {
        return arr.map(({id, name}) => {
            return (
                <li className='list-group-item'
                    key={id}
                    onClick = {() => this.props.onItemSelected(id)}>
                  {name}
                </li>
            )
        })
    }
    render() {

        const { peopleList } = this.state;

        if(!peopleList) {
            return <Spiner/>
        }
        return (
            <ul className='item-list list-group'>
                {this.renderItems(peopleList)}
            </ul>
        )
    }
}
