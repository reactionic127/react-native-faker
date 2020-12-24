import {
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILURE,
} from '../constants';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {UserState} from '../types';

const initialState: UserState = {
  users: [],
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ALL_USERS_REQUEST:
      return {
        ...state,
      };
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    case GET_ALL_USERS_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};