import React, { useState, useContext, useEffect } from "react";
import "../CSS/Collections.css";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../Components/Title";
import { ShopContext } from "../contexts/shopContext";
import ProductItem from "../Components/ProductItem";

const Collections = () => {
  const categories = ["Men", "Women", "Kids"];
  const typeCategories = ["Topwear", "Bottomwear", "Winterwear"];

  const [showCategory, setShowCategory] = useState(false);

  const { products, search, showSearch } = useContext(ShopContext);

  const [allProducts, setAllProducts] = useState([]);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypeCategories, setSelectedTypeCategories] = useState([]);

  const toggleCategories = (e) => {
    if (selectedCategories.includes(e.target.value)) {
      setSelectedCategories((prev) =>
        prev.filter((item) => item !== e.target.value),
      );
    } else {
      setSelectedCategories((prev) => [...prev, e.target.value]);
    }
  };

  const toggleTypeCategories = (e) => {
    if (selectedTypeCategories.includes(e.target.value)) {
      setSelectedTypeCategories((prev) =>
        prev.filter((item) => item !== e.target.value),
      );
    } else {
      setSelectedTypeCategories((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (search && showSearch) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (selectedCategories.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        selectedCategories.includes(item.category),
      );
    }

    if (selectedTypeCategories.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        selectedTypeCategories.includes(item.subCategory),
      );
    }

    setAllProducts(productsCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [selectedCategories, selectedTypeCategories, search, showSearch]);

  return (
    <section className="collections">
      <div className="filters">
        <div className="row">
          <h2>Filters</h2>
          <button
            className="filter-btn"
            onClick={() => {
              setShowCategory(!showCategory);
            }}
          >
            <img
              src={assets.dropdown_icon}
              alt=""
              style={{
                transform: showCategory ? "rotate(90deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
          </button>
        </div>
        <div className={`categorys ${showCategory ? "show" : "hide"}`}>
          <div className="category-container">
            <h3>Category</h3>
            {categories.map((c) => {
              return (
                <div key={c} className="category">
                  <input
                    type="checkbox"
                    value={c}
                    onChange={toggleCategories}
                    checked={selectedCategories.includes(c)}
                  />
                  <p>{c}</p>
                </div>
              );
            })}
          </div>
          <div className="category-container">
            <h3>Type</h3>
            {typeCategories.map((c) => {
              return (
                <div key={c} className="category">
                  <input
                    type="checkbox"
                    value={c}
                    onChange={toggleTypeCategories}
                    checked={selectedTypeCategories.includes(c)}
                  />
                  <p>{c}</p>
                </div>
              );
            })}
          </div>
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
