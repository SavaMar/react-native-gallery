import React, {Component} from 'react';
import {View, Button, Text, FlatList, StyleSheet} from 'react-native';
import api from '../config/api';
import _ from 'lodash';

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      page: 1,
      photos: []
    };
  }
  static navigationOptions = {
    title: 'Photo List',
  };

  componentDidMount() {
    this.makeRemoteRequest()
  }

  makeRemoteRequest() {
    console.log("makeRemoteRequest() page:", this.state.page)
      api.getPhotos(this.state.page).then((res) => {
          this.setState({
              photos: res.photos
          });
      })
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      // <View>
      //   <Text>Hello, Chat App!</Text>
      //   <Button
      //     onPress={() => navigate('Photo')}
      //     title="Open"
      //   />
      // </View>
      // ====================
      <View style={styles.container}>
      {console.log("HERE " + this.state.photos)}
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Button onPress={() => navigate('Photo', { user: item.key })} style={styles.item} title={item.key}/>}
        />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    paddingTop: 22
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// })

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
