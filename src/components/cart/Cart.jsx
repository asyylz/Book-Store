//import Modal from './UI/Modal.jsx';
import { useCartContext } from '../../context/CartContext.jsx';
import { currencyFormatter } from '../../utils/currencyFormatter.js';
import CartButton from './CartButton.jsx';
//import UserProgressContext from "../store/UserProgressContext.jsx";
import CartItem from './CartItem.jsx';
import './style.css';
import Modal from './Modal.jsx';
import { useUserProgressContext } from '../../context/UserProgressContext.jsx';

export default function Cart() {
  const { items, addItem, removeItem, clearCart } = useCartContext();
  const { progress, showCart, hideCart, showCheckout, hideCheckout } =
    useUserProgressContext();

  function handleCloseCart() {
    hideCart();
  }

  function handleGoToCheckout() {
    showCheckout();
  }

  const totalPrice = items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );
  return (
    <Modal
      className="cart"
      open={progress === 'cart'}
      onClose={progress === 'cart' ? handleCloseCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onIncrease={() => addItem(item)}
            onDecrease={() => removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="total">{currencyFormatter.format(totalPrice)}</p>
      <p className="modal-actions">
        <CartButton textOnly onClick={handleCloseCart}>
          Close
        </CartButton>
        {items.length > 0 && (
          <CartButton onClick={handleGoToCheckout}> Go to Checkout</CartButton>
        )}
      </p>
    </Modal>
  );
}
