import { createSlice } from '@reduxjs/toolkit';

import { addCommitTC, getCommentsPostTC } from 'redux/thunks/commentTC';
import { getUserPostsTC, usersTC, getUserTC } from 'redux/thunks/usersTC';
import { InitialState } from 'redux/types';

const initialState: InitialState = {
  status: 'idle',
  users: [],
  user: {
    id: 0,
    company: { bs: '', name: '', catchPhrase: '' },
    phone: '',
    email: '',
    website: '',
    address: { geo: { lat: '', lng: '' }, city: '', street: '', suite: '', zipcode: '' },
    name: '',
    username: '',
  },
  posts: [],
  comments: [],
  error: '',
};
export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [usersTC.pending.type]: state => {
      state.status = 'loading';
    },
    [usersTC.fulfilled.type]: (state, { payload }) => {
      state.status = 'resolved';
      state.users = payload;
    },
    [usersTC.rejected.type]: (state, { payload }) => {
      state.status = 'rejected';
      state.error = payload;
    },
    [getUserTC.pending.type]: state => {
      state.status = 'loading';
    },
    [getUserTC.fulfilled.type]: (state, { payload }) => {
      state.status = 'resolved';
      state.user = payload;
    },
    [getUserTC.rejected.type]: (state, { payload }) => {
      state.status = 'rejected';
      state.error = payload;
    },
    [getUserPostsTC.pending.type]: state => {
      state.status = 'loading';
    },
    [getUserPostsTC.fulfilled.type]: (state, { payload }) => {
      state.status = 'resolved';
      state.posts = payload;
    },
    [getUserPostsTC.rejected.type]: (state, { payload }) => {
      state.status = 'rejected';
      state.error = payload;
    },
    [getCommentsPostTC.pending.type]: state => {
      state.status = 'loading';
    },
    [getCommentsPostTC.fulfilled.type]: (state, { payload }) => {
      state.status = 'resolved';
      state.comments = payload;
    },
    [getCommentsPostTC.rejected.type]: (state, { payload }) => {
      state.status = 'rejected';
      state.error = payload;
    },
    [addCommitTC.pending.type]: state => {
      state.status = 'loading';
    },
    [addCommitTC.fulfilled.type]: (state, { payload }) => {
      state.status = 'resolved';
      state.comments = [
        ...state.comments,
        {
          id: payload.id,
          postId: payload.postId,
          body: payload.body,
          email: payload.email,
          name: payload.firstName,
        },
      ];
    },
    [addCommitTC.rejected.type]: (state, { payload }) => {
      state.status = 'rejected';
      state.error = payload;
    },
  },
});

export default usersSlice.reducer;
