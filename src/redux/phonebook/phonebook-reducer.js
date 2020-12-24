import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContact } from './phonebook-action';

const items = createReducer([], {
  [addContact.type]: (state, { payload }) => [...state, payload],
  [deleteContact.type]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [filterContact.type]: (_, { payload }) => payload,
});

const phonebookReducer = combineReducers({
  items,
  filter,
});

export default phonebookReducer;
