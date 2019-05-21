import React from 'react';
import { Text, View, FlatList } from 'react-native';

import BlogItem from '../components/BlogItem';
import UserWidget from '../components/UserWidget';
import Loading from '../components/Loading';
import GeneralRepository from '../repositories/GeneralRepository';
import { BlogsScreenStyles } from '../styles/CommonStyles';

export default class AllBlogsScreen extends React.Component {
  state = {
    currentUser: null,
    blogs: []
  }

  componentDidMount() {
    GeneralRepository.getUsers()
      .then(users => {
        const currentUser = users[Math.floor(Math.random() * users.length)];

        GeneralRepository.getUsersBlogs(currentUser.id)
          .then(blogs => {
            this.setState({ currentUser, blogs })
          })
        
      })
  }

  handleGoToPost = id => {
    this.props.navigation.navigate('BlogDetails', { blogId: id, userId: this.state.currentUser })
  }

  render() {
    const { currentUser, blogs } = this.state

    if (!currentUser) {
      return <Loading />
    }
    
    return (
      <View style={BlogsScreenStyles.container}>
        <UserWidget user={currentUser} />
        <View style={BlogsScreenStyles.listContainer}>
          <FlatList
            data={blogs}
            renderItem={({ item }) => <BlogItem data={item} handleGoToPost={this.handleGoToPost}/>} />
        </View>
      </View>
    );
  }
}