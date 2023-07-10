import { Fragment, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CartIcon from '../../components/cart-icon/cart-icon';
import ProfileIcon from '../../components/profile-icon/profile-icon';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown';
import ProfileDropdown from '../../components/profile-dropdown/profile-dropdown';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectIsProfileOpen } from '../../store/profile/profile.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import useOutsideClick from './../../hooks/clickOutside';
import { setIsCartOpen } from '../../store/cart/cart.reducer';
import { setIsProfileOpen } from '../../store/profile/profile.reducer';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from './navigation.styles';

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const isProfileOpen = useSelector(selectIsProfileOpen);
  const cartRef = useRef<HTMLInputElement>(null);
  const profileRef = useRef<HTMLInputElement>(null);

  useOutsideClick(cartRef, () => dispatch(setIsCartOpen(false)));
  useOutsideClick(profileRef, () => dispatch(setIsProfileOpen(false)));
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>

          {!currentUser && <NavLink to='/auth'>SIGN IN</NavLink>}
          <div ref={cartRef}>
            <CartIcon />
          </div>
          {currentUser && <div ref={profileRef}>
            <ProfileIcon />
          </div>}
        </NavLinks>
        {isCartOpen && <CartDropdown />}
        {isProfileOpen && <ProfileDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
