import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios'
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  componentDidMount() {
    console.log("Component is here!");
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }))

//       console.log("Hi Mohit, this is the response we got:  " + response);

      .catch(error =>
        // handle error
        console.log("Shit, we have an error:" + error)
      )
      .finally(() =>
        // always executed
        console.log("Success!")
      );
  }

  renderAlbums() {
    return this.state.albums.map(album => (
      <AlbumDetail key={album.title} album={album} />
    ));
  }

  render() {
    console.log("This is the current state" + this.state);
    console.log(this.state.albums);
    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

export default AlbumList;
