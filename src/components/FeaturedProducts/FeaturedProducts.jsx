import "./FeaturedProducts.css";
import foodData from "../../data/foodData";
import FoodCard from "../FoodCard/FoodCard";
import { Link } from "react-router-dom";

function FeaturedProducts() {
  const featuredFoods = foodData.slice(0, 6);

  return (
    <section className="featured">

      <div className="featured-heading">
        <h2>🔥 Featured Products</h2>

        <p>
          Discover our most popular burgers, pizzas and cold drinks.
        </p>
      </div>

      <div className="featured-container">
        {featuredFoods.map((item) => (
          <FoodCard
            key={item.id}
            item={item}
          />
        ))}
      </div>

      <div className="view-all">
        <Link to="/collection">
          <button>View All Products</button>
        </Link>
      </div>

    </section>
  );
}

export default FeaturedProducts;