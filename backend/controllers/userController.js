import userModel from '../models/userModel.js';
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import express from 'express';

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
  });
}


//Route for user login
const loginUser = async (req, res) => {
try {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) {
    return  res.status(400).json({ message: 'User not found' });
  }
  const isMatch =  await bcrypt.compare(password, user.password);
  if (isMatch) {
    const token = createToken(user._id);
  res.json({success: true, token});
  }
  else {
    res.status(400).json({ message: 'Invalid credentials' });
  }


} catch (error) {
  res.status(500).json({success: false, message: error.message });
}


}

//Route for user registration
const registerUser = async (req, res) => {
try {

  const { name, email, password } = req.body;

  // Check if user already exists
  const exists = await userModel.findOne({ email });
  if (exists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  //validate email format & strong password
if(!validator.isEmail(email)){
  return res.status(400).json({message:'Invalid email format'});
}
if(password.length < 8 ){
  return res.status(400).json({message:'Password is not strong enough. It should be at least 8 characters long and include uppercase letters, lowercase letters, numbers, and symbols.'});
}

//hash user password
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password, salt);



  // Create new user
  const newUser = new userModel({ name, email, password: hashedPassword });
  const user = await newUser.save();

  const token = createToken(user._id);
  res.json({success: true, token});

} catch (error) {
  res.status(400).json({
  success:false,
  message: error.message,
});

}
}

//Route for admin login

const adminLogin = async (req, res) => {
try {
  const { email, password } = req.body;
  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    const token = jwt.sign({email:email},process.env.JWT_SECRET);
    return res.json({ success: true, token });
  }else {
  res.status(400).json({ message: 'Invalid admin credentials' });
  }
} catch (error) {
  res.status(500).json({ message: 'Server error', error: error.message });
}

}


export { loginUser, registerUser, adminLogin };