import CommonButton, {
  BUTTON_TYPE_CLASSES,
} from "../../shared/components/button/button";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.reducer";
import styles from "./product-card.module.scss";

const ProductCard = ({product}: any) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const addProductToCart = () => dispatch(addItemToCart(product));

  return (
    <div className={styles.productCardContainer}>
      <img className={styles.image} src={imageUrl} alt={`${name}`} />
      <div className={styles.footer}>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <CommonButton className={styles.productCardButton}
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </CommonButton>
    </div>
  );
};

export default ProductCard;
