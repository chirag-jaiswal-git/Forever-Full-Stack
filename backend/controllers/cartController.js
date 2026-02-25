import userModel from "../models/userModel.js";

// ================= ADD TO CART =================
const addToCart = async (req, res) => {
  try {

    const userId = req.userId;   // ✅ Get from middleware
    const { itemId, size } = req.body;

    const userData = await userModel.findById(userId);

    if (!userData) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    let cartData = userData.cartData || {};

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });

    return res.status(200).json({
      success: true,
      message: "Item added to cart successfully"
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message || "Failed to add item to cart"
    });
  }
};


// ================= UPDATE CART =================
const updateCart = async (req, res) => {
  try {

    const userId = req.userId;  // ✅ Correct
    const { itemId, size, quantity } = req.body;

    const userData = await userModel.findById(userId);

    if (!userData) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    let cartData = userData.cartData || {};

    if (!cartData[itemId]) {
      cartData[itemId] = {};
    }

    cartData[itemId][size] = quantity;

    await userModel.findByIdAndUpdate(userId, { cartData });

    return res.status(200).json({
      success: true,
      message: "Cart updated successfully"
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message || "Failed to update cart"
    });
  }
};


// ================= GET USER CART =================
const getCart = async (req, res) => {
  try {

    const userId = req.userId;  // ✅ Correct

    const userData = await userModel.findById(userId);

    if (!userData) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    return res.status(200).json({
      success: true,
      cartData: userData.cartData || {}
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch cart details"
    });
  }
};


export { addToCart, updateCart, getCart };
