export const SET_ALBUMS = "SET_ALBUMS";

export function setAlbums(albums) {
  return {
    type: SET_ALBUMS,
    payload: {
      albums
    }
  };
}

export function getAlbums() {
  return function(dispatch) {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then(res => res.json())
      .then(data => {
        dispatch(setAlbums(data));
      });
  };
}
