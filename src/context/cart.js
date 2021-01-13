import React, { createContext, useEffect,useState } from 'react'

export const CartContext = createContext()

const CartProvider = ({children}) => {
  const getCartFromLocalStorage = () => {
    return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
  }
  const [cart, setCart] = useState(getCartFromLocalStorage());
  const [cartItems, setCartItems] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
    let newCartItems = cart.reduce((total, cartItem) => {
      return total += cartItem.amount
    }, 0)
    let newCartTotal = cart.reduce((total, cartItem) => {
      return total += cartItem.amount * cartItem.price
    }, 0)
    newCartTotal = parseFloat(newCartTotal.toFixed(2))
    setCartTotal(newCartTotal)
    setCartItems(newCartItems)
  }, [cart]);

  const removeItem = id => {
    let newCart = [...cart].filter(cartItem => {
      return cartItem.id !== id
    })
    setCart(newCart)
  }

  const increaseAmount = id => {
    const newCart = [...cart].map(item => {
      return item.id === id ? { ...item, amount: item.amount + 1 } : { ...item };
    });
    setCart(newCart)
  }

  const decreaseAmount = (id, amount) => {
    if (amount === 1) {
      removeItem(id);
      return;
    } else {
      const newCart = [...cart].map(item => {
        return item.id === id ? { ...item, amount: item.amount - 1 } : { ...item }
      });
      setCart(newCart)
    }
  }

  const addToCart = product => {
    const { id, image, title, price } = product;
    const item = [...cart].find(item => item.id === id);

    if (item) {
      increaseAmount(id)
      return;
    } else {
      const newItem = { id, image, title, price, amount: 1 };
      const newCart = [...cart, newItem];
      setCart(newCart)
    }
  }

  const clearCart = () => {
    setCart([])
  }
  return (
    <CartContext.Provider value={{cart,addToCart,cartItems, decreaseAmount, increaseAmount, removeItem, cartTotal,clearCart}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
