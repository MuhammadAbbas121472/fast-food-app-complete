import "./FoodCard.css";
import { useState } from "react";
import { FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";

import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

import ProductModal from "../ProductModal/ProductModal";

function FoodCard({ item }) {
  const { addToCart } = useCart();

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  const [openModal, setOpenModal] = useState(false);

  const favorite = isInWishlist(item.id);

  return (
    <>
      <div className="food-card">
        <div className="food-image">

          <button
            className="heart-btn"
            onClick={() =>
              favorite
                ? removeFromWishlist(item.id)
                : addToWishlist(item)
            }
          >
            <FaHeart color={favorite ? "red" : "white"} />
          </button>

          <img src={item.image} alt={item.name} />
        </div>

        <div className="food-info">
          <span className="category">{item.category}</span>

          <h3>{item.name}</h3>

          <div className="rating">
            <FaStar />
            <span>{item.rating}</span>
          </div>

          <div className="bottom">
            <h2>Rs. {item.price}</h2>

            <button onClick={() => addToCart(item)}>
              <FaShoppingCart />
              Add To Cart
            </button>
          </div>

          <button
            className="details-btn"
            onClick={() => setOpenModal(true)}
          >
            👀 View Details
          </button>
        </div>
      </div>

      {openModal && (
        <ProductModal
          item={item}
          onClose={() => setOpenModal(false)}
          addToCart={addToCart}
          favorite={favorite}
          addToWishlist={addToWishlist}
          removeFromWishlist={removeFromWishlist}
        />
      )}
    </>
  );
}

export default FoodCard;