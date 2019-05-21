import React from 'react';
import { View, Text } from 'react-native';
import { CommentItemStyles } from '../styles/CommonStyles';

const BlogItem = ({ data }) => {
  return (
    <View style={CommentItemStyles.container}>
      <Text>{data.body}</Text>
      <Text>{data.userId}</Text>
    </View>
  )
}

export default BlogItem;