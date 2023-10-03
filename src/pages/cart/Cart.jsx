import React, { useContext } from "react";
import {PRODUCTS} from '../../Products'
import { ShopContext } from "../../Context/ShopContextProvider";
import "./Cart.css"
import CartItems from "./CartItems";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount()
  const Naviget = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
         {PRODUCTS.map((Product) => {
          if (cartItems[Product.id] !== 0) {
            return <CartItems data={Product} />;
          }
          // return null; // or any other appropriate value if you don't want to render anything
        })}
        </div>
        {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={()=> Naviget("/")}>Countinue Shoping</button>
          <button>Checkout</button>
        </div>
        ):(
          <h1>Your Cart is Empty</h1>
        )}
    </div>
  );
};

export default Cart;
