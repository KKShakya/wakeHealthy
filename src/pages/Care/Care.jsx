
// care page TO do Sumit ss



import React, { useState } from 'react'
import { useSearchParams,Link } from "react-router-dom";
import axios from 'axios'
import "../../Styles/care.css" 

import FAQ from '../../components/CarePageComponent/FAQ/FAQ'
import Quote from '../../components/CarePageComponent/Quotes/Quote'
import Information from '../../components/CarePageComponent/Information/Information'
import LargeWithAppLinksAndSocial from '../../components/Footer';





const Care = () => {
 

    const [TestCardData, setTestCardData]=useState([])


    let [searchParams, setSearchParams] = useSearchParams();

    const HandleClick =(id)=>{
      
      setSearchParams(id)
    }

    React.useEffect(()=>{

        axios.get(' http://localhost:8080/Lab_Test_Card').then((data)=>setTestCardData(data.data))
    },[])
  
    
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
                TestCardData.map((card)=>(
                  <Link to={`/care/${card.id}`}>
                  
                  <div className='test_card' key={card.id} onClick={()=>HandleClick(card.id)}>
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
                  </Link>
                    
                ))
             }
            </div>

            <FAQ/>
            <Quote/>  
            <Information/>
            <LargeWithAppLinksAndSocial/>

        </div>

        
    </div>
  )
}

export default Care