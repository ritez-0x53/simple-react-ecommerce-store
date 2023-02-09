import React from 'react'
import { useSelector } from 'react-redux'

function Profile({name}) {
     const items = useSelector(state => state.cartReducer)
  return (
    <div>
      <h1 style={{textAlign : "center"}}>
          Your user name is : {name}
      </h1>
      <h2 style={{textAlign:"center"}}>You have {items.length} items in your Cart</h2>
    </div>
  )
}

export default Profile
