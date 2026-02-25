import { assets } from "../assets/assets";
import { useState } from "react";
import axios from "axios";
import { backendURL } from "../App";
import { toast } from "react-toastify";

const Add = ({token}) => {


  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("men");
  const [subCategory, setSubCategory] = useState("topwear");
  const [price, setPrice] = useState("");
  const [sizes, setSizes] = useState([]);
  const [bestSeller, setBestSeller] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("category", category.toLowerCase());
      formData.append("subCategory", subCategory.toLowerCase());
      formData.append("price", price);
      formData.append("sizes", JSON.stringify(sizes));
      formData.append("bestSeller", bestSeller);

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendURL + "/api/product/add",
        formData,
        { headers: {
       token
          }
        },
      );
      console.log(response);

      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setPrice("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
      } else {
        toast.error(response.data.message);
      }

      console.log(token)

    
    } catch (error) {
      
      toast.error(error.message);
    }

  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full items-start gap-4"
    >
      <p className="mb-2">Upload image</p>{" "}
      <div className="flex gap-2">
        <label htmlFor="image1">
          <img
            className="w-20"
            src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
            alt=""
          />
          <input
            onChange={(e) => setImage1(e.target.files[0])}
            type="file"
            id="image1"
            hidden
          />
        </label>
        <label htmlFor="image2">
          <img
            className="w-20"
            src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
            alt=""
          />
          <input
            onChange={(e) => setImage2(e.target.files[0])}
            type="file"
            id="image2"
            hidden
          />
        </label>
        <label htmlFor="image3">
          <img
            className="w-20"
            src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
            alt=""
          />
          <input
            onChange={(e) => setImage3(e.target.files[0])}
            type="file"
            id="image3"
            hidden
          />
        </label>
        <label htmlFor="image4">
          <img
            className="w-20"
            src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
            alt=""
          />
          <input
            onChange={(e) => setImage4(e.target.files[0])}
            type="file"
            id="image4"
            hidden
          />
        </label>
      </div>
      {/* Product Name */}
      <div className="w-full">
        <p className="mb-2 font-medium">Product Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="max-w-xl px-3 py-2 w-full border rounded"
          type="text"
          placeholder="Enter product name"
          required
        />
      </div>
      {/* Product Description */}
      <div className="w-full">
        <p className="mb-2 font-medium">Product Description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="max-w-xl px-3 py-2 w-full border rounded"
          placeholder="Write product description"
        />
      </div>
      {/* Category + Price + Sizes */}
      <div className="flex flex-col sm:flex-row sm:gap-8 gap-4 w-full">
        {/* Category */}
        <div>
          <p className="mb-2 font-medium">Product Category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className="px-3 py-2 border rounded w-full"
          >
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
          </select>
        </div>

        {/* Sub Category */}
        <div>
          <p className="mb-2 font-medium">Sub Category</p>
          <select
            onChange={(e) => setSubCategory(e.target.value)}
            value={subCategory}
            className="px-3 py-2 border rounded w-full"

          >
            <option value="topwear">Topwear</option>
            <option value="bottomwear">Bottomwear</option>
            <option value="winterwear">Winterwear</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <p className="mb-2 font-medium">Product Price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="px-3 py-2 border rounded w-full sm:w-32"
            type="number"
            placeholder="25"
          />
        </div>

        <div>
          <p className="mb-2">Product Sizes</p>
          <div className="flex gap-3">
            <div
              onClick={() =>
                setSizes((prev) =>
                  prev.includes("S")
                    ? prev.filter((item) => item !== "S")
                    : [...prev, "S"],
                )
              }
            >
              <p
                className={`px-3 py-1 cursor-pointer ${sizes.includes("S") ? "bg-pink-100" : "bg-slate-200"}`}
              >
                S
              </p>
            </div>
            <div
              onClick={() =>
                setSizes((prev) =>
                  prev.includes("M")
                    ? prev.filter((item) => item !== "M")
                    : [...prev, "M"],
                )
              }
            >
              <p
                className={`px-3 py-1 cursor-pointer ${sizes.includes("M") ? "bg-pink-100" : "bg-slate-200"}`}
              >
                M
              </p>
            </div>
            <div
              onClick={() =>
                setSizes((prev) =>
                  prev.includes("L")
                    ? prev.filter((item) => item !== "L")
                    : [...prev, "L"],
                )
              }
            >
              <p
                className={`px-3 py-1 cursor-pointer ${sizes.includes("L") ? "bg-pink-100" : "bg-slate-200"}`}
              >
                L
              </p>
            </div>
            <div
              onClick={() =>
                setSizes((prev) =>
                  prev.includes("XL")
                    ? prev.filter((item) => item !== "XL")
                    : [...prev, "XL"],
                )
              }
            >
              <p
                className={`px-3 py-1 cursor-pointer ${sizes.includes("XL") ? "bg-pink-100" : "bg-slate-200"}`}
              >
                XL
              </p>
            </div>
            <div
              onClick={() =>
                setSizes((prev) =>
                  prev.includes("XXL")
                    ? prev.filter((item) => item !== "XXL")
                    : [...prev, "XXL"],
                )
              }
            >
              <p
                className={`px-3 py-1 cursor-pointer ${sizes.includes("XXL") ? "bg-pink-100" : "bg-slate-200"}`}
              >
                XXL
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <input
          onChange={() => setBestSeller((prev) => !prev)}
          checked={bestSeller}
          type="checkbox"
          id="bestseller"
        />
        <label className="cursor-pointer " htmlFor="bestseller">
          Add to Bestseller
        </label>
      </div>
      <button
        type="submit"
        required
        className="bg-black text-white px-5 py-2 w-28  mt-4"
      >
        Add Product
      </button>
    </form>
  );
};

export default Add;
