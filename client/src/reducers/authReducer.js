import { FETCH_USER } from '../actions/types';

const authReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_USER:
      console.log('FETCH_USER should be triggered.');
      return action.payload || false;
    default:
      return state;
  }
};

export default authReducer;
