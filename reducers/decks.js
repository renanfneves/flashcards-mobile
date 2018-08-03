import { AVAILABLE_DECKS } from '../actions/decks'

const availableDecks = (state = [], action) => {
  switch (action.type) {
    case AVAILABLE_DECKS :
      return action.decks;

    default :
      return state;
  }
}

export const decksReducers = {
  availableDecks,
};
