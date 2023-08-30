import { useDispatch, useSelector } from "react-redux";

import {
  selectIsProfileOpen,
} from "../../store/profile/profile.selector";
import { setIsProfileOpen } from "../../store/profile/profile.reducer";
import Image from 'next/image';
import UserIcon from '../../assets/profile-icon.svg';

import styles from "./profile-icon.module.scss";

const ProfileIcon = () => {
  const dispatch = useDispatch();

  const isProfileOpen = useSelector(selectIsProfileOpen);

  const toggleIsProfileOpen = () => dispatch(setIsProfileOpen(!isProfileOpen));

  return (
    <div className={styles.ProfileIconContainer} onClick={toggleIsProfileOpen}>
      <Image src={UserIcon} alt="logo" width="30" height="30" />
    </div>
  );
};

export default ProfileIcon;
