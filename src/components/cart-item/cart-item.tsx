import styles from './cart-item.module.scss';

const CartItem = ({cartItem}: any) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className={styles.cartItemContainer}>
      <img className={styles.cartItemImg} src={imageUrl} alt={`${name}`} />
      <div className={styles.itemDetails}>
        <span className={styles.name}>{name}</span>
        <span className={styles.itemDetails}>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
