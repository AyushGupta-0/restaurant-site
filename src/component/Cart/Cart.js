import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartitems = <ul className={classes['cart-items']}>{[
    { id: "c1", name: "Sushi", amount: "2", price: "2.99" },
  ].map((items) => <li>{items.name}</li>)}</ul>;

  return (
    <Modal>
      {cartitems}
      <div className={classes.total}>
        <span>Amount</span>
        <span>35.99</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;