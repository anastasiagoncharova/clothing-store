import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import Button from "../../shared/components/button/button";
import { signOutUser } from '../../utils/firebase/firebase.utils';


import {
  ProfileDropdownContainer,
  ProfileItems,
  ProfileItem
} from './profile-dropdown.styles';

const ProfileDropdown = () => {
  const currentUser = useSelector(selectCurrentUser);
  console.log(currentUser);
  return (
    <ProfileDropdownContainer>
      <ProfileItems>
        <ProfileItem>{currentUser.displayName}</ProfileItem>
        <ProfileItem>{currentUser.email}</ProfileItem>
      </ProfileItems>
      <Button onClick={signOutUser}>
        SIGN OUT
      </Button>
    </ProfileDropdownContainer>
  );
};

export default ProfileDropdown;
