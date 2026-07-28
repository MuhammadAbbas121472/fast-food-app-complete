import "./ProductModal.css";
import { FaStar, FaShoppingCart, FaHeart, FaTimes } from "react-icons/fa";

function ProductModal({
  item,
  onClose,
  addToCart,
  favorite,
  addToWishlist,
  removeFromWishlist,
}) {
  if (!item) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="modal-image">
          <img src={item.image} alt={item.name} />
        </div>

        <div className="modal-content">
          <h1>{item.name}</h1>

          <p className="category">{item.category}</p>

          <div className="rating">
            <FaStar />
            <span>{item.rating}</span>
          </div>

          <h2>Rs. {item.price}</h2>

          <p className="description">
            {item.description}
          </p>

          <div className="modal-buttons">
            <button
              className="cart-btn"
              onClick={() => addToCart(item)}
            >
              <FaShoppingCart />
              Add To Cart
            </button>

            <button
              className="wish-btn"
              onClick={() =>
                favorite
                  ? removeFromWishlist(item.id)
                  : addToWishlist(item)
              }
            >
              <FaHeart color={favorite ? "red" : "white"} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;