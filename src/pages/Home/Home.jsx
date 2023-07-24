import React from "react";
import Slider from "../../components/slider/Slider";
import CollageCardHome from "../../components/collageCard/CollageCardHome";
import Review from "../../components/Review/Review";
import StudentGallary from "../../components/StudentGallary/StudentGallary";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <CollageCardHome></CollageCardHome>
      <StudentGallary></StudentGallary>
      <Review></Review>
    </div>
  );
};

export default Home;
