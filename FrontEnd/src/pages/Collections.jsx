import React, { useState, useContext, useMemo } from "react";
import "../CSS/Collections.css";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../Components/Title";
import { ShopContext } from "../contexts/shopContext";
import ProductItem from "../Components/ProductItem";

const CATEGORIES = ["Men", "Women", "Kids"];
const TYPE_CATEGORIES = ["Topwear", "Bottomwear", "Winterwear"];

const Collections = () => {
  const [showCategory, setShowCategory] = useState(false);
  const { products, search, showSearch } = useContext(ShopContext);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypeCategories, setSelectedTypeCategories] = useState([]);

  const toggleFilter = (value, setFilterFn) => {
    setFilterFn((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const allProducts = useMemo(() => {
    let result = products.slice();

    if (search && showSearch) {
      const query = search.toLowerCase();
      result = result.filter((item) => item.name.toLowerCase().includes(query));
    }

    if (selectedCategories.length > 0) {
      result = result.filter((item) =>
        selectedCategories.includes(item.category),
      );
    }

    if (selectedTypeCategories.length > 0) {
      result = result.filter((item) =>
        selectedTypeCategories.includes(item.subCategory),
      );
    }

    return result;
  }, [
    products,
    search,
    showSearch,
    selectedCategories,
    selectedTypeCategories,
  ]);

  return (
    <section className="collections">
      <div className="filters">
        <div className="row">
          <h2>Filters</h2>
          <button
            type="button"
            className="filter-btn"
            onClick={() => setShowCategory((prev) => !prev)}
            aria-expanded={showCategory}
          >
            <img
              src={assets.dropdown_icon}
              alt=""
              className={`dropdown-icon ${showCategory ? "rotated" : ""}`}
            />
          </button>
        </div>

        <div className={`categorys ${showCategory ? "show" : "hide"}`}>
          <fieldset className="category-container">
            <legend>
              <h3>Category</h3>
            </legend>
            {CATEGORIES.map((c) => (
              <label key={c} className="category">
                <input
                  type="checkbox"
                  value={c}
                  onChange={(e) =>
                    toggleFilter(e.target.value, setSelectedCategories)
                  }
                  checked={selectedCategories.includes(c)}
                />
                <span>{c}</span>
              </label>
            ))}
          </fieldset>

          <fieldset className="category-container">
            <legend>
              <h3>Type</h3>
            </legend>
            {TYPE_CATEGORIES.map((c) => (
              <label key={c} className="category">
                <input
                  type="checkbox"
                  value={c}
                  onChange={(e) =>
                    toggleFilter(e.target.value, setSelectedTypeCategories)
                  }
                  checked={selectedTypeCategories.includes(c)}
                />
                <span>{c}</span>
              </label>
            ))}
          </fieldset>
        </div>
      </div>

      <div className="right-side">
        <header>
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
        </header>

        {allProducts.length > 0 ? (
          <div className="products-grid">
            {allProducts.map((item) => (
              <ProductItem
                key={item._id}
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        ) : (
          <p className="no-results">No results found</p>
        )}
      </div>
    </section>
  );
};

export default Collections;
