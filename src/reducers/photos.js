export default (state = [], action) => {
  switch (action.type) {
    case "SET_PHOTOS":
      console.log("action123", action.payload.photos);
      return [...action.payload.photos];
    default:
      return state;
  }
};
