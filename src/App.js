import React, { Component } from 'react';
import { View } from 'react-native';
import PostList from './components/PostList';

import Header from './components/Header';

export default class App extends Component<{}> {
  render() {
    return (
    <View>
      <Header headerText={'Reddit!'} />
      <PostList />
    </View>

    );
  }
}
