import React from "react";

const Footer = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "#262339", margin: "0px 1px" }}
        className="row pt-5 gap-4 text-light justify-content-center"
      >
        <div className="col-lg-3 col-5">
          <h3 className="fw-bolder mb-3">
            Travel <span style={{ color: "tomato" }}>Now</span>
          </h3>
          <p>
            No 71 Adesuwa Road GRA, Benin City, <br /> Edo State. <br />
            First floor, Novare Central offices, <br /> Shoprite Wuse Zone 5
          </p>
          <h5 className="mt-4">Follow Us:</h5>

          <p className="fs-4">
           <a style={{color: "#3b5998"}} target="blank" href="http://facebook.com"><i className="fab fa-facebook me-2"></i></a> 
           <a  style={{ color: "#cd201f" }} target="blank" href="http://youtube.com"><i className="fab fa-youtube me-2"></i></a> 
           <a  style={{ color: "#3f729b" }} target="blank" href="http://instagram.com"><i className="fab fa-instagram me-2"></i></a>
           <a  style={{ color: "#55acee" }} target="blank" href="http://twitter.com"><i className="fab fa-twitter me-2"></i></a>
          </p>
        </div>
        <div className="col-lg-2 col-6">
          <h3 className="fw-bolder">Contact Us</h3>
          <p>
            <i className="fas fa-envelope mt-2"> Example@gmail</i>
            <br />
            <i className="fas fa-phone-alt mt-4"> +123456789</i> <br />
            <i className="fas fa-map-marker-alt my-4">
            
              <span className="ms-2">2752 Willison Street</span> <span className=" ms-3">Eagan, United State</span>
            </i>
          </p>
        </div>
        <div className="col-lg-2 col-5 text-lg-center">
          <h3 className="fw-bolder mb-3">Support</h3>
          <p>Contact Us</p>
          <p>About Us</p>
          <p>Our Blogs</p>
          <p>Package</p>
        </div>
        <div className="col-lg-2 col-6">
          <h3 className="fw-bolder mb-5">We Accept</h3>
          <img width='100%' src="https://lirp.cdn-website.com/5edbd483/dms3rep/multi/opt/blog-major-creditcards-960w.jpg" alt="" />
        </div>
      </div>
      <p
        style={{ backgroundColor: "#323232", margin: "0px 1px" }}
        className="text-center text-light py-0"
      >
        Copyright 2021 TravelNow | Design By Md Ashikur Rahman
      </p>
    </>
  );
};

export default Footer;
