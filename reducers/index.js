import { combineReducers } from 'redux';

import decksReducers from './decks';

export default combineReducers(
  Object.assign(
    {},
    { constants: (state = {}) => state },
    decksReducers,
  )
);
