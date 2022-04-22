
import React from 'react';
import Fade from 'react-reveal/Fade';
import './extra.css'
import Bounce from 'react-reveal/Bounce'
const Extra = () => {
    return (
    <div>

       <div style={{
          backgroundImage: "url('https://demo.egenslab.com/html/tourx/assets/images/achiv-shape.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          textAlign: "left",
          height: '75vh',
          marginBottom: '80px'
        }}>
            <h4 className="pt-5 fw-bold text-center" style={{color: "#FF7F47"}}>Feature Tours</h4>
            <h1 className="fw-bolder text-center mt-3 mb-5" style={{color: "#262339", fontFamily: 'initial'}}>See Our Best Popular Package</h1>
            <div style={{ color: 'white', fontWeight: 'bolder', textAlign: 'center'}} className='row mx-1 justify-content-evenly mt-5'>
                <div style={{backgroundColor: '#2F4E46'}} className='col-lg-2 col-5 p-4 mb-4 rounded-3'>
                            <img className='w-50 mb-2' src="/pic/guide.png" alt=""/> <br />
                             <span>2000+ Our worldwide guide</span>
                </div>
                <div style={{backgroundColor: '#2F4E46', color: 'white'}} className='col-lg-2 col-5 p-4 mb-4 rounded-3'>
                <img className='w-50 mb-2' src="/pic/trust.png" alt=""/> <br />
                             <span>100% trusted travel agency</span>
                </div>
                <div style={{backgroundColor: '#2F4E46', color: 'white'}} className='col-lg-2 col-5 p-4 mb-4 rounded-3'>
                <img className='w-50 mb-2' src="/pic/experience.png" alt=""/> <br />
                             <span>10+ year of travel experience</span>
                </div>
                <div style={{backgroundColor: '#2F4E46', color: 'white'}} className='col-lg-2 col-5 p-4 mb-4 rounded-3'>
                <img className='w-50 mb-2' src="/pic/traveller.png" alt=""/> <br />
                             <span>90% of our traveller happy</span>
                </div>
        </div>
        </div>
        
        <div style={{
          backgroundImage: "url('https://demo.egenslab.com/html/tourx/assets/images/feature/feature-bg-1.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          textAlign: "left",
          height: '80vh',
        }}>
            <h5 className="pt-4 fw-bold text-center" style={{color: "#FF7F47"}}>Feature Tours</h5>
            <h1 className="fw-bolder text-center" style={{color: "white", fontFamily: 'cursive'}}>See Our Best Popular Package</h1>
            <div className='row justify-content-evenly mt-5 mx-1 pt-5'>
            <Bounce left>
                <div className='col-lg-5 col-12 mb-4'>
                     <div  className='row'>
                         <div className='col-lg-4 col-5'>
                             <img className='w-100' src="https://demo.egenslab.com/html/tourx/assets/images/feature/f-1.png" alt=""/>
                         </div>
                         <div style={{marginLeft: '-12px'}} className='col-lg-8 col-7 ps-4 pt-2 bg-light'>
                             <h5 style={{color: '#262339', fontFamily: 'cursive'}} className='mb-3 fw-bold'>Group travel Go to Beach </h5>
                             <small>&#11088; <small style={{color: '#304F47'}} className='fw-bold'>7K+ Rating</small> </small>
                             <h6 style={{color: '#FF7F47', fontWeight: 'bold', marginTop: '20px'}}>$150 <small className='text-secondary ms-4 text-decoration-line-through'>$200</small></h6>
                         </div>
                     </div>
                </div>
                </Bounce>
            <Bounce right >
                <div className='col-lg-5 col-12'>
                     <div className='row'>
                         <div className='col-lg-4 col-5'>
                             <img className='w-100' src="https://demo.egenslab.com/html/tourx/assets/images/feature/f-2.png" alt=""/>
                         </div>
                         <div style={{marginLeft: '-12px'}} className='col-lg-8 col-7 ps-4 pt-2 bg-light'>
                             <h5 style={{color: '#262339', fontFamily: 'cursive'}} className='mb-3 fw-bold'>Group travel Go to Machu</h5>
                             <small>&#11088; <small style={{color: '#304F47'}} className='fw-bold'>7K+ Rating</small> </small>
                             <h6 style={{color: '#FF7F47', fontWeight: 'bold', marginTop: '20px'}}>$140 <small className='text-secondary ms-4 text-decoration-line-through'>$180</small></h6>
                         </div>
                     </div>
                </div>
                </Bounce>
            </div>
        </div>

        <div className="row text-center text-light justify-content-evenly mx-1 my-5">
            <h4 className="mt-5" style={{color: "tomato"}}>Our Traveller Say</h4>
            <h1 className="mb-5 fw-bolder" style={{color: "#262339"}}>What Oue Traveller Say About Us</h1>
<Fade>
            <div className="col-lg-3 mt-4">
                <img className="rounded-circle" src="https://www.tourx-react.egenslab.com/static/media/reviewer-1.07859027.png" alt="" />
                <h4 className="mt-4 fw-bolder" style={{color: "#262339"}}>Dina jems</h4>
                <h5 style={{color :"gray"}}>Travellar</h5>
                <p style={{color: '#A7A9AB'}}>The staff were very friendly, very welcoming, they helped you if needed (and the favour was returned which they always appreciated), the job itself was good, I enjoyed every minute</p>
            </div>
            <div className="col-lg-3 mt-4">
                <img className="rounded-circle" src="https://www.tourx-react.egenslab.com/static/media/reviewer-2.52e03342.png" alt="" />
                <h4 className="mt-4 fw-bolder" style={{color: "#262339"}}>Jahid Hassan</h4>
                <h5 style={{color :"gray"}}>Travellar</h5>
                <p style={{color: '#A7A9AB'}}>The staff were very friendly, very welcoming, they helped you if needed (and the favour was returned which they always appreciated), the job itself was good, I enjoyed every minute</p>
            </div>
            <div className="col-lg-3 mt-4">
                <img className="rounded-circle" src="https://www.tourx-react.egenslab.com/static/media/reviewer-3.21d99f5c.png" alt="" />
                <h4 className="mt-4 fw-bolder" style={{color: "#262339"}}>Shawn Paul</h4>
                <h5 style={{color :"gray"}}>Travellar</h5>
                <p style={{color: '#A7A9AB'}}>The staff were very friendly, very welcoming, they helped you if needed (and the favour was returned which they always appreciated), the job itself was good, I enjoyed every minute</p>
            </div>
        </Fade>
        </div>
    </div>

    );
};

export default Extra;