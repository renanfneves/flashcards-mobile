import { createStackNavigator } from 'react-navigation';
import React from "react";
import Decks from './containers/decks';
import DeckDetails from './containers/deck-details';
import NewDeck from './containers/new-deck';
import NewCard from './containers/new-card';
import Quiz from './containers/quiz';
import Score from './containers/score';
import { EvilIcons } from '@expo/vector-icons';

const Routes = createStackNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: ({ navigation }) => ({
      title: 'Decks',
      headerTintColor: 'white',
      headerStyle:{
          backgroundColor: '#000000'
      },
      headerRight: (
        <EvilIcons
          name="plus"
          size={32}
          color="white"
          style={{marginRight:10}}
          onPress={() => { navigation.navigate('NewDeck')}}
        />
      ),
    })
  },
  DeckDetails: {
    screen: DeckDetails,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: 'white',
      headerStyle:{
        backgroundColor: '#000000'
      },
    })
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: ({ navigation }) => ({
      title: 'New Deck',
      headerTintColor: 'white',
      headerStyle:{
        backgroundColor: '#000000'
      },
    })
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: ({ navigation }) => ({
      title: 'New Card',
      headerTintColor: 'white',
      headerStyle:{
        backgroundColor: '#000000'
      },
    })
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: 'white',
      headerStyle:{
        backgroundColor: '#000000'
      },
    })
  },
  Score:{
    screen: Score,
    navigationOptions: ({ navigation }) => ({
      title: 'Score',
      headerTintColor: 'white',
      headerStyle:{
        backgroundColor: '#000000'
      },
    })
}
}, {
  initialRouteName: "Decks"
});

export default Routes;
