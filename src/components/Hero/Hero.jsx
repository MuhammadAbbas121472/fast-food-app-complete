import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-text">
        <h1>
          Delicious <span>Fast Food</span>
        </h1>

        <p>
          Fresh Burgers, Cheesy Pizza and Refreshing Cold Drinks.
          Enjoy your favorite meal with the best taste at affordable prices.
        </p>

        <Link to="/collection">
          <button>Order Now</button>
        </Link>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700&q=80"
          alt="Burger"
        />
      </div>

    </section>
  );
}

export default Hero;