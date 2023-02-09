
const initialState = {
     loading : true,
     products : [],
}
function fetchReducer(state = initialState , action) {
     switch(action.type) {
        case "GET_DATA_LOAD" : return {...state}
        case "GET_DATA_SUCCESS" : return {loading : false  ,products: action.payload}
        case "GET_DATA_FAIL" : return {loading : false , msg : action.payload }
        default : return state;
     }
}

export default fetchReducer;