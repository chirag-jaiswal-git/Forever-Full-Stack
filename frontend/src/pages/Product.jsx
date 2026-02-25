import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProduct from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    if (!products.length) return;

    const product = products.find((item) => item._id === productId);

    if (product) {
      setProductData(product);
      setImage(product.images[0]);

    }
  }, [productId, products]);

  if (!productData) {
    return <div className="opacity-0"></div>;
  }

  return (
    <div className="border-t-2 pt-10 transition-opacity duration-500 opacity-100">

      {/* Product Section */}
      <div className="flex gap-12 flex-col sm:flex-row">

        {/* Images */}
        <div className="flex-1 flex flex-col-reverse sm:flex-row gap-3">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll sm:w-[18%]">
            {productData.images.map((img) => (
              <img
                key={img}
                src={img}
                onClick={() => setImage(img)}
                className="w-[24%] sm:w-full mb-3 cursor-pointer"
                alt=""
              />
            ))}
          </div>

          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" alt="" />
          </div>
        </div>

        {/* Details */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>

          <div className="flex items-center gap-1 mt-2">
            {[...Array(4)].map((_, i) => (
              <img key={i} src={assets.star_icon} className="w-3" alt="" />
            ))}
            <img src={assets.star_dull_icon} className="w-3" alt="" />
            <p className="pl-2">122</p>
          </div>

          <p className="mt-5 text-3xl font-medium">
            {currency}{productData.price}
          </p>

          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>

          {/* Sizes */}
          <div className="my-8">
            <p className="mb-3">Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item) => (
                <button
                  key={item}
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button onClick={()=>addToCart(productData._id,size)
          } className="bg-black text-white py-3 px-8 text-sm active:bg-gray-700">
            ADD TO CART
          </button>

          <hr className="mt-8 sm:w-4/5" />

          <div className="text-sm text-gray-500 mt-5 space-y-1">
            <p>100% Original product.</p>
            <p>Cash on delivery available.</p>
            <p>Easy return & exchange within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>

        <div className="border px-6 py-6 text-sm text-gray-500 space-y-4">
          <p>
            An e-commerce website is a digital storefront that allows users
            to browse, select, and purchase products online.
          </p>
          <p>
            These platforms enable secure payments, order tracking,
            and doorstep delivery.
          </p>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProduct
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  );
};

export default Product;
