import { RootState } from 'redux/store';
import { CommentType } from 'redux/types';

export const selectComments = (state: RootState): CommentType[] =>
  state.usersReducer.comments;
