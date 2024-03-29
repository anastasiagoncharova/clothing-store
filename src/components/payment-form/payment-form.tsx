import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';
import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import CommonButton, { BUTTON_TYPE_CLASSES } from '../../shared/components/button/button';

import styles from './payment-form.module.scss';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setProcessingPayment] = useState(false);
  const paymentHandler = async (e: any) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setProcessingPayment(true);
    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => {
      return res.json();
    });

    const clientSecret = response.paymentIntent.client_secret;
    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      return;
    }
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Anastasia Goncharova',
        },
      },
    });

    setProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successful!');
      }
    }
  };

  return (
    <div className={styles.PaymentFormContainer}>
      <div className={styles.FormContainer} onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <CommonButton
          className={styles.PaymentButton}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          isLoading={isProcessingPayment}
        >
          Pay Now
        </CommonButton>
      </div>
    </div>
  );
};
export default PaymentForm;
