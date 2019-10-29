import { ADD_ALBUM } from "../actions/test";
//import { SET_ALBUM } from "../actions/albums";

export default (state = [], action) => {
  console.log("payload", action);
  switch (action.type) {
    case ADD_ALBUM:
      return [...state, { ...action.payload }];
    case "SET_ALBUMS":
      return [...action.payload.albums];
    default:
      return state;
  }
};
