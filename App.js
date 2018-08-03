import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from "./store";
import Routes from './routes';
import { AppLoading, Font } from 'expo';

class App extends Component {
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
      <Provider store={store}>
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

export default App;