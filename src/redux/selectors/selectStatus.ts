import { RootState } from 'redux/store';
import { StatusType } from 'redux/types';

export const selectStatus = (state: RootState): StatusType => state.usersReducer.status;
