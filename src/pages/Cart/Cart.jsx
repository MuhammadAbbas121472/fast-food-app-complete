import "./Cart.css";
import { useCart } from "../../context/CartContext";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    totalPrice,
  } = useCart();

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h1>🛒 Your Cart is Empty</h1>
        <p>Add some delicious food from the Collection page.</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>

      {cart.map((item) => (
        <div className="cart-card" key={item.id}>
          <img src={item.image} alt={item.name} />

          <div className="cart-info">
            <h2>{item.name}</h2>
            <p>Category: {item.category}</p>
            <h3>Rs. {item.price}</h3>
          </div>

          <div className="quantity">
            <button onClick={() => decreaseQuantity(item.id)}>-</button>

            <span>{item.quantity}</span>

            <button onClick={() => increaseQuantity(item.id)}>+</button>
          </div>

          <div className="subtotal">
            <h3>Rs. {item.price * item.quantity}</h3>
          </div>

          <button
            className="remove-btn"
            onClick={() => removeItem(item.id)}
          >
            Remove
          </button>
        </div>
      ))}

      <div className="cart-total">
        <h2>Total: Rs. {totalPrice}</h2>

        <button>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;