import { useDispatch, useSelector } from "react-redux";

import {
  selectIsProfileOpen,
} from "../../store/profile/profile.selector";
import { setIsProfileOpen } from "../../store/profile/profile.reducer";

import { ReactComponent as UserIcon } from "../../assets/profile-icon.svg";

import { ProfileIconContainer } from "./profile-icon.styles";

const ProfileIcon = () => {
  const dispatch = useDispatch();

  const isProfileOpen = useSelector(selectIsProfileOpen);

  const toggleIsProfileOpen = () => dispatch(setIsProfileOpen(!isProfileOpen));

  return (
    <ProfileIconContainer onClick={toggleIsProfileOpen}>
      <UserIcon/>
    </ProfileIconContainer>
  );
};

export default ProfileIcon;
