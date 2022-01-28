import React, {useState, useEffect}  from 'react'
import Navbar from './../components/Navbar';

import {useParams} from 'react-router-dom';
import axios from 'axios';

const OneBeer = () => {

    const [oneBeer, setOneBeer] = useState({});
    const params = useParams();


    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((response) =>{
            const apiBeers = response.data
            const foundBeer = apiBeers.find((beer) => beer._id === params.id);
            setOneBeer(foundBeer);
        } )
        .catch((e) => console.log(e))

    }, [params.id]);

    return (
        <div className="container">
            <Navbar/>
            <div className="card">
                <p className="text-center"><img className="img-fluid" width="30%" src={oneBeer.image_url} alt={oneBeer.name}/></p>
                <div>
                    <h2>{oneBeer.name}</h2> 
                    <p>{oneBeer.attenuation_level}</p> 
                </div>
                <div>
                    <p>{oneBeer.tagline}</p>
                    <p>{oneBeer.first_brewed}</p>
                </div>
                <p>{oneBeer.description}</p>
                <p>{oneBeer.contributed_by}</p>
            </div>
        </div>  
    )
}

export default OneBeer
