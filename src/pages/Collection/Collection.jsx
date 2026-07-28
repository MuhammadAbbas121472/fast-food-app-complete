import "./Collection.css";
import { useState } from "react";

import foodData from "../../data/foodData";
import FoodCard from "../../components/FoodCard/FoodCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";

function Collection() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredFoods = foodData.filter((item) => {
    const matchCategory =
      category === "All" || item.category === category;

    const matchSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <section className="collection">

      <div className="heading">
        <h1>Our Collection</h1>
        <p>Choose your favorite fast food.</p>
      </div>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <CategoryFilter
        category={category}
        setCategory={setCategory}
      />

      <div className="foods">

        {filteredFoods.length > 0 ? (
          filteredFoods.map((item) => (
            <FoodCard
              key={item.id}
              item={item}
            />
          ))
        ) : (
          <h2>No Food Found</h2>
        )}

      </div>

    </section>
  );
}

export default Collection;