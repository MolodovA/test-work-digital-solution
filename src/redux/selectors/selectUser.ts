import { RootState } from 'redux/store';
import { UserType } from 'redux/types';

export const selectUser = (state: RootState): UserType => state.usersReducer.user;
