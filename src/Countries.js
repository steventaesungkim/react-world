import React from 'react';

const Countries = (props) =>{

    const allCountries = props.countriesList;
    const continentName = props.match.params.continent;
    const theCountry = allCountries[continentName];
    const thecountryList = theCountry.countries.map((country) =>{
        return <div>{country}</div>;
    });
    const theFoodList = theCountry.food.map((foods) =>{
        return <div>{foods}</div>
    })

    return(
        <div>
            <h2>
                List of the Countries in: {continentName}
            </h2>
            <ul>
                {thecountryList}
            </ul>
            <h2>
                List of Popular foods in: {continentName}
            </h2>
            <ul>
                {theFoodList}
            </ul>
        </div>
    );

};

export default Countries;