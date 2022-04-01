import { useFilterContext } from "../../context/filter-context";
import "./FilterBar.css";
const FilterBar = () => {
  const { productListState, productListDispatch } = useFilterContext();
  return (
    <section>
      <div className="all-contain">
        <div className="filters">
          Filters{" "}
          <span
            className="clear-all"
            onClick={() => productListDispatch({ type: "" })}
          >
            Clear
          </span>
        </div>

        <div className="main-category">Sort By</div>
        <li className="category-list">
          <label className="category-name">
            <input
              type="radio"
              name="sort"
              onChange={() =>
                productListDispatch({ type: "SORT", payload: "LOW_TO_HIGH" })
              }
            />{" "}
            Price - Low to High
          </label>
        </li>
        <li className="category-list">
          <label className="category-name">
            <input
              type="radio"
              name="sort"
              onChange={() =>
                productListDispatch({ type: "SORT", payload: "HIGH_TO_LOW" })
              }
            />{" "}
            Price - High to Low
          </label>
        </li>
        <div className="main-category">Category</div>
        <ul className="ul-un">
          <li className="category-list">
            <label className="category-name">
              <input
                type="checkbox"
                checked={productListState.category.includes("grocery")}
                onChange={() =>
                  productListDispatch({
                    type: "CATEGORY",
                    payload: "grocery",
                  })
                }
              />{" "}
              Grocery
            </label>
          </li>
          <li className="category-list">
            <label className="category-name">
              <input
                type="checkbox"
                checked={productListState.category.includes("mobiles")}
                onChange={() =>
                  productListDispatch({
                    type: "CATEGORY",
                    payload: "mobiles",
                  })
                }
              />{" "}
              Mobiles
            </label>
          </li>
          <li className="category-list">
            <label className="category-name">
              <input
                type="checkbox"
                checked={productListState.category.includes("fashion")}
                onChange={() =>
                  productListDispatch({
                    type: "CATEGORY",
                    payload: "fashion",
                  })
                }
              />{" "}
              Fashion
            </label>
          </li>
          <li className="category-list">
            <label className="category-name">
              <input
                type="checkbox"
                checked={productListState.category.includes("electronics")}
                onChange={() =>
                  productListDispatch({
                    type: "CATEGORY",
                    payload: "electronics",
                  })
                }
              />{" "}
              Electronics
            </label>
          </li>
          <li className="category-list">
            <label className="category-name">
              <input
                type="checkbox"
                checked={productListState.category.includes("appliances")}
                onChange={() =>
                  productListDispatch({
                    type: "CATEGORY",
                    payload: "appliances",
                  })
                }
              />{" "}
              Appliances
            </label>
          </li>
          <li className="category-list">
            <label className="category-name">
              <input
                type="checkbox"
                checked={productListState.category.includes("toys")}
                onChange={() =>
                  productListDispatch({
                    type: "CATEGORY",
                    payload: "toys",
                  })
                }
              />{" "}
              Toys
            </label>
          </li>
          <li className="category-list">
            <label className="category-name">
              <input
                type="checkbox"
                checked={productListState.category.includes("masks")}
                onChange={() =>
                  productListDispatch({
                    type: "CATEGORY",
                    payload: "masks",
                  })
                }
              />{" "}
              Masks
            </label>
          </li>
        </ul>
        <div className="main-category">Rating</div>
        <ul className="ul-un">
          <li className="category-list">
            <label className="category-name">
              <input
                type="radio"
                name="ratings"
                onChange={() =>
                  productListDispatch({ type: "RATING", payload: "5" })
                }
              />{" "}
              5 star & above
            </label>
          </li>
          <li className="category-list">
            <label className="category-name">
              <input
                type="radio"
                name="ratings"
                onChange={() =>
                  productListDispatch({ type: "RATING", payload: "4" })
                }
              />{" "}
              4 star & above
            </label>
          </li>
          <li className="category-list">
            <label className="category-name">
              <input
                type="radio"
                name="ratings"
                onChange={() =>
                  productListDispatch({ type: "RATING", payload: "3" })
                }
              />{" "}
              3 star & above
            </label>
          </li>
          <li className="category-list">
            <label className="category-name">
              <input
                type="radio"
                name="ratings"
                onChange={() =>
                  productListDispatch({ type: "RATING", payload: "2" })
                }
              />{" "}
              2 star & above
            </label>
          </li>
          <li className="category-list">
            <label className="category-name">
              <input
                type="radio"
                name="ratings"
                onChange={() =>
                  productListDispatch({ type: "RATING", payload: "1" })
                }
              />{" "}
              1 star & above
            </label>
          </li>
        </ul>

        <div className="last-spcae"></div>
      </div>
    </section>
  );
};

export { FilterBar };
