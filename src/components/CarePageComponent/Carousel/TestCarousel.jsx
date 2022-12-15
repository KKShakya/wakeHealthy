import React from 'react'
import { Carousel } from 'react-responsive-carousel';
const TestCarousel = () => {
  return (
    <>
       <Carousel>
                <div>
                    <img src="assets/1.jpeg"  alt='pic'/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" alt='pic' />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg"  alt='pic'/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    
    
    
    </>
  )
}

export default TestCarousel