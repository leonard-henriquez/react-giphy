import { SET_QUERY } from '../actions/index';

export default function (state, action) {
  if (state === undefined) {
    return '';
  }

  switch (action.type) {
    case SET_QUERY:
      return action.payload;
    default:
      return state;
  }
}
