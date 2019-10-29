export function setPhotos(photos) {
  return {
    type: "SET_PHOTOS",
    payload: {
      photos
    }
  };
}

export function getPhotosByAlbum(albumId) {
  return function(dispatch) {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then(res => res.json())
      .then(data => {
        dispatch(setPhotos(data));
      });
  };
}
