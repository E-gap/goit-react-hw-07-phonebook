import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  deleteContacts,
  addContacts,
} from './contactsOperations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: true,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
      state.error = false;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContacts.fulfilled]: (state, action) => {
      state.error = false;
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    [addContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContacts.fulfilled]: (state, action) => {
      state.error = false;
      state.contacts.push(action.payload);
    },
  },
});

export default contactsSlice.reducer;
