import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/shopContext";
import "../CSS/Search.css";
import { assets } from "../assets/frontend_assets/assets";
import { useLocation } from "react-router-dom";

const Search = () => {
  const { search, setSearch, setShowSearch, showSearch } =
    useContext(ShopContext);

  const [visible, setVisible] = useState(false);

  const Location = useLocation();
  useEffect(() => {
    if (Location.pathname.includes("collections")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [Location]);

  return showSearch && visible ? (
    <>
      <div className="search-container">
        <input
          className="search-input"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search"
          type="text"
        />
        <button>
          <img
            src={assets.search_icon}
            alt="search icon"
            className="search-icon"
          />
        </button>
        <button
          onClick={() => {
            setShowSearch(false);
          }}
        >
          <img
            src={assets.cross_icon}
            alt="cross icon"
            className="cross-icon"
          />
        </button>
      </div>
    </>
  ) : null;
};

export default Search;
