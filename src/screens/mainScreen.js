import React, {Component} from 'react';
import {
  View, 
  Button, 
  Text, 
  FlatList, 
  StyleSheet, 
  TouchableOpacity, 
  Image, 
  ActivityIndicator
} from 'react-native';
import api from '../config/api';

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      page: 1,
      photos: [],
      loading: false,
      refreshing: false
    };
  }
  static navigationOptions = {
    title: 'Photo List',
  };

  renderSeparator() {
    return (
      <View
        style={{
          height: 1,
          width: "58%",
          marginLeft: "35%",
          backgroundColor: "#CED0CE",
        }}
      />
    );
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  handleLoadMore = () =>{
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  componentDidMount() {
    this.makeRemoteRequest()
  }

  makeRemoteRequest() {
    console.log("makeRemoteRequest() page:", this.state.page)
    const { page } = this.state;
    const url = `https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF&page=${page}`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          photos: page === 1 ? res.photos : [...this.state.photos, ...res.photos],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
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
      <View>
        <FlatList style = {{backgroundColor: '#fff'}}
          data={this.state.photos}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => this.renderFlatListItem(item)}
          ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={50}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginBottom: 5,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingTop: 5,
    // paddingBottom: 5,
    paddingLeft: 5,
    width: "100%"
  },
  photo: {
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

