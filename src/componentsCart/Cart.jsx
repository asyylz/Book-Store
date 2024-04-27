import { useCartContext } from '../context/CartContext.jsx';
import { currencyFormatter } from '../utils/currencyFormatter.js';
import CartButton from './CartButton.jsx';
import CartItem from './CartItem.jsx';
import './style.css';
import Modal from './Modal.jsx';
import { useUserProgressContext } from '../context/UserProgressContext.jsx';

export default function Cart() {
  const { items, addItem, removeItem } = useCartContext();
  const { progress, hideCart, showCheckout } = useUserProgressContext();
  console.log(items);

  function handleCloseCart() {
    hideCart();
  }

  function handleGoToCheckout() {
    showCheckout();
  }

  const totalPrice = items.reduce(
    (totalPrice, item) =>
      totalPrice +
      item.quantity *
        (item.saleInfo.listPrice?.amount ? item.saleInfo.listPrice.amount : 10),
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
            name={item.volumeInfo.title}
            price={
              item.saleInfo.listPrice?.amount
                ? item.saleInfo.listPrice.amount
                : 10
            }
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
