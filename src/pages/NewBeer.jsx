import axios from 'axios';
import React, {useState}  from 'react';
import {useNavigate} from 'react-router-dom';
import Navbar from './../components/Navbar';


const NewBeer = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [brewed, setBrewed] = useState("");
    const [tips, setTips] = useState("");
    const [level, setLevel] = useState(0);
    const [contributed, setContributed] = useState("");

    const [message, setMessage] = useState("");

    const sendData = (e) => {
    e.preventDefault();

    const data = {
        name,
        tagline,
        description,
        brewed,
        tips,
        level,
        contributed
    };

        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', data)
        .then((response) => {
            console.log(response);
            //setMessage("New beer successfully saved to database!")
            navigate('/beers');
        })
        .catch((e) => {
            console.log(e)

        })

    }
      
    


    return (
        <div className="container">
            <Navbar/>
            {message}
            <form onSubmit={sendData}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                />
            </div>
            <div className="mb-3">
			<label htmlFor="tagline" className="form-label">Tagline</label>
			<input
				type="text"
				name="tagline"
				id="tagline"
				value={tagline}
                onChange={(e) => setTagline(e.target.value)}
                className="form-control"
                />
            </div>
            <div className="mb-3">
			<label htmlFor="description" className="form-label">Description</label>
			<input
				type="text"
				name="description"
				id="description"
				value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control"
                rows="3"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="brewed" className="form-label">First brewed</label>
                <input
                    type="text"
                    name="brewed"
                    id="brewed"
                    value={brewed}
                    onChange={(e) => setBrewed(e.target.value)}
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="tips" className="form-label">Brewed tips</label>
                <input
                    type="text"
                    name="tips"
                    id="tips"
                    value={tips}
                    onChange={(e) => setTips(e.target.value)}
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="level" className="form-label">Attenuation level</label>
                <input
                    type="number"
                    name="level"
                    id="level"
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className="form-control"
			/>
            </div>
            <div className="mb-3">
            </div>
            <div className="mb-3">                
                <label htmlFor="contributed" className="form-label">Contributed by</label>
                <input
                    type="text"
                    name="contributed"
                    id="contributed"
                    value={contributed}
                    onChange={(e) => setContributed(e.target.value)}
                    className="form-control"
                />
            </div>
            <p className="text-center"><button className="btn btn-lg btn-info">ADD NEW</button></p>
            </form>
        </div>
    )
}

export default NewBeer
