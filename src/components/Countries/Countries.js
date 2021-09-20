import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries,setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h1 className='text-success'> Load Countries data from rest countries API</h1>
            <h3> Countries Available : {countries.length}</h3>
            <div className="grid-display">
            {
                countries.map(country =>{
                    return <Country key={country.alpha2Code} country={country}></Country>
                })
            }
            </div>
        </div>
    );
};

export default Countries;