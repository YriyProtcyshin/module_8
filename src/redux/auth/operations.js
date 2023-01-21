import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://goit-task-manager.herokuapp.com/';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      console.log('createAsyncThunk');
      const res = await axios.post('/users/signup', credentials);
      return res.data;
    } catch (error) {
      console.log('createAsyncThunk');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
