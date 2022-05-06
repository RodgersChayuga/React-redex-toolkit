import React from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../features/modal/modalSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  return (
    <section className="cart">
      <header>
        {amount < 1 ? (
          <div>
            <h2>Your bag</h2>
            <h4 className="empty-cart">is currently empty</h4>
          </div>
        ) : (
          <div>
            <h2>Your bag</h2>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
        )}
      </header>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>KES. {total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
