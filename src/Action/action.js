import axios from "axios"
export function addToCart(payload) {
     return {
          type : "ADD",
          payload : payload
     }
}

export function removeFromCart(payload) {
     return {
          type : "REMOVE",
          payload : payload
     }
} 

export function empty() {
     return {
          type : "EMPTY"
     }
}


export function fetch() {
     return {
          type : "GET_DATA_LOAD"
     }
}

export function fetchSuccess(data) {
     return {
          type : "GET_DATA_SUCCESS",
          payload : data
     }
}

export function fetchFail(msg) {
     return {
          type : "GET_DATA_FAIL",
          payload : msg
     }
} 

export function asyncFetchData() {
     return function(dispatch) {
          dispatch(fetch());
          axios.get("https://fakestoreapi.com/products")
          .then(res => {
               dispatch(fetchSuccess(res.data))
          })
          .catch(err => {
               dispatch(fetchFail(err))
          })

     }
}