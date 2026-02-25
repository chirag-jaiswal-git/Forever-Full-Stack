import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem"

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sort, setSort] = useState("relevant");

  // Toggle category
  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  // Toggle sub-category
  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  // Apply filters + sorting
  useEffect(() => {
    let filtered = [...products];

    if (showSearch && search) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (category.length) {
      filtered = filtered.filter((item) => category.includes(item.category));
    }

    if (subCategory.length) {
      filtered = filtered.filter((item) =>
        subCategory.includes(item.subCategory),
      );
    }

    if (sort === "low-high") {
      filtered.sort((a, b) => a.price - b.price);
    }

    if (sort === "high-low") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilterProducts(filtered);
  }, [products, category, subCategory, sort, search, showSearch]);

  return (
    <div className="flex flex-col sm:flex-row gap-6 pt-10 border-t">
      {/* FILTERS */}
      <div className="min-w-60">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setShowFilter(!showFilter)}
        >
          <p className="text-xl font-medium">FILTERS</p>
          <img
            className={`h-3 sm:hidden transition-transform ${
              showFilter ? "rotate-90" : ""
            }`}
            src={assets.dropdown_icon}
            alt=""
          />
        </div>

        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>

          <div className="flex flex-col gap-2 text-lg text-gray-700">
            {[
              { label: "Men", value: "Men" },
              { label: "Women", value: "Women" },
              { label: "Kids", value: "Kids" },
            ].map((item) => (
              <label key={item.value} className="flex gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  value={item.value}
                  checked={category.includes(item.value)}
                  onChange={toggleCategory}
                />
                {item.label}
              </label>
            ))}
          </div>
        </div>

        {/* SubCategory Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>

          <div className="flex flex-col gap-2 text-lg text-gray-700">
            {[
              { label: "Topwear", value: "Topwear" },
              { label: "Bottomwear", value: "Bottomwear" },
              { label: "Winterwear", value: "Winterwear" },
            ].map((item) => (
              <label key={item.value} className="flex gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  value={item.value}
                  checked={subCategory.includes(item.value)}
                  onChange={toggleSubCategory}
                />
                {item.label}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-4">
          <Title text1="ALL" text2="COLLECTIONS" />

          <select
            className="border border-gray-300 text-lg px-2 py-1"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.length ? (
            filterProducts.map((item) => (
              <ProductItem
                key={item._id}
                id={item._id}
                images={item.images}
                name={item.name}
                price={item.price}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No products found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
