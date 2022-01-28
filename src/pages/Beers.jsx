import React from 'react'
import Navbar from './../components/Navbar';
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Beers = () => {

    const [beers, setBeers] = useState([]);

    useEffect(() =>{
        axios
        .get('https://ih-beers-api2.herokuapp.com/beers')
        .then((response) => setBeers(response.data))
        .catch((e) => console.log(e));
    })


    return (
        <div className="container">
            <Navbar/>
            {beers.map((beer) => {
                return (
                    <Link to={`${beer._id}`} style={{textDecoration:"none", color:"black"}} key={beer._id}>
                        <div className="card row">
                            <div className="col">
                                <img className="img-fluid" width="20%" src={beer.image_url} alt={beer.name}/>
                            </div>
                            <div className="col">
                                <h3>{beer.name}</h3>
                                <p>{beer.tagline}</p>
                                <p><span>Created by:</span>{beer.contributed_by}</p>
                            </div>
                        </div>
                    </Link>

                )
            })}           
        </div>
    )
}

export default Beers
