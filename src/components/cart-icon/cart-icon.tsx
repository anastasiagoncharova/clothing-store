import { useDispatch, useSelector } from "react-redux";

import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.reducer";

import ShoppingIcon from '../icons/Shopping';

import styles from "./cart-icon.module.scss";

const CartIcon = () => {
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <div className={styles.CartIconContainer} onClick={toggleIsCartOpen}>
      <ShoppingIcon/>
      <div className={styles.ItemCount}>{cartCount}</div>
    </div>
  );
};

export default CartIcon;
