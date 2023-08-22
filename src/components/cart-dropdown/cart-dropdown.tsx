import { useSelector } from "react-redux";
import Link from 'next/link';
import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../store/cart/cart.selector";

import styles from "./cart-dropdown.module.scss";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  console.log(cartItems);
  
  return (
    <div className={styles.CartDropdownContainer}>
      <div className={styles.CartItems}>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <div className={styles.EmptyMessage}>Your cart is empty</div>
        )}
      </div>
      <Link href={`/checkout`}>GO TO CHECKOUT</Link>
    </div>
  );
};

export default CartDropdown;
