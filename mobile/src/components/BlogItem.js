import React from 'react';
import { View, Text, Button } from 'react-native';
import { BlogItemStyles } from '../styles/CommonStyles';

const BlogItem = ({ data, handleGoToPost}) => {
  return (
    <View style={BlogItemStyles.container}>
      <Text>{data.bodyShort}</Text>
      <Button title="Read" onPress={() => handleGoToPost(data.id)} />
    </View>
  )
}

export default BlogItem;