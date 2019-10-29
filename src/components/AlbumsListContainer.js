import React from "react";
import AlbumsList from "./AlbumsList";
import { connect } from "react-redux";
import { setAlbums, getAlbums } from "../actions/albums";

// const sleep = time =>
//   new Promise(resolve => {
//     setTimeout(() => resolve(`I waited for ${time} ms`), time);
//   });

class AlbumsListContainer extends React.Component {
  state = {};

  componentDidMount() {
    this.props.getAlbums();
  }

  render() {
    console.log("this.props.albums", this.props.albums);
    if (!this.props.albums) {
      return <p>Loading...</p>;
    } else {
      console.log("this.props.albums", this.props.albums);
      return <AlbumsList albums={this.props.albums} />;
    }
  }
}

const mapStateToProps = state => {
  return {
    albums: state.albums
  };
};

export default connect(
  mapStateToProps,
  { setAlbums, getAlbums }
)(AlbumsListContainer);
