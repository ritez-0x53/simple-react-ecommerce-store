
function cartReducer(state = [] , action) {
     switch(action.type) {
          case "ADD" : return [...state , action.payload ];
          case "REMOVE" :  return state = state.filter((val , ind)=>{
               return ind !== action.payload
          })
          case "EMPTY" : return [];
          default : return state;
     }
}

export default cartReducer;