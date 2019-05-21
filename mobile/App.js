import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import BlogsScreen from './src/screens/BlogsScreen';
import BlogDetailsScreen from './src/screens/BlogDetailsScreen';

const RootStack = createStackNavigator(
  {
    Blogs: BlogsScreen,
    BlogDetails: BlogDetailsScreen
  },
)

const App = createAppContainer(RootStack);

export default App;