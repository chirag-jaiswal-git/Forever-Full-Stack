import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="flex flex-col md:flex-row gap-10 my-10 justify-center mb-28">
      <img className="w-full md:max-w-[480px]" src={assets.contact_img} alt="" />
      <div className="flex flex-col justify-center items-start gap-6">
       <p className="font-semibold text-xl text-gray-600">Our Store</p>
       <p className="text-gray-500">54709 Willms Station <br />California, USA</p>
       <p className="text-gray-500">Phone: +1 (555) 123-4567 <br />Email: admin@forever.com
       </p>
       <p className="text-gray-600 font-semibold text-xl">Careers at Forever</p>
       <p className="text-gray-500">Learn more about our opportunities and join our team!</p>
       <button className=" border border-black px-8 py-4 hover:bg-black transition-all  text-sm duration-500 hover:text-white">Explore Jobs</button>
      </div>
      </div>
    </div>
  );
};

export default Contact;
