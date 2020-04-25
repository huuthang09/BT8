import {combineReducers} from 'redux';
import {getData} from './GetReducers';
import {CLEAR_NETWORK_FAIL, SEND_NETWORK_FAIL} from "../actions/actions";

const initialState = {fetching: false, data: null, err: null};

const sendNetworkFail = (state = initialState, action) => {
  switch (action.type) {
    case SEND_NETWORK_FAIL:
      return {
        err: action.payload.err,
      };
    case CLEAR_NETWORK_FAIL:
      return {
        err: null,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({sendNetworkFail, getData});
export default rootReducer;