
import { useSelector, useDispatch } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon';
import ProfileIcon from '../profile-icon/profile-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import ProfileDropdown from '../profile-dropdown/profile-dropdown';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectIsProfileOpen } from '../../store/profile/profile.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import useOutsideClick from '../../hooks/clickOutside';
import { setIsCartOpen } from '../../store/cart/cart.reducer';
import { setIsProfileOpen } from '../../store/profile/profile.reducer';
import CrownLogo from '../icons/Crown';
import Link from 'next/link';
import styles from './navigation.module.scss';

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const isProfileOpen = useSelector(selectIsProfileOpen);
  // const cartRef = useRef<HTMLInputElement>(null);
  // const profileRef = useRef<HTMLInputElement>(null);

  // useOutsideClick(cartRef, () => dispatch(setIsCartOpen(false)));
  // useOutsideClick(profileRef, () => dispatch(setIsProfileOpen(false)));
  return (
    <>
      <div className={styles.NavigationContainer}>
        <Link href={`/`}>
          <CrownLogo />
        </Link>
        <div className={styles.NavLinks}>
          <Link href={`/shop`}>SHOP</Link>

          {!currentUser && <Link href={`/auth`}>SIGN IN</Link>}
          <div>
            <CartIcon />
          </div>
          {currentUser && (
            <div>
              <ProfileIcon />
            </div>
          )}
        </div>
        {isCartOpen && <CartDropdown />}
        {isProfileOpen && <ProfileDropdown />}
      </div>
    </>
  );
};

export default Navigation;
