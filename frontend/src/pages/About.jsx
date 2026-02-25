import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 ">
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customer easily
            discover,explore and purchase a wide range of products.We
            continuously strive to curate products that meet diverse tastes and
            lifestyles while ensuring a seamless and secure shopping experience.{" "}
          </p>

          <p>
            From this foundation, Forever has grown into a customer-centric
            marketplace built on trust, quality, and convenience. By leveraging
            modern technology, efficient logistics, and responsive customer
            support, Forever is committed to delivering value at every
            step—transforming everyday shopping into an experience that is
            reliable, enjoyable, and inspiring.
          </p>

          <b>Our Mission</b>
          <p>
            At Forever, we believe in the power of choice and the joy of
            discovery. Our platform is designed to connect customers with
            products that enhance their lives, whether it's the latest tech
            gadget, stylish apparel, or unique home decor. We are dedicated to
            fostering a community where customers feel valued and empowered to
            make informed purchasing decisions.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
       <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Quality Assurance:</b>
        <p className="text-gray-600">
          We ensure all products meet the highest standards of quality and
          safety. Every item is carefully selected and inspected to guarantee
          customer satisfaction.
        </p>
       </div>
       <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Convenience</b>
        <p className="text-gray-600">
          Our user-friendly platform allows customers to browse and shop from
          the comfort of their homes. With secure payment options and reliable
          delivery services, we make online shopping hassle-free.
        </p>
       </div>
       <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Exceptional Customer Service</b>
        <p className="text-gray-600">
          Our dedicated support team is always ready to assist customers with
          any inquiries or issues. We prioritize customer satisfaction and
          strive to provide prompt and helpful assistance.
        </p>
       </div>
      </div>
    </div>
  );
};

export default About;
