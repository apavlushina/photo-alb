export const NEW_HELLO_WORLD = "NEW_HELLO_WORLD";

export function helloWorld(firstName, lastName) {
  return {
    type: NEW_HELLO_WORLD,
    payload: {
      firstName,
      lastName
    }
  };
}

export const ADD_ALBUM = "ADD_ALBUM";

export function addAlbum(id, title) {
  return {
    type: ADD_ALBUM,
    payload: {
      id,
      title
    }
  };
}
