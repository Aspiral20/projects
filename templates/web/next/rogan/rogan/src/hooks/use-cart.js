import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useCart = () => {
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  const {cart_products} = useSelector(state => state.cart);

  useEffect(() => {
    const cart = cart_products.reduce((cartTotal, cartItem) => {
      const { price, quantity } = cartItem;
      if (price !== 'free') {
        const itemTotal = Number(price) * quantity;
        cartTotal.total += itemTotal
      }
      cartTotal.quantity += quantity

      return cartTotal;
    }, {
      total: 0,
      quantity: 0,
    })
    setQuantity(cart.quantity);
    setTotal(cart.total);
  }, [cart_products])

  return {
    quantity,
    total,
  }
}

export default useCart;