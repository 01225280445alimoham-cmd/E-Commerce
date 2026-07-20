import React from "react";
import { ShopContext } from "../contexts/shopContext";
import { useContext } from "react";
import "../CSS/Search.css";
import { assets } from "../assets/frontend_assets/assets";

const Search = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  return showSearch ? (
    <>
      <div className="search-contianer">
        <input className="search-input" />
        <button>
          <img
            src={assets.search_icon}
            alt="search icon"
            className="search-icon"
          />
        </button>
      </div>
    </>
  ) : null;
};

export default Search;
