 import { actions } from './action'

 const INITIAL_STATE = {
    data:{}
  };
  
  export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case actions.DELETE:
        return {
            ...state,
            data : action.payload
          }  
      case actions.UPDATE:
            return {
                ...state,
                data : action.payload
              }      
      default:
        return state;
    }
  };
  
  