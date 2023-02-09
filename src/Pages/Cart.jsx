import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../Action/action';
import { empty } from '../Action/action';
import "./Style.css"

function Cart() {
     const dispatch = useDispatch();
     const cartItems = useSelector(state => state.cartReducer);
  return cartItems.length === 0 ? <h1 style={{
     textAlign:"center" , color: "red" , marginTop:"100px"
  }}>Cart Empty</h1> : <div>
     <button style={{textAlign:"center" , margin:"10px 0 0 200px"} } onClick={()=> dispatch(empty())} >Empty the Cart</button>
     {
          cartItems.map((item , ind)=> {
               return <div className='cart-item'>
                    <p>[  {ind+1}  ]</p>
                    <img className='cart-img' src={item.image} alt="" />
                    <p>${item.price}</p>
                    <button className='btn' onClick={()=>{
                         dispatch(removeFromCart(ind))
                    }}>Remove</button>
               </div>
          })
     }
  </div>
}

export default Cart
