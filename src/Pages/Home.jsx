import React, { useEffect } from 'react'
import Products from '../Components/Products'
import { useDispatch, useSelector } from 'react-redux'
import { asyncFetchData } from '../Action/action';


function Home({user}) {
  const db = useSelector(state => state.fetchReducer);
  const dispatch = useDispatch();
  useEffect(()=> {
      dispatch(asyncFetchData())
  } , [asyncFetchData])
  return (
    <div>
     <h4 style={{
          textAlign:"center",
          color: "black",
          fontSize : "1.5rem"
     }} >Welcome {user}</h4>

    {
      db.loading ? <div style={{
        width : "70%" , 
        margin : "auto",
        // height : "100vh",
        display : "flex",
        justifyContent : "center",
        alignItems : "center"

      }}>
        <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div> :  <Products data= {db.products} />
    }
    </div>
  )
}

export default Home
