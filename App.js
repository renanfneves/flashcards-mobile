import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import Routes from './routes';
import { AppLoading, Font } from 'expo';

export default class App extends Component {
  state = {
    fontLoaded: false
  };

  async componentWillMount() {
    try {
      await Font.loadAsync({
        FontAwesome: require("@expo/vector-icons/fonts/FontAwesome.ttf"),
        MaterialIcons: require("@expo/vector-icons/fonts/MaterialIcons.ttf"),
        "Material Icons": require("@expo/vector-icons/fonts/MaterialIcons.ttf")
      });

      this.setState({ fontLoaded: true });
    } catch (error) {
      console.log('error loading icon fonts', error);
    }
  }

  render() {
    console.log(this.state.fontLoaded)
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    }

    return (
      <Provider store={createStore(reducers)}>
        <Routes />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
