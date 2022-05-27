import { createAsyncThunk } from '@reduxjs/toolkit';

import { usersAPI } from 'api/users-api';
import { ParamsType } from 'redux/types';

export const getCommentsPostTC = createAsyncThunk(
  'users/getFullInfoPostTC',

  async (id: number, ThunkAPI) => {
    try {
      const data = await usersAPI.getCommentsPost(id);
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue('не удалось загрузить комментарии (Error 404)');
    }
  },
);

export const addCommitTC = createAsyncThunk(
  'users/addCommentTC',

  async (params: ParamsType, ThunkAPI) => {
    try {
      const data1 = await usersAPI.addCommentsPost(params);
      return data1;
    } catch (error) {
      return ThunkAPI.rejectWithValue('не удалось отправить комментарий (Error 404)');
    }
  },
);
