import Modal from './Modal.jsx';
import { useCartContext } from '../context/CartContext.jsx';
import { currencyFormatter } from '../utils/currencyFormatter.js';
import Input from './Input.jsx';
import Button from './Button.jsx';
import { useUserProgressContext } from '../context/UserProgressContext.jsx';
import Error from './Error.jsx';
import { useState } from 'react';

export default function Checkout() {
  const { items, clearCart } = useCartContext();
  const { progress, hideCheckout, createOrder, error, setError } =
    useUserProgressContext();
  const user = JSON.parse(localStorage.getItem('user'));

  const [isSending, setIsSending] = useState(false);

  const cartTotal = items.reduce(
    (totalPrice, item) =>
      totalPrice +
      item.quantity *
        (item.saleInfo.listPrice?.amount ? item.saleInfo.listPrice.amount : 10),
    0
  );

  function handleClose() {
    hideCheckout();
    setError('');
  }

  function handleFinish() {
    hideCheckout();
    clearCart();
    setError('');
  }
console.log(error)
  async function handleSubmit(event) {
    event.preventDefault();
    //console.log('clicked');
    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());
    const orderDate = new Date().toISOString();
    const orderData = {
      items: items,
      customer: customerData,
      orderDate: orderDate,
    };

    try {
      await createOrder(orderData);
    } catch (error) {
      console.log(error);
    }
  }

  let actions = (
    <>
      <Button type="button" textOnly onClick={handleClose}>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );

  if (isSending) {
    actions = <span>Sending order data...</span>;
  }

  if (!error && user) {
    return (
      <Modal open={progress === 'checkout'} onClose={handleFinish}>
        <h2>Success!</h2>
        <p>Your order was submitted successfully.</p>
        <p>
          We will get back to you with more details via email within the next
          few minutes.
        </p>
        <p className="modal-actions">
          <Button onClick={handleFinish}>Okay</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal open={progress === 'checkout'} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

        <Input label="Full Name" type="text" id="name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>

        {error && <Error title="Failed to submit order" message={error} />}

        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
}
