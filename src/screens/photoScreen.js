import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';

export default class PhotoScreen extends React.Component {
    // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Image
          source={{uri: params.image_url}} style={{height:300, width: 300}}
        />
      </View>
    );
  }
}
        // <Text style={{height:100, width: 100}} >Chat with {params.user}</Text>