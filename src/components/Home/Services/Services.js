import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import Fade from 'react-reveal/Fade';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://safe-stream-68463.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="row my-5 mx-2 justify-content-evenly gap-2 align-items-center">
            
            <h5 style={{color: "tomato"}} className="text-center fw-bold mb-3">Choose your package</h5>
            <Fade bottom>
            <h2 style={{color: "#262339"}} className="text-center fw-bold mb-3">Select Your best Package <br /> For Your Travel</h2>
            </Fade>
            {
                services.map((service) => <Service key={service.id} service={service}></Service>)
            }
        </div>
    );
};

export default Services;