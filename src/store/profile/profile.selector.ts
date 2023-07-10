import { createSelector } from 'reselect';
import { ProfileState } from './profile.reducer';
import { RootState } from '../store';

const selectProfileReducer = (state: RootState): ProfileState => state.profile;

export const selectIsProfileOpen = createSelector(
  [selectProfileReducer],
  (profile) => profile.isProfileOpen
);
