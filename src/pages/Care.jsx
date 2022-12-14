
// care page TO do Sumit ss



import React from 'react'
import "../Styles/care.css"  
import data from "../db.json"
import FAQ from '../components/CarePageComponent/FAQ/FAQ'
import Quote from '../components/CarePageComponent/Quotes/Quote'
import Information from '../components/CarePageComponent/Information/Information'




const Care = () => {
    let {Lab_Test_Card}=data
  
    
  return (
    <div className='page_container'>

        <div className='sub_navbar'>
             <div className='lab_test'>Lab Test</div>
        </div>
        
        <div className='content_container'>
            <div className='heading'>
                     <p id="head">Lab Test</p>
                   
                     <p id="sub_head">Assess and monitor your health from the comfort of your home now.</p>
            </div>

            <div className='card_container'>
             {
                Lab_Test_Card.map((card)=>(
                    <div className='test_card'>
                       <img   src={card.image} alt="image" />
                      
                       <div  className='price_tag'>
                        <div>Price</div>
                        <div className='card_price'><del>{card.Price}</del></div>
                    
                       </div>

                       <div className='price_tag'>
                       <div>Offer Price</div>
                        <div>{card.Offer_price}</div>

                       </div>
                      
                       
                    </div>
                ))
             }
            </div>

            <FAQ/>
            <Quote/>  
            <Information/>

        </div>

        
    </div>
  )
}

export default Care