import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { BlogDetailsScreenStyles } from '../styles/CommonStyles';

import CommentInput from '../components/CommentInput';
import CommentItem from '../components/CommentItem';
import Loading from '../components/Loading';
import GeneralRepository from '../repositories/GeneralRepository';

export default class SingleBlogScreen extends React.Component {
  state = {
    blog: null,
    userId: null,
    comments: []
  }
  componentDidMount() {
    const { navigation } = this.props;
    const blogId = navigation.getParam('blogId', null);
    const userId = navigation.getParam('userId', null);

    if (blogId) {
      GeneralRepository.getBlog(blogId)
        .then(blog => {
            this.setState({ blog, userId })
            this.getComments(blogId);
        })
    }
  }

  getComments(blogId) {
    GeneralRepository.getCommentsByBlogPost(blogId)
      .then(comments => {
        this.setState({ comments });
      })
  }

  addComment = body => {
    const newComment = {
      blogpostId: this.state.blog.id,
      userId: this.state.userId,
      body
    }

    GeneralRepository.addComment(newComment)
      .then((createdComment) => {
        console.log(createdComment);
        this.setState(prevState => {
          return {
            comments: prevState.comments.concat(createdComment)
          }
        })
      })
  }
  
  render() {
    const { blog, comments } = this.state;

    if (!blog) {
      return <Loading />
    }
    
    return (
      <View style={BlogDetailsScreenStyles.container}>
        <View style={BlogDetailsScreenStyles.headerContainer}>
          <Text style={BlogDetailsScreenStyles.header}>{blog.bodyShort}</Text>
        </View>
        <Text style={BlogDetailsScreenStyles.body}>Post {blog.body}</Text>
        <View style={BlogDetailsScreenStyles.commentsContainer}>
          <FlatList
              data={comments}
              renderItem={({ item }) => <CommentItem data={item} />} />
        </View>
        <CommentInput addComment={this.addComment} />
      </View>
    );
  }
}
