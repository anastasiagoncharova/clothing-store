import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import PaymentForm from '../../components/payment-form/payment-form';
import CommonButton, {
  BUTTON_TYPE_CLASSES,
} from '../../shared/components/button/button';
import styles from './checkout.module.scss';

const Checkout = () => {
  const [promocode, setPromocode] = useState(null);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const getPromocode = () => {
    axios.get('http://localhost:5000/').then((response) => {
      setPromocode(response.data);
    });
  };

  return (
    <div className={styles.CheckoutContainer}>
      <div className={styles.CheckoutHeader}>
        <div className={styles.HeaderBlock}>
          <span>Product</span>
        </div>
        <div className={styles.HeaderBlock}>
          <span>Description</span>
        </div>
        <div className={styles.HeaderBlock}>
          <span>Quantity</span>
        </div>
        <div className={styles.HeaderBlock}>
          <span>Price</span>
        </div>
        <div className={styles.HeaderBlock}>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className={styles.Total}>Total: ${cartTotal}</div>
      <CommonButton
        buttonType={BUTTON_TYPE_CLASSES.google}
        type='button'
        onClick={getPromocode}
      >
        Get Promocode
      </CommonButton>
      {promocode && <span> promocode - {promocode}</span>}
      <PaymentForm />
    </div>
  );
};

export default Checkout;
