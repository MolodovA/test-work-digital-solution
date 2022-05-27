import { RootState, useAppSelector } from 'redux/store';
import { UserType } from 'redux/types';

export const selectUsers = (state: RootState): UserType[] => state.usersReducer.users;
