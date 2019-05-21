import React from 'react';
import { Text, View } from 'react-native';
import { UserWidgetStyles } from '../styles/CommonStyles';

const UserWidget = ({ user }) => (
  <View style={UserWidgetStyles.userContainer}>
    <Text style={UserWidgetStyles.userText}>Hello, {user.name}</Text>
  </View>
)

export default UserWidget;