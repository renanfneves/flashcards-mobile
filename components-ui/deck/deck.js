import React from 'react';
import { View, Text } from 'react-native';

const Deck = ({ name }) => (
  <View>
    <Text>Deck to list</Text>
    <Text>{name}</Text>
  </View>
);

export default Deck;
