import React from 'react'
import "./CartItem.css"
import { AiOutlineClose } from "react-icons/ai";
import axios from 'axios';

const CartItem = ({cartitem,SetRenderCartItems,RenderCartItems}) => { 
    

   const HandleRemoveCartItem  =(id)=>{
            axios.delete(` http://localhost:8080/CareCart/${id}`)
            .then ((res) =>console.log(res))

            let val=RenderCartItems ? false : true
            SetRenderCartItems( val)
   }

  return (
    <div className='CartItemBox'>
       
        <div className='test_name'>
            <p >{cartitem.title}</p>
            <AiOutlineClose onClick={()=>HandleRemoveCartItem(cartitem.id)}/>

        </div>

        <div className='test_price'>
           <p>{cartitem.Test}</p>
           <p> <del>₹ {cartitem.Offer_price}</del>  ₹ {cartitem.Price}</p>
        </div>
       
    </div>
  )
}

export default CartItem