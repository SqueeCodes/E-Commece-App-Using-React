import React from "react";



const Cart = () => {
  return (
    <div id="book__body">
      <main id="books__main">
        <div className="books__Container">
          <div className="row">
            <div className="book__Selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                <div className="cart__item">
                  <div className="cart__book">
                    <img src="" alt="" className="cart__book--img" />
                    <div className="cart__book--info">
                      <span className="cart__book--title">
                        Crack the coding interview
                      </span>
                      <span className="cart__book--price">$10.00</span>
                      <button className="cart__book--remove">Remove</button>
                    </div>
                  </div>
                  <div className="cart__quantity">
                    <input type="number" min={0} max={99} className="cart__input" />
                  </div>
                  <div className="cart__total">
                    $10.00
                  </div>
                </div>
              </div>
            </div>
            <div className="total">
              <div className="total__item total__sub-total">
                <span>Subtotal</span>
                <span>$9.00</span>
              </div>
              <div className="total__item total__tax">
                <span>Tax</span>
                <span>$1.00</span>
              </div>
              <div className="total__item total__pricel">
                <span>Total</span>
                <span>$10.00</span>
              </div>
              <button className="btn btn__checkout no-cursor">
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
