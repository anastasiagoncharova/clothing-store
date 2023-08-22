import { useDispatch, useSelector } from "react-redux";

import {
  selectIsProfileOpen,
} from "../../store/profile/profile.selector";
import { setIsProfileOpen } from "../../store/profile/profile.reducer";

import UserIcon from '../icons/User';

import styles from "./profile-icon.module.scss";

const ProfileIcon = () => {
  const dispatch = useDispatch();

  const isProfileOpen = useSelector(selectIsProfileOpen);

  const toggleIsProfileOpen = () => dispatch(setIsProfileOpen(!isProfileOpen));

  return (
    <div className={styles.ProfileIconContainer} onClick={toggleIsProfileOpen}>
      <UserIcon/>
    </div>
  );
};

export default ProfileIcon;
