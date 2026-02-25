import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const [search,setSearch] = useState("");
  const [showSearch,setShowSearch] = useState(false);
  const[cartItems,setCartItems] = useState({});
  const [products,setProducts] = useState([]);
  const [token,setToken] = useState(localStorage.getItem("token"));

  const navigate = useNavigate();
const addToCart = async(itemId,size) => {

  if(!size){
    toast.error("Select Product size");
    return;
  }

  let cartData = structuredClone(cartItems);

  if(cartData[itemId]){
    if(cartData[itemId][size]){
      cartData[itemId][size] += 1;
    }else{
      cartData[itemId][size] = 1;
    }
  }else{
    cartData[itemId] = {};
    cartData[itemId][size] = 1;
  };

  setCartItems(cartData);

if(token){
  try {
    await axios.post(backendURL + "/api/cart/add",{
     itemId,
     size
    },{
      headers:{
           token
      }
    });
  } catch (error) {
    console.error("Error updating cart:", error);
    toast.error("Failed to update cart on server.");
  }
}

};

const getCartCount = () => {
  let count = 0;
  for(const itemId in cartItems){
    for(const size in cartItems[itemId]){
      count += cartItems[itemId][size];
    }
  }
  return count;
}

const updateQuantity = async(itemId,size,quantity) => {
  let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);

if(token){
  try {
    await axios.post(backendURL + "/api/cart/update",{
      itemId,
      size,
      quantity
    },{
      headers:{
           token
      }
    });
  } catch (error) {
    console.error("Error updating cart:", error);
    toast.error("Failed to update cart on server.");
  }
}

  };

const getCartAmount = () => {
  let amount = 0;
  for(const itemId in cartItems){
    for(const size in cartItems[itemId]){
      const product = products.find(p => p._id === itemId);
      if(product){
        amount += product.price * cartItems[itemId][size];
      }
    }
  }

  return amount;
};

const getProductsData = async() => {
  try {
    const response = await axios.get(backendURL + "/api/product/list");
    if(response.data.success){
      setProducts(response.data.products);
    } else {
      toast.error(response.data.message);
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    toast.error(error.message);
  }
};

const getUserCart = async() => {
  try {
    const response = await axios.post(backendURL + "/api/cart/get",{},{
      headers:{
        token
      }
    });
    if(response.data.success){
      setCartItems(response.data.cartData);
    } else {
      toast.error(response.data.message);
    }
  } catch (error) {
    console.error("Error fetching user cart:", error);
    toast.error(error.message);
  }
};

useEffect(() => {
  getProductsData();
},[]);

useEffect(() => {
  const storedToken = localStorage.getItem("token");

  if(storedToken){
    setToken(storedToken);
  }
}, []);

useEffect(() => {
  if(token){
    getUserCart();
  }
}, [token]);




  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    setCartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendURL,
    setToken,
    token
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

