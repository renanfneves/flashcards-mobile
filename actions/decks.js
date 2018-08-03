export const ADD_DECK = 'ADD_DECK';
export const AVAILABLE_DECKS = 'AVAILABLE_DECKS';

export const addedDeck = () => ({
  type: ADD_DECK
});

export const availableDecks = decks => ({
  type: AVAILABLE_DECKS,
  decks,
});

export const addDeck = dispatch => (
  // salva em localstorage e faz dispatch para addedDeck
  () => {}
);

export const getDecks = dispacth => {
  // busca no localstorage e faz dispatch para availableDecks
  const decks = [
    {
      name: "Raciocínio lógico",
    },
    {
      name: "Udacity",
    },
  ];
  return dispacth(availableDecks(decks));
};
