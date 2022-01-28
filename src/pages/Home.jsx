import React from 'react'
import {Link} from 'react-router-dom';
import beersPicture from './../assets/beers.png';

const Home = () => {
    return (
        <div clasname="container">
            <div className="card">
                <p>
                    <Link to="/beers">
                        <img className="img-fluid" src={beersPicture} alt="beers"/>
                    </Link>         
                </p>
                <h2>All Beers</h2>
                <p>
                Donec sollicitudin molestie malesuada. Nulla porttitor accumsan tincidunt. 
                Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada.
                </p>
            </div>
            <div className="card">
                <p>
                    <Link to="/random-beer">
                        <img className="img-fluid" src="random-beer.png" alt="random beer"/>
                    </Link>         
                </p>
                <h2>Random beer</h2>
                <p>
                Pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar.
                </p>
            </div>
            <div className="card">
                <p>
                    <Link to="/new-beer">
                        <img className="img-fluid" src="new-beer.png" alt="new beer"/>
                    </Link>         
                </p>
                <h2>New beer</h2>
                <p>
                Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
                </p>
            </div>       
        </div>
    )
}

export default Home
