import "./CategoryFilter.css";

function CategoryFilter({ category, setCategory }) {
  return (
    <div className="filter-buttons">

      <button
        className={category === "All" ? "active" : ""}
        onClick={() => setCategory("All")}
      >
        All
      </button>

      <button
        className={category === "Burger" ? "active" : ""}
        onClick={() => setCategory("Burger")}
      >
        🍔 Burger
      </button>

      <button
        className={category === "Pizza" ? "active" : ""}
        onClick={() => setCategory("Pizza")}
      >
        🍕 Pizza
      </button>

      <button
        className={category === "Cold Drink" ? "active" : ""}
        onClick={() => setCategory("Cold Drink")}
      >
        🥤 Cold Drink
      </button>

    </div>
  );
}

export default CategoryFilter;