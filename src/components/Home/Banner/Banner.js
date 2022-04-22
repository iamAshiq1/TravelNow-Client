import React from "react";
import { Carousel } from "react-bootstrap";
import './Banner.css'
import Fade from 'react-reveal/Fade';
const Banner = () => {
  return (
    <div className="banner">
      <Carousel variant="light">
        <Carousel.Item className="gg" style={{
          backgroundImage:
            "linear-gradient(rgba(5, 10, 30, 0.8), rgba(5, 10, 30, 0.8)), url('https://wallpaperaccess.com/full/295871.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          textAlign: "left",
        }}>
        <Carousel.Caption>
          <Fade left>
          <h3>Eiffel Tower, Paris</h3>
          </Fade>
          <Fade right>
          <p>The magnetic City of Light draws visitors from around the globe who come to see iconic attractions like the Eiffel Tower</p>
          </Fade>
                      
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="gg" style={{
          backgroundImage:
            "linear-gradient(rgba(5, 10, 30, 0.8), rgba(5, 10, 30, 0.8)), url('https://i.pinimg.com/originals/a4/ca/aa/a4caaab11a3e5774cab439760a6e1fff.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          textAlign: "left",
        }}>
          <Carousel.Caption>
          <Fade left>
          <h3>Machu Picchu, Peru</h3>
          </Fade>
          <Fade right>
          <p>A visit to the "Lost City of the Incas" is not for the faint of heart</p>
          </Fade>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="gg" style={{
          backgroundImage:
            "linear-gradient(rgba(5, 10, 30, 0.8), rgba(5, 10, 30, 0.8)), url('https://wallpaperaccess.com/full/275650.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          textAlign: "left",
        }}>
          <Carousel.Caption>
            <Fade left>
            <h3>Maui, Hawaii</h3>
            </Fade>
            <Fade right>
            <p>
            Whether you're driving along the Road to Hana, enjoying a bird's-eye view of the lush coastline from a helicopter
            </p>
            </Fade>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="gg" style={{
          backgroundImage:
            "linear-gradient(rgba(5, 10, 30, 0.8), rgba(5, 10, 30, 0.8)), url('https://images8.alphacoders.com/430/thumb-1920-430779.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          textAlign: "left",
        }}>

          <Carousel.Caption>
            <Fade left>
            <h3>Montreal, Canada</h3>
            </Fade>
            <Fade right>
            <p>
            Montreal is a city of juxtaposition: Skyscrapers rub elbows with Old Montreal's 17th-century architecture
            </p>
            </Fade>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="gg" style={{
          backgroundImage:
            "linear-gradient(rgba(5, 10, 30, 0.8), rgba(5, 10, 30, 0.8)), url('https://s1.1zoom.me/big7/9/Houses_Skyscrapers_487632.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          textAlign: "left",
        }}>

          <Carousel.Caption>
            <Fade left>
            <h3>Manhattan, New York</h3>
            </Fade>
            <Fade right>
            <p>
            New York City hosts infinite urban adventures: You can wander through Central Park, tour art exhibits at the Met
            </p>
            </Fade>          
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;