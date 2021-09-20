import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,capital,flag,region} = props.country
    return (
        <div className='card-style'>
            <h4> Name : {name}</h4>
            <p>Capital : {capital}</p>
            <img className='flag' src={flag} alt={name}/>
            <p><small>Region : {region}</small></p>
        </div>
    );
};

export default Country;