import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import Detail from './Detail';

class PostList extends Component {
    state = { albums: [] };

    UNSAFE_componentWillMount() {
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({albums: response.data}));
    }

    renderAlbums(){
      return this.state.albums.map(album =>
          <Detail key={album.title} record={album} />
      );
    }

    render() {
        return (
            <ScrollView>
                { this.renderAlbums() }
            </ScrollView>
        );
    }
}

export default PostList;