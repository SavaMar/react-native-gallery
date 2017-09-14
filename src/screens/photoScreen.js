import React, {Component} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class PhotoScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.user}`,
  });
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.imageContainer}>
        <Image
          source={{uri: params.image_url}} style={styles.image}
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 500,
    height: 500,
    resizeMode: 'contain'
  }
});