import React from "react";
import CarosoulHeader from "../CarosoulHeader.js/CarosoulHeader";
import Services from "../Services/Services";
import Section2 from "./Section2";
import Sections1 from "./Sections1";

const Home = () => {
  return (
    <div>
      <CarosoulHeader></CarosoulHeader>
      <Services></Services>
      <Sections1></Sections1>
      <Section2></Section2>
    </div>
  );
};

export default Home;
