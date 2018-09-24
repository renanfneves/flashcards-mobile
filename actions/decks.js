import { AsyncStorage } from 'react-native';

export const ADD_DECK = 'ADD_DECK';
export const AVAILABLE_DECKS = 'AVAILABLE_DECKS';

export const addedDeck = () => ({
  type: ADD_DECK
});

export const availableDecks = decks => ({
  type: AVAILABLE_DECKS,
  decks,
});


export const INITIAL_DECKS = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'React is cool?',
        answer: 'Yes'
      },
      {
        question: 'React is a framework?',
        answer: 'Yes'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'JavaScript is cool?',
        answer: 'Yes'
      }
    ]
  },
  Ruby: {
    title: 'Ruby',
    questions: [
      {
        question: 'Ruby is cool?',
        answer: 'Yes.'
      }
    ]
  },
}

export const addDeck = dispatch => (
  // salva em localstorage e faz dispatch para addedDeck
  () => {}
);

export const getDecks = decks => ({
  type: AVAILABLE_DECKS,
  decks,
});