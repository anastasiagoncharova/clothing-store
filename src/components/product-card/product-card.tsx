import "./product-card.styles.scss";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../shared/components/button/button";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.reducer";

const ProductCard = ({product}: any) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const addProductToCart = () => dispatch(addItemToCart(product));

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
