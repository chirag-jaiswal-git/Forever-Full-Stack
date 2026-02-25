
import logo from './logo.png'
import hero_img from './hero_img.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon
}

 const products = [
    {
        name: "Women Round Neck Cotton Top",
        // New Description for Women's Topwear
        description: "A comfortable, versatile cotton top featuring a classic round neck, perfect for everyday wear and easy to style.",
        price: 100,
        images:["p_img1.png"], 
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestSeller: true
    },
    {
      
        name: "Men Round Neck Pure Cotton T-shirt",
        // New Description for Men's Topwear
        description: "An essential pure cotton t-shirt for men, designed with a round neck for a relaxed and breathable fit.",
        price: 200,
        images: ["p_img2_1.png","p_img2_2.png","p_img2_3.png","p_img2_4.png"],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestSeller: true
    },
    {
    
        name: "Girls Round Neck Cotton Top",
        // New Description for Kids' Topwear
        description: "A soft cotton top for girls with a round neck, offering comfort and freedom for active play and casual outings.",
        price: 220,
        images: ["p_img3"],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "L", "XL"],
        date: 1716234545448,
        bestSeller: true
    },
    {
        name: "Men Round Neck Pure Cotton T-shirt",
        // New Description for Men's Topwear
        description: "An essential pure cotton t-shirt for men, designed with a round neck for a relaxed and breathable fit.",
        price: 110,
        images: ["p_img4.png"],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "XXL"],
        date: 1716621345448,
        bestSeller: true
    },
    {
       
        name: "Women Round Neck Cotton Top",
        // New Description for Women's Topwear
        description: "A comfortable, versatile cotton top featuring a classic round neck, perfect for everyday wear and easy to style.",
        price: 130,
        images: ["p_img5.png"],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716622345448,
        bestSeller: true
    },
    {
      
        name: "Girls Round Neck Cotton Top",
        // New Description for Kids' Topwear
        description: "A soft cotton top for girls with a round neck, offering comfort and freedom for active play and casual outings.",
        price: 140,
        images: ["p_img6.png"],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "L", "XL"],
        date: 1716623423448,
        bestSeller: true
    },
    {
       
        name: "Men Tapered Fit Flat-Front Trousers",
        // New Description for Men's Bottomwear
        description: "Classic flat-front trousers for men in a modern tapered fit, blending smart style with comfortable movement.",
        price: 190,
        images: ["p_img7.png"],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["S", "L", "XL"],
        date: 1716621542448,
        bestSeller: false
    },
    {
     
        name: "Men Round Neck Pure Cotton T-shirt",
        // New Description for Men's Topwear
        description: "An essential pure cotton t-shirt for men, designed with a round neck for a relaxed and breathable fit.",
        price: 140,
        images: ["p_img8.png"],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716622345448,
        bestSeller: false
    },
    {
    
        name: "Girls Round Neck Cotton Top",
        // New Description for Kids' Topwear
        description: "A soft cotton top for girls with a round neck, offering comfort and freedom for active play and casual outings.",
        price: 100,
        images: ["p_img9.png"],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621235448,
        bestSeller: false
    },
    {
      
        name: "Men Tapered Fit Flat-Front Trousers",
        // New Description for Men's Bottomwear
        description: "Classic flat-front trousers for men in a modern tapered fit, blending smart style with comfortable movement.",
        price: 110,
        images: ["p_img10.png"],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["S", "L", "XL"],
        date: 1716622235448,
        bestSeller: false
    },
    {
    
        name: "Men Round Neck Pure Cotton T-shirt",
        // New Description for Men's Topwear
        description: "An essential pure cotton t-shirt for men, designed with a round neck for a relaxed and breathable fit.",
        price: 120,
        images: ["p_img11.png"],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716623345448,
        bestSeller: false
    },
    {
 
        name: "Men Round Neck Pure Cotton T-shirt",
        // New Description for Men's Topwear
        description: "An essential pure cotton t-shirt for men, designed with a round neck for a relaxed and breathable fit.",
        price: 150,
        images: ["p_img12.png"],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716624445448,
        bestSeller: false
    },
    {

        name: "Women Round Neck Cotton Top",
        // New Description for Women's Topwear
        description: "A comfortable, versatile cotton top featuring a classic round neck, perfect for everyday wear and easy to style.",
        price: 130,
        images: ["p_img13.png"],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716625545448,
        bestSeller: false
    },
    {

        name: "Boy Round Neck Pure Cotton T-shirt",
        // New Description for Kids' Topwear
        description: "A durable pure cotton t-shirt for boys with a round neck, ideal for school, sports, and casual adventures.",
        price: 160,
        images: ["p_img14.png"],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716626645448,
        bestSeller: false
    },
    {
 
        name: "Men Tapered Fit Flat-Front Trousers",
        // New Description for Men's Bottomwear
        description: "Classic flat-front trousers for men in a modern tapered fit, blending smart style with comfortable movement.",
        price: 140,
        images: ["p_img15.png"],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716627745448,
        bestSeller: false
    },
    {
 
        name: "Girls Round Neck Cotton Top",
        // New Description for Kids' Topwear
        description: "A soft cotton top for girls with a round neck, offering comfort and freedom for active play and casual outings.",
        price: 170,
        images: ["p_img16.png"],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716628845448,
        bestSeller: false
    },
    {
  
        name: "Men Tapered Fit Flat-Front Trousers",
        // New Description for Men's Bottomwear
        description: "Classic flat-front trousers for men in a modern tapered fit, blending smart style with comfortable movement.",
        price: 150,
        images: ["p_img17.png"],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716629945448,
        bestSeller: false
    },
    {
     
        name: "Boy Round Neck Pure Cotton T-shirt",
        // New Description for Kids' Topwear
        description: "A durable pure cotton t-shirt for boys with a round neck, ideal for school, sports, and casual adventures.",
        price: 180,
        images: ["p_img18.png"],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716631045448,
        bestSeller: false
    },
    {
    
        name: "Boy Round Neck Pure Cotton T-shirt",
        // New Description for Kids' Topwear
        description: "A durable pure cotton t-shirt for boys with a round neck, ideal for school, sports, and casual adventures.",
        price: 160,
        images: ["p_img19.png"],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716632145448,
        bestSeller: false
    },
    {
      
        name: "Women Palazzo Pants with Waist Belt",
        // New Description for Women's Bottomwear
        description: "Flowing palazzo pants for women, complete with a stylish waist belt for a chic, comfortable, and contemporary look.",
        price: 190,
        images: ["p_img20.png"],
        category: "Women",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716633245448,
        bestSeller: false
    },
    {
    
        name: "Women Zip-Front Relaxed Fit Jacket",
        // New Description for Women's Winterwear
        description: "A cozy zip-front jacket for women, offering a relaxed fit for comfortable layering and extra warmth in cooler weather.",
        price: 170,
        images: ["p_img21.png"],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716634345448,
        bestSeller: false
    },
    {
      
        name: "Women Palazzo Pants with Waist Belt",
        // New Description for Women's Bottomwear
        description: "Flowing palazzo pants for women, complete with a stylish waist belt for a chic, comfortable, and contemporary look.",
        price: 200,
        images: ["p_img22.png"],
        category: "Women",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716635445448,
        bestSeller: false
    },
    {
   
        name: "Boy Round Neck Pure Cotton T-shirt",
        // New Description for Kids' Topwear
        description: "A durable pure cotton t-shirt for boys with a round neck, ideal for school, sports, and casual adventures.",
        price: 180,
        images: ["p_img23.png"],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716636545448,
        bestSeller: false
    },
    {
  
        name: "Boy Round Neck Pure Cotton T-shirt",
        // New Description for Kids' Topwear
        description: "A durable pure cotton t-shirt for boys with a round neck, ideal for school, sports, and casual adventures.",
        price: 210,
        images: ["p_img24.png"],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716637645448,
        bestSeller: false
    },
    {
  
        name: "Girls Round Neck Cotton Top",
        // New Description for Kids' Topwear
        description: "A soft cotton top for girls with a round neck, offering comfort and freedom for active play and casual outings.",
        price: 190,
        images: ["p_img25.png"],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716638745448,
        bestSeller: false
    },
    {
     
        name: "Women Zip-Front Relaxed Fit Jacket",
        // New Description for Women's Winterwear
        description: "A cozy zip-front jacket for women, offering a relaxed fit for comfortable layering and extra warmth in cooler weather.",
        price: 220,
        images: ["p_img26.png"],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716639845448,
        bestSeller: false
    },
    {
       
        name: "Girls Round Neck Cotton Top",
        // New Description for Kids' Topwear
        description: "A soft cotton top for girls with a round neck, offering comfort and freedom for active play and casual outings.",
        price: 200,
        images: ["p_img27.png"],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716640945448,
        bestSeller: false
    },
    {
   
        name: "Men Slim Fit Relaxed Denim Jacket",
        // New Description for Men's Winterwear
        description: "A rugged denim jacket for men in a slim-fit cut, providing a stylish layer of warmth and a classic casual look.",
        price: 230,
        images: ["p_img28.png"],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716642045448,
        bestSeller: false
    },
    {
      
        name: "Women Round Neck Cotton Top",
        // New Description for Women's Topwear
        description: "A comfortable, versatile cotton top featuring a classic round neck, perfect for everyday wear and easy to style.",
        price: 210,
        images: ["p_img29.png"],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716643145448,
        bestSeller: false
    },
    {
       
        name: "Girls Round Neck Cotton Top",
        // New Description for Kids' Topwear
        description: "A soft cotton top for girls with a round neck, offering comfort and freedom for active play and casual outings.",
        price: 240,
        images: ["p_img30.png"],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716644245448,
        bestSeller: false
    },
    {
       
        name: "Men Round Neck Pure Cotton T-shirt",
        // New Description for Men's Topwear
        description: "An essential pure cotton t-shirt for men, designed with a round neck for a relaxed and breathable fit.",
        price: 220,
        images: ["p_img31.png"],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716645345448,
        bestSeller: false
    },
    {
       
        name: "Men Round Neck Pure Cotton T-shirt",
        // New Description for Men's Topwear
        description: "An essential pure cotton t-shirt for men, designed with a round neck for a relaxed and breathable fit.",
        price: 250,
        images: ["p_img32.png"],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716646445448,
        bestSeller: false
    },
    {
       
        name: "Girls Round Neck Cotton Top",
        // New Description for Kids' Topwear
        description: "A soft cotton top for girls with a round neck, offering comfort and freedom for active play and casual outings.",
        price: 230,
        images: ["p_img33.png"],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716647545448,
        bestSeller: false
    },
    {
       
        name: "Women Round Neck Cotton Top",
        // New Description for Women's Topwear
        description: "A comfortable, versatile cotton top featuring a classic round neck, perfect for everyday wear and easy to style.",
        price: 260,
        images: ["p_img34.png"],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716648645448,
        bestSeller: false
    },
    {
      
        name: "Women Zip-Front Relaxed Fit Jacket",
        // New Description for Women's Winterwear
        description: "A cozy zip-front jacket for women, offering a relaxed fit for comfortable layering and extra warmth in cooler weather.",
        price: 240,
        images: ["p_img35.png"],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716649745448,
        bestSeller: false
    },
    {
      
        name: "Women Zip-Front Relaxed Fit Jacket",
        // New Description for Women's Winterwear
        description: "A cozy zip-front jacket for women, offering a relaxed fit for comfortable layering and extra warmth in cooler weather.",
        price: 270,
        images: ["p_img36.png"],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716650845448,
        bestSeller: false
    },
    {
      
        name: "Women Round Neck Cotton Top",
        // New Description for Women's Topwear
        description: "A comfortable, versatile cotton top featuring a classic round neck, perfect for everyday wear and easy to style.",
        price: 250,
        images: ["p_img37.png"],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716651945448,
        bestSeller: false
    },
    {
        
        name: "Men Round Neck Pure Cotton T-shirt",
        // New Description for Men's Topwear
        description: "An essential pure cotton t-shirt for men, designed with a round neck for a relaxed and breathable fit.",
        price: 280,
        images: ["p_img38.png"],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716653045448,
        bestSeller: false
    },
    {
       
        name: "Men Printed Plain Cotton Shirt",
        // New Description for Men's Topwear (Changed for shirt)
        description: "A comfortable cotton shirt for men featuring a subtle print, ideal for a smart-casual or everyday look.",
        price: 260,
        images: ["p_img39.png"],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716654145448,
        bestSeller: false
    },
    {
       
        name: "Men Slim Fit Relaxed Denim Jacket",
        // New Description for Men's Winterwear
        description: "A rugged denim jacket for men in a slim-fit cut, providing a stylish layer of warmth and a classic casual look.",
        price: 290,
        images: ["p_img40.png"],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716655245448,
        bestSeller: false
    },
    {
        name: "Men Round Neck Pure Cotton T-shirt",
        // New Description for Men's Topwear
        description: "An essential pure cotton t-shirt for men, designed with a round neck for a relaxed and breathable fit.",
        price: 270,
        images: ["p_img41.png"],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716656345448,
        bestSeller: false
    },
    {
        
        name: "Boy Round Neck Pure Cotton T-shirt",
        // New Description for Kids' Topwear
        description: "A durable pure cotton t-shirt for boys with a round neck, ideal for school, sports, and casual adventures.",
        price: 300,
        images: ["p_img42.png"],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716657445448,
        bestSeller: false
    },
    {
       
        name: "Kid Tapered Slim Fit Trouser",
        // New Description for Kids' Bottomwear
        description: "Comfortable trousers for kids in a tapered slim fit, offering a smart yet flexible option for all-day wear.",
        price: 280,
        images: ["p_img43.png"],
        category: "Kids",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716658545448,
        bestSeller: false
    },
    {
       
        name: "Women Zip-Front Relaxed Fit Jacket",
        // New Description for Women's Winterwear
        description: "A cozy zip-front jacket for women, offering a relaxed fit for comfortable layering and extra warmth in cooler weather.",
        price: 310,
        images: ["p_img44.png"],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716659645448,
        bestSeller: false
    },
    {
     
        name: "Men Slim Fit Relaxed Denim Jacket",
        // New Description for Men's Winterwear
        description: "A rugged denim jacket for men in a slim-fit cut, providing a stylish layer of warmth and a classic casual look.",
        price: 290,
        images: ["p_img45.png"],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716660745448,
        bestSeller: false
    },
    {
        
        name: "Men Slim Fit Relaxed Denim Jacket",
        // New Description for Men's Winterwear
        description: "A rugged denim jacket for men in a slim-fit cut, providing a stylish layer of warmth and a classic casual look.",
        price: 320,
        images: ["p_img46.png"],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716661845448,
        bestSeller: false
    },
    {
      
        name: "Kid Tapered Slim Fit Trouser",
        // New Description for Kids' Bottomwear
        description: "Comfortable trousers for kids in a tapered slim fit, offering a smart yet flexible option for all-day wear.",
        price: 300,
        images: ["p_img47.png"],
        category: "Kids",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716662945448,
        bestSeller: false
    },
    {
       
        name: "Men Slim Fit Relaxed Denim Jacket",
        // New Description for Men's Winterwear
        description: "A rugged denim jacket for men in a slim-fit cut, providing a stylish layer of warmth and a classic casual look.",
        price: 330,
        images: ["p_img48.png"],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716664045448,
        bestSeller: false
    },
    {
        
        name: "Kid Tapered Slim Fit Trouser",
        // New Description for Kids' Bottomwear
        description: "Comfortable trousers for kids in a tapered slim fit, offering a smart yet flexible option for all-day wear.",
        price: 310,
        images: ["p_img49.png"],
        category: "Kids",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716665145448,
        bestSeller: false
    },
    {
        name: "Kid Tapered Slim Fit Trouser",
        // New Description for Kids' Bottomwear
        description: "Comfortable trousers for kids in a tapered slim fit, offering a smart yet flexible option for all-day wear.",
        price: 340,
        images: ["p_img50.png"],
        category: "Kids",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716666245448, bestSeller: false
    },
    {
       
        name: "Women Zip-Front Relaxed Fit Jacket",
        // New Description for Women's Winterwear
        description: "A cozy zip-front jacket for women, offering a relaxed fit for comfortable layering and extra warmth in cooler weather.",
        price: 320,
        images: ["p_img51.png"],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716667345448,
        bestSeller: false
    },
    {
        name: "Men Slim Fit Relaxed Denim Jacket",
        // New Description for Men's Winterwear
        description: "A rugged denim jacket for men in a slim-fit cut, providing a stylish layer of warmth and a classic casual look.",
        price: 350,
        images: ["p_img52.png"],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716668445448,
        bestSeller: false
    }
]

export default products;