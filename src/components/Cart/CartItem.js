import React,{useContext} from 'react'
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { CartContext } from './../../context/cart';
const CartItem = ({id,image,title,price,amount}) => {
  const {removeItem, increaseAmount, decreaseAmount}= useContext(CartContext)
  return (
    <article className="cart-item">
      <img src={image} alt={title} />
      <div>
        <h4>{title}</h4>
        <h5>${price}</h5>
        <button className="cart-btn remove-btn" type="button" onClick={() => {
          removeItem(id)
        }}>remove</button>
      </div>
      <div>
        <button onClick={() => {
          increaseAmount(id)
        }} className="cart-btn amount-btn"><FaAngleUp /></button>
        <p className="item-amount">{amount}</p>
        <button onClick={() => {
          decreaseAmount(id,amount)
        }} className="cart-btn amount-btn"><FaAngleDown /></button>
      </div>
    </article>
  )
}

export default CartItem
