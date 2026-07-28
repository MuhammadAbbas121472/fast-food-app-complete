
import "./Wishlist.css";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";

function Wishlist() {
  const {
    wishlist,
    removeFromWishlist,
  } = useWishlist();

  const { addToCart } = useCart();

  if (wishlist.length === 0) {
    return (
      <div className="empty-wishlist">
        <h1>❤️ Wishlist is Empty</h1>
        <p>Add your favorite food items.</p>
      </div>
    );
  }

  return (
    <div className="wishlist-container">

      <h1>❤️ My Wishlist</h1>

      {wishlist.map((item) => (
        <div
          className="wishlist-card"
          key={item.id}
        >

          <img
            src={item.image}
            alt={item.name}
          />

          <div className="wishlist-info">

            <h2>{item.name}</h2>

            <p>{item.category}</p>

            <h3>Rs. {item.price}</h3>

          </div>

          <div className="wishlist-buttons">

            <button
              className="cart-btn"
              onClick={() => addToCart(item)}
            >
              🛒 Add To Cart
            </button>

            <button
              className="remove-btn"
              onClick={() => removeFromWishlist(item.id)}
            >
              ❌ Remove
            </button>

          </div>

        </div>
      ))}

    </div>
  );
}

export default Wishlist;