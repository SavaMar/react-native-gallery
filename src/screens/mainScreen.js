import React, {Component} from 'react';
import {View, Button, Text, FlatList, StyleSheet, TouchableOpacity, Image} from 'react-native';
import api from '../config/api';

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

  renderFlatListItem(item) {
    const { navigate } = this.props.navigation;
    return(
      <TouchableOpacity onPress={() => navigate('Photo', { user: item.name, image_url:item.image_url })} style={styles.container}>
        <Image
          source={{uri: item.image_url}} style={styles.photo}
        />
        <View style={{alignItems: 'flex-start', marginBottom: 10, marginLeft: 10}}>
          <Text style={styles.photoName}>{item.name}</Text>
          <Text style={styles.userName}>{item.user.fullname}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    
    return (
      // <View>
      //   <Text>Hello, Chat App!</Text>
      //   <Button
      //     onPress={() => navigate('Photo')}
      //     title="Open"
      //   />
      // </View>
      // ====================
      <View>
        <FlatList  style={{backgroundColor: '#e6e6e6'}}
          data={this.state.photos}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => this.renderFlatListItem(item)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 5,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
  },
  photo: {
    // marginBottom: 10, 
    // marginLeft: 10,
    height: 100,
    width: 100
  },
  photoName: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  userName: {
    color: 'rgba(0,0,0,.4)',
  }
})

// renderItem={({item}) => <Button onPress={() => navigate('Photo', { user: item.name })} style={styles.item} title={item.name}/>}