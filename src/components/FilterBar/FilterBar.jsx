import "./FilterBar.css";
const FilterBar = () => {
  return (
    <section>
      <div class="all-contain">
        <div class="filters">
          Filters <span className="clear-all">Clear</span>
        </div>

        <div class="main-category">Sort By</div>
        <li class="category-list">
          <label class="category-name">
            <input type="radio" name="sort" id="" /> Price - Low to High
          </label>
        </li>
        <li class="category-list">
          <label class="category-name">
            <input type="radio" name="sort" id="" /> Price - High to Low
          </label>
        </li>
        <div class="main-category">Category</div>
        <ul class="ul-un">
          <li class="category-list">
            <label class="category-name">
              <input type="checkbox" name="" id="" /> Grocery
            </label>
          </li>
          <li class="category-list">
            <label class="category-name">
              <input type="checkbox" name="" id="" /> Mobiles
            </label>
          </li>
          <li class="category-list">
            <label class="category-name">
              <input type="checkbox" name="" id="" /> Fashion
            </label>
          </li>
          <li class="category-list">
            <label class="category-name">
              <input type="checkbox" name="" id="" /> Electronics
            </label>
          </li>
          <li class="category-list">
            <label class="category-name">
              <input type="checkbox" name="" id="" /> Home
            </label>
          </li>
          <li class="category-list">
            <label class="category-name">
              <input type="checkbox" name="" id="" /> Appliances
            </label>
          </li>
          <li class="category-list">
            <label class="category-name">
              <input type="checkbox" name="" id="" /> Toys
            </label>
          </li>
          <li class="category-list">
            <label class="category-name">
              <input type="checkbox" name="" id="" /> Masks
            </label>
          </li>
        </ul>
        <div class="main-category">Rating</div>
        <ul class="ul-un">
          <li class="category-list">
            <label class="category-name">
              <input type="radio" name="ratings" id="" /> 5 star & above
            </label>
          </li>
          <li class="category-list">
            <label class="category-name">
              <input type="radio" name="ratings" id="" /> 4 star & above
            </label>
          </li>
          <li class="category-list">
            <label class="category-name">
              <input type="radio" name="ratings" id="" /> 3 star & above
            </label>
          </li>
          <li class="category-list">
            <label class="category-name">
              <input type="radio" name="ratings" id="" /> 2 star & above
            </label>
          </li>
          <li class="category-list">
            <label class="category-name">
              <input type="radio" name="ratings" id="" /> 1 star & above
            </label>
          </li>
        </ul>

        <div class="last-spcae"></div>
      </div>
    </section>
  );
};

export { FilterBar };
