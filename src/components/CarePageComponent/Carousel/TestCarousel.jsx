
import React from 'react'
import "./TestCarousel.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiOutlineCaretRight,AiOutlineCaretLeft } from "react-icons/ai";



const TestCarousel = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <>
    <div className='test_heading'><h4>
Tests Included</h4></div>
     <Carousel className='Test_carousel'
              swipeable={true}
              draggable={true}
              rtl={true}
              showDots={false}
              sliderClass="react-multi-carousel-track"
             
              minimumTouchDrag={50}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              // autoPlay={this.props.deviceType !== "mobile" ? true : false}
              autoPlaySpeed={1000}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile",]}
              // deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
>
  <div className='img_div'>
   <img src="https://s3.ap-south-1.amazonaws.com/curefit-content/image/carefit/diagnostic-tests/CF00155.jpg" alt=""/>
   <p>HDL Cholesterol</p>
  </div>
  <div className='img_div'>
   <img src="https://s3.ap-south-1.amazonaws.com/curefit-content/image/carefit/diagnostic-tests/CF00004.jpg" alt=""/>
   <p>HDL Cholesterol</p>
  </div >
  <div className='img_div'>
   <img src="https://s3.ap-south-1.amazonaws.com/curefit-content/image/carefit/diagnostic-tests/CF00285.jpg" alt=""/>
   <p>HDL Cholesterol</p>
  </div>
  <div className='img_div'> 
   <img src="https://s3.ap-south-1.amazonaws.com/curefit-content/image/carefit/diagnostic-tests/CF00351.jpg" alt=""/>
   <p>HDL Cholesterol</p>
  </div>
  <div className='img_div'>
   <img src="https://s3.ap-south-1.amazonaws.com/curefit-content/image/carefit/diagnostic-tests/CF00351.jpg" alt=""/>
   <p>HDL Cholesterol</p>
  </div>
</Carousel>;

    
    
        </>
   )
 }

 export default TestCarousel