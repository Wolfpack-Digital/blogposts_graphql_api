import React from 'react';
import { TextInput, Button, View } from 'react-native';

class CommentInput extends React.Component {
  state = {
    body: ''
  }
  
  handleSubmit = e => {
    const { body } = this.state;
    if (body.length) {
      this.props.addComment(body);
      this.setState({ body: ''})
    }
  }

  render() {
    return (
      <View style={{width: '90%',}}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(body) => this.setState({body})}
          value={this.state.body} />
          <Button title="Submit" onPress={this.handleSubmit}/>
      </View>
    )
  }
}

export default CommentInput;