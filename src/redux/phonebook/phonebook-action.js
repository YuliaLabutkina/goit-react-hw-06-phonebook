import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('add/Contact', contact => ({
  payload: {
    id: uuidv4(),
    ...contact,
  },
}));
const deleteContact = createAction('delete/Contact');
const filterContact = createAction('contact/Filter');

export { addContact, deleteContact, filterContact };
