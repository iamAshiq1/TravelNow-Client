import React from "react";
import Services from "../Services/Services";
import Banner from "../Banner/Banner"
import Extra from "../Extra/Extra";
import News from "../News/News"
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <News></News>
      <Extra></Extra>
    </div>
  );
};

export default Home;
