import React, {useState, useEffect}  from 'react';
import Navbar from './../components/Navbar';
import axios from 'axios';

const RandomBeer = () => {

    const [randomBeer, setRandomBeer] = useState({});

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then((response) =>{
            setRandomBeer(response.data);
        } )
        .catch((e) => console.log(e))

    }, []);


    return (
        <div className="container">
            <Navbar/>
            <div className="card">
                <p className="text-center"><img className="img-fluid" width="30%" src={randomBeer.image_url} alt={randomBeer.name}/></p>
                <div>
                    <h2>{randomBeer.name}</h2> 
                    <p>{randomBeer.attenuation_level}</p> 
                </div>
                <div>
                    <p>{randomBeer.tagline}</p>
                    <p>{randomBeer.first_brewed}</p>
                </div>
                <p>{randomBeer.description}</p>
                <p>{randomBeer.contributed_by}</p>
            </div>
        </div>              
    )
}

export default RandomBeer
