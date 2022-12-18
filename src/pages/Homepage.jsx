
import { Button } from "@chakra-ui/react";
import React from "react";
import "./Homepage.css";
import FitnessDivs from "./Homepage/FitnessDivs";

import Middle from "./Homepage/Middle";
import Middle2 from "./Homepage/Middle2";
import Middle3 from "./Homepage/Middle3";
import Middle4 from "./Homepage/Middle4";
import Middle5 from "./Homepage/Middle5";



const Homepage = () => {
  return (

    <div className="main119">
      <video
        src="https://cdn-images.cure.fit/www-curefit-com/video/upload/c_fill,w_1278,ar_1.77,q_auto:eco,dpr_1.0700000524520874,vc_auto,f_auto/video/test/we-are-cult-web.mp4"
        autoPlay
        loop
        muted
      ></video>
      <div className="content">
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_500,ar_2.13,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/we-are-cult-logo/text-only-v2.png"
          alt=""
        />
        <h2 className="fitness_slogan">A fitness movement that is worth<br/> breakign a sweat for</h2>
        <Button w={{base:"150px" ,md:"150px",lg:'160px'}} className="explore" color={"orange"}>EXPLORE CULTPASS</Button>
      </div>
      <Middle></Middle>
      <Middle2 />
      <Middle3 />
      <Middle4 />
      <Middle5 />
      {/* <Middle6 />
      <Middle7 /> */}
      <FitnessDivs />
     


    </div>
  );
};

export default Homepage;
