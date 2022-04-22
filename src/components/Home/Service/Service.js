import Button from "@restart/ui/esm/Button";
import React from "react";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import './service.css'

const Service = ({ service }) => {
  const { _id, price, time, img, place } = service;

  return (
    <>
      <Fade>
        <div style={{width: '420px', overflow: 'hidden' ,boxShadow: "2px 2px 5px lightgray"}} className="card mx-2 pb-3 col-lg-4 col-md-6 col-12 mt-4">
          <div className="frame">
             <img class="si" src={img} alt="" />
          </div>       
          
          <div className="d-flex justify-content-between mt-2">
            <h5 style={{ color: "#304F47" }}>{price}</h5>
            <p style={{ color: "#304F47" }}>{time}</p>
          </div>
          <div className="d-flex justify-content-between">
            <h4 style={{ color: "tomato", fontWeight: "bolder" }}>{place}</h4>
            <Link to={`/Details/${_id}`}>
              <Button
                className="btn bg-success text-white py-1"
                variant="primary"
              >
                Purchase
              </Button>
            </Link>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Service;
