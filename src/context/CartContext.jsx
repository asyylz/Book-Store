import {
  createContext,
  useReducer,
  useContext,
} from 'react';

// it is good for auto complete
const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

function cartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: updatedItems };
  }

  if (action.type === 'REMOVE_ITEM') {
    const removeItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const updatedItems = [...state.items];
    const itemToBeRemoved = state.items[removeItemIndex];

    if (itemToBeRemoved.quantity > 1) {
      const updatedItem = {
        ...itemToBeRemoved,
        quantity: itemToBeRemoved.quantity - 1,
      };
      updatedItems[removeItemIndex] = updatedItem;
    } else if (itemToBeRemoved.quantity === 1) {
      updatedItems.splice(removeItemIndex, 1);
    }
    return { ...state, items: updatedItems };
  }

  if (action.type === 'CLEAR_CART') {
    return { ...state, items: [] };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({ type: 'ADD_ITEM', item });
  }
  function removeItem(id) {
    dispatchCartAction({ type: 'REMOVE_ITEM', id });
  }

  function clearCart() {
    dispatchCartAction({ type: 'CLEAR_CART' });
  }
  
  return (
    <CartContext.Provider
      value={{ items: cart.items, addItem, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
export const useCartContext = () => {
  return useContext(CartContext);
};

export default CartContextProvider;
