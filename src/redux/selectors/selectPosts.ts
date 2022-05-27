import { RootState } from 'redux/store';
import { PostType } from 'redux/types';

export const selectPosts = (state: RootState): PostType[] => state.usersReducer.posts;
