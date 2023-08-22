import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import CommonButton from "../../shared/components/button/button";
import { signOutUser } from '../../utils/firebase/firebase.utils';

import styles from './profile-dropdown.module.scss';

const ProfileDropdown = () => {
  const currentUser = useSelector(selectCurrentUser);
  console.log(currentUser);
  return (
    <div className={styles.ProfileDropdownContainer}>
      <div className={styles.ProfileItems}>
        <div className={styles.ProfileItem}>{currentUser.displayName}</div>
        <div className={styles.ProfileItem}>{currentUser.email}</div>
      </div>
      <CommonButton onClick={signOutUser}>
        SIGN OUT
      </CommonButton>
    </div>
  );
};

export default ProfileDropdown;
