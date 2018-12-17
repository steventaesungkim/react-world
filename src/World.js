import React from 'react';
import { Link } from 'react-router-dom';

const World = (props) =>{
    const listOfContinent = props.continentList.map((continent) =>{
        return(
            <div>
                <Link to = {`/world/${continent}`}>{continent}</Link>
            </div>
        );
    });
    return(
        <ul>
            <h2>List of the Continents</h2>
            <div>{listOfContinent}</div>
        </ul>
    );
};

export default World;