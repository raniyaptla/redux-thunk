// userReducer.jsx
import {createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";


// Initial state
const initialState = {
  loading: false,
  users: [],
  error: ''
};

// Reducer function
const userReducer = (state = initialState, action) => {
      if(action.type="FETCH_USER_SUCCESS"){
        return{
           ...state,
           users:action.payload
        }
      }else if(action.type="GO_DATA"){
        return{

          ...state,
          users:[]
        }

      }
      return state;
  }


// Creating and exporting the store
const store = createStore(userReducer, applyMiddleware(thunk));
export default store;
