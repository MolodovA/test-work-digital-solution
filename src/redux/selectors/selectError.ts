import { RootState } from 'redux/store';

export const selectError = (state: RootState): string => state.usersReducer.error;
