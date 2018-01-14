import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';

const PostDetail = ({ post }) => {
  const { title, created, thumbnail, author, score, num_comments } = post;
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    textStyle,
    rowContentStyle
  } = styles;

  return (
    <Card>
      <View style={thumbnailContainerStyle}>
        <Image
        style={thumbnailStyle}
        source={{ uri: thumbnail }}
        />
      </View>
    <View style={headerContentStyle}>
        <Text>{created}</Text>
        <Text style={textStyle}>{title}</Text>
        <View style={rowContentStyle}>
          <Text>{author}</Text>
          <Text>{score}</Text>
          <Text>{num_comments}</Text>
        </View>
    </View>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  textStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  rowContentStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
};

export default PostDetail;
