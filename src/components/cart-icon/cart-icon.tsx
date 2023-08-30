import { useDispatch, useSelector } from "react-redux";
import Image from 'next/image';
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.reducer";

import ShoppingIcon from '../../assets/shopping-bag.svg';

import styles from "./cart-icon.module.scss";

const CartIcon = () => {
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <div className={styles.CartIconContainer} onClick={toggleIsCartOpen}>
      <Image src={ShoppingIcon} alt="logo" width="25" height="25" />
      <div className={styles.ItemCount}>{cartCount}</div>
    </div>
  );
};

export default CartIcon;
