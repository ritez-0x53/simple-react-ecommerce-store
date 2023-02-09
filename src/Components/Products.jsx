import React from 'react'
import "./Style.css"
import { useDispatch } from 'react-redux';
import { addToCart } from '../Action/action';

function Products({data}) {

     const dispatch = useDispatch();
     return (


          <div className='item-list container' >
               {
                    data.map((item, ind, items) => {
                         return <div key={ind.toString()} className='item'>
                              <img height={"100px"} src={item.image} alt="" />
                              <p>Price : $ {item.price}</p>
                              <button onClick={() => {
                                   dispatch(addToCart(item))
                              }} className='btn'>Add to Cart</button>
                         </div>
                    })
               }
          </div>
     )
}

export default Products
