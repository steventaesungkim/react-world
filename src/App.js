import React, { Component } from 'react';
import './App.css';

import NavBar from './NavBar';
import World from './World';
import Countries from './Countries';
import Home from './Home';
import About from './About';

import {
    BrowserRouter as Router,
    Route,
    // Link -------- in NavBar.js
} from 'react-router-dom';



class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            world: {
                'Asia': {
                    countries: [
                        'China',
                        'Japan',
                        'Philippines',
                        'Russia',
                        'South Korea',
                        'Vietnam'
                    ],
                    food: [
                        'Dim Sum',
                        'Sushi',
                        'Adobo',
                        'Vodka',
                        'Pelmeni',
                        'Spring Rolls',
                    ]
                },
                'Africa': {
                    countries: [
                        'Nigeria',
                        'Egypt',
                        'South Africa',
                        'Morocco',
                        'Uganda'
                    ],
                    food: [
                        'Jollof Rice',
                        'Bunny Chow',
                        'Shisa Nyama',
                        'Piri Piri Chicken',
                        'Koshari'
                    ]
                },
                'Antarctica': {
                    countries: [
                        'Antarctica'
                    ],
                    food: [
                        'Pemmican'
                    ]
                },                   
                'Australia': {
                    countries: [
                        'Australia'
                    ],
                    food: [
                        'Meat Pie',
                        'Sausage Sanger',
                        'Anzac Biscuit'
                    ]
                },
                'Europe': {
                    countries: [
                        'Germany',
                        'France',
                        'United Kingdom',
                        'Spain',
                        'Sweden'
                    ],
                    food: [
                        'Currywurst',
                        'Beer',
                        'Goulash',
                        'Štrukilji',
                        'Pierogi'
                    ]
                },
                'South America': {
                    countries: [
                        'Brazil',
                        'Argentina',
                        'Peru',
                        'Chile',
                        'Colombia'
                    ],
                    food: [
                        'Ceviche',
                        'Feijoada',
                        'Chimichurri',
                        'Empanadas'
                    ]
                },
                'North America': {
                    countries: [
                        'United States of America',
                        'Canada',
                        'Mexico',
                        'Cuba',
                        'Jamaica'
                    ],
                    food: [
                        'Barbeque',
                        'Maple Syrup',
                        'Yuca con mojo',
                        'Mojarra',
                        'Jerk chicken'
                    ]
                }
            }
        };
    }
    render() {
        return (
            <Router>
                <div className="App">
                    <NavBar />
                    <Route path = "/" exact component = {Home} />
                    <Route path = "/about" component = {About} />
                    <Route path = "/world" render = {(props) =>{
                        return <World
                            continentList = {Object.keys(this.state.world)}
                            {...props}
                        />
                    }} />
                    <Route path = "/world/:continent" render = {(props) =>{
                        return <Countries 
                            countriesList = {this.state.world}
                            {...props}
                        />
                    }} />
                </div>
            </Router>
        );
    }
}

export default App;
