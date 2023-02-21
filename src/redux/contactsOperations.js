import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        'https://63dbd152a3ac95cec5ab6c7f.mockapi.io/contacts'
      );

      if (!response.ok) {
        throw new Error('Server Error');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async function (id, { rejectWithValue }) {
    try {
      const response = await fetch(
        `https://63dbd152a3ac95cec5ab6c7f.mockapi.io/contacts/${id}`,
        { method: 'DELETE' }
      );

      if (!response.ok) {
        throw new Error("Can't delete contact. Server Error");
      }
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async function (contact, { rejectWithValue }) {
    try {
      const response = await fetch(
        'https://63dbd152a3ac95cec5ab6c7f.mockapi.io/contacts/',
        {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(contact),
        }
      );

      if (!response.ok) {
        throw new Error("Can't add contact. Server Error");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
