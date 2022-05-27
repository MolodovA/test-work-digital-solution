import { createAsyncThunk } from '@reduxjs/toolkit';

import { usersAPI } from 'api/users-api';

export const usersTC = createAsyncThunk(
  'users/usersTC',

  async (_, ThunkAPI) => {
    try {
      const data = await usersAPI.getUsers();
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue('не удалось загрузить пользователей (Error 404)');
    }
  },
);

export const getUserTC = createAsyncThunk(
  'users/getUserTC',

  async (id: number, ThunkAPI) => {
    try {
      const data = await usersAPI.getUser(id);

      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue('не удалось загрузить (Error 404)');
    }
  },
);

export const getUserPostsTC = createAsyncThunk(
  'users/getUserPostsTC',

  async (id: number, ThunkAPI) => {
    try {
      const data = await usersAPI.getUserPosts(id);
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue('не удалось загрузить посты (Error 404)');
    }
  },
);
