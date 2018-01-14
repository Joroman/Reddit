import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import axios from 'axios';
import PostDetail from './PostDetail';

class PostList extends Component {
  //Initiate the state of my component
  state = { posts: [] };
//the method exectuted as sun as it renders to the screen
  componentWillMount() {
  axios.get('https://api.reddit.com/r/pics/')
  .then((response) => {
    this.setState({ posts: response.data.data.children });
  });
  }

//item.data.thumbnail
  render() {
    console.log(this.state);
    return (
      <View>
      <FlatList
        data={this.state.posts}
        renderItem={({ item }) => <PostDetail key={item.data.id} post={item.data} />}
      />
      </View>
    );
  }
}

export default PostList;
