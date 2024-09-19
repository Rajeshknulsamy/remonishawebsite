import React from 'react';
import welcome from "../Assets/welcome.jpg";
import monivdo from "../Assets/monivdo.mp4";
import moni from "../Assets/moni.png";
import sathya from "../Assets/sathya.png";
import yevalo from "../Assets/obj.png";
import beauty1 from "../Assets/beauty1.png";
import remo from "../Assets/remo.jpg";
import sathya1 from "../Assets/sahtya1.png";
import pic1 from "../Assets/pic1.png";
import pic2 from "../Assets/pic2.png";
import mehindhi from "../Assets/mehandhi.png";
import hair from "../Assets/hair.png";
import make from "../Assets/make.png";
import apoit1 from "../Assets/apoit1.png";
import apoit2 from "../Assets/apoit2.png";
import { useState } from "react";
import green2 from "../Assets/green2.png";
import moni2 from "../Assets/moni2.png";
import blue2 from "../Assets/blue2.png";
import red2 from "../Assets/red2.png";
import white2 from "../Assets/white2.png";
import grey2 from "../Assets/grey2.png";

const HeroPage = () => {
  const commentFun = () => {
    document.getElementById("comment").textContent =
      document.getElementById("personcomment").value;
    document.getElementById("name").textContent =
      document.getElementById("personname").value;
  };
  const objects = [
    { id: 1, src: yevalo, hoversrc: green2 },
    { id: 2, src: moni2, hoversrc: moni },
    { id: 3, src: sathya, hoversrc: blue2 },
    { id: 4, src: sathya1, hoversrc: red2 },
    { id: 5, src: pic1, hoversrc: white2 },
    { id: 6, src: grey2, hoversrc: pic2 }
  ];

  const [hoverindex, setHoverindex] = useState(null);
  return (
    <div className='w-full h-auto bg-black'>
      <div className='text-white flex flex-col sm:flex-row sm:justify-center items-center p-4'>
        <div className='mb-4 sm:mb-0 sm:mr-4'>
          <img
            src={welcome}
            alt="welcomeimage"
            className='w-[300px] h-[400px]  rounded'
          />
        </div>
        <div className='text-center sm:text-left max-w-2xl'>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-center p-5'>
            Welcome to Remo MakeOver!
          </h1>
          <p className='  text-center'>
            At Remo Nisha, we believe in enhancing your natural beauty with a
            touch of elegance and professionalism. 
            Nestled in the heart of Karur, our salon is dedicated to providing
            you with a luxurious and relaxing
             experience Makeup to your unique needs.
          </p>
        </div>
        
        <div className='mt-4 '>
          <video
            src={monivdo}
            autoPlay
            controls
            className='w-[300px] h-[400px]   rounded'
          ></video>
        </div>
      </div>
      <h1 className='font-bold text-white text-[30px] text-center '>MY Works</h1>
      <div className='flex flex-wrop'>

      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  {objects.map((image, index) => (
    <div
      key={image.id}
      className="relative"
      onMouseEnter={() => setHoverindex(index)}
      onMouseLeave={() => setHoverindex(null)}
    >
      <img
        src={hoverindex === index ? image.hoversrc : image.src}
        alt={`image${image.id}`}
        className="w-full h-[300px] md:h-[400px] object-cover transition-opacity duration-300 my-5"
      />
    </div>
  ))}
</div>
<div className="w-full h-auto bg-black flex flex-col md:flex-row">
  <div className="flex-1">
    <h1 className="font-bold text-[30px] md:text-[50px] text-white mx-5 md:mx-20 py-5">
      Our Services
    </h1>
    <ul className="text-white">
      <li className="font-semibold text-[20px] md:text-[25px] mx-5 md:mx-[100px] my-5 list-none">
        Makeup Services
      </li>
      <li className="text-[14px] md:text-[15px] mx-5 md:mx-[115px] my-[10px] leading-7 list-disc">
        <span className="font-semibold text-[16px] md:text-[17px]">Bridal Makeup: </span>
        For the most important day of your life, we create a stunning and
        timeless look that complements your style and wedding theme.
      </li>
      <li className="text-[14px] md:text-[15px] mx-5 md:mx-[115px] my-[10px] leading-7 list-disc">
        <span className="font-semibold text-[16px] md:text-[17px]">Waterproof Makeup: </span>
        Perfect for long-lasting wear, our waterproof makeup ensures you stay
        flawless, even in the most challenging conditions.
      </li>
      <li className="text-[14px] md:text-[15px] mx-5 md:mx-[115px] my-[10px] leading-7 list-disc">
        <span className="font-semibold text-[16px] md:text-[17px]">Regular Makeup: </span>
        Ideal for everyday elegance, our regular makeup services enhance your
        natural beauty with a subtle touch.
      </li>
      <li className="text-[14px] md:text-[15px] mx-5 md:mx-[115px] my-[10px] leading-7 list-disc">
        <span className="font-semibold text-[16px] md:text-[17px]">Party Makeup: </span>
        Stand out at any event with glamorous and trendy makeup that captures
        attention and boosts your confidence.
      </li>
      <li className="font-semibold text-[18px] md:text-[20px] mx-5 md:mx-[100px] mb-5 list-none">
        Saree Draping
      </li>
      <li className="text-[14px] md:text-[15px] mx-5 md:mx-[115px] leading-7 list-disc">
        Achieve the perfect saree drape for any event with our expert saree
        draping services. Whether it’s a traditional look or a modern twist, we
        ensure your saree is draped to perfection, enhancing your grace and
        style.
      </li>
      <li className="font-semibold text-[18px] md:text-[20px] mx-5 md:mx-[100px] my-5 list-none">
        Mehendi (Henna Art)
      </li>
      <li className="text-[14px] md:text-[15px] mx-5 md:mx-[115px] leading-7 list-disc">
        Add a touch of tradition and elegance with our intricate Mehendi
        designs. Perfect for weddings, festivals, or any special occasion, our
        Mehendi artists craft beautiful patterns that adorn your hands and feet
        with stunning artistry.
      </li>
    </ul>
  </div>
  <div className="flex-1 flex justify-center items-center">
    <img src={remo} alt="remo" className="w-full h-auto max-w-[500px] mt-8 md:mt-0" />
  </div>
</div>
<div className="flex items-center justify-center gap-x-10 mt-10 flex-cols flex-wrap md:flex-row">
        <img
          src={mehindhi}
          alt="moniimage"
          className="h-[400px] w-[300px] m-5 rounded"
        />
        <img
          src={make}
          alt="moniimage"
          className="h-[400px] w-[300px] m-5 rounded"
        />
        <img
          src={hair}
          alt="moniimage"
          className="h-[400px] w-[300px] m-5 rounded"
        />
      </div>
      <div className="w-full h-auto bg-black flex justify-center flex-cols flex-wrap md:flex-row">
        <img
          src={beauty1}
          alt="beauty"
          className="w-[300px] rounded-full mx-20 py-5"
        />
        <div>
          <h1 className="font-bold m-5 text-[50px] text-white">
            Why Choose Us?
          </h1>
          <ul className="list-disc mx-[100px] leading-10">
            <li className="text-white">
              skilled beauticians are committed to providing exceptional service
              with the highest level of care and expertise
            </li>
            <li className="text-white">
              We take the time to understand your preferences and tailor our
              services to meet your individual needs.
            </li>
            <li className="text-white">
              Enjoy a serene and welcoming environment where you can unwind and
              feel at ease during your visit.
            </li>
            <li className="text-white">
              We use only the finest products to ensure your beauty regimen is
              both effective and indulgent.
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full bg-black text-white px-4 md:px-20 py-10">
  <h1 className="text-[30px] md:text-[50px] font-bold text-center md:text-left">
    Client Testimonials
  </h1>
  <p className="mx-auto md:mx-[150px] pt-5 pb-3 text-[14px] md:text-[18px]">
    “Remo Nisha Beauty Parlour made my wedding day so special! The makeup was flawless, and the saree draping was perfect. I received so many compliments!”
  </p>
  <p className="text-right md:ml-[1100px]"> — Sathya S.</p>

  <p className="mx-auto md:mx-[150px] pt-5 pb-3 text-[14px] md:text-[18px]">
    "I had the best experience at Remo Nisha Beauty Parlour! The staff was so attentive, and the bridal makeup they did for me was absolutely stunning. I felt like a queen on my wedding day!"
  </p>
  <p className="text-right md:ml-[1100px]"> — Priya R.</p>

  <p className="mx-auto md:mx-[150px] pt-5 pb-3 text-[14px] md:text-[18px]">
    "I always come to Remo Nisha for my regular facials and haircuts. The ambiance is so relaxing, and the team really knows how to make you feel pampered. Highly recommended!"
  </p>
  <p className="text-right md:ml-[1100px]"> — Anjali S.</p>

  <p className="mx-auto md:mx-[150px] pt-5 pb-3 text-[14px] md:text-[18px]">
    "Remo Nisha is my go-to place for Mehendi and saree draping. They’re true professionals, and the intricate Mehendi designs they did for my sister's wedding were amazing. Everyone loved it!"
  </p>
  <p className="text-right md:ml-[1100px]"> — Shweta M.</p>

  <p className="mx-auto md:mx-[150px] pt-5 pb-3 text-[14px] md:text-[18px]">
    "I needed a quick makeover for a party, and the team at Remo Nisha exceeded my expectations. The party makeup was flawless, and it stayed perfect all night. I’ll definitely be back!"
  </p>
  <p className="text-right md:ml-[1100px]"> — Neha K.</p>

  <p className="mx-auto md:mx-[150px] pt-5 pb-3 text-[14px] md:text-[18px]">
    "The hair care services at Remo Nisha are top-notch. I got a hair spa treatment that left my hair feeling soft and shiny. The staff is friendly and knowledgeable, and they really take the time to understand what you want."
  </p>
  <p className="text-right md:ml-[1100px]"> — Divya P.</p>

  <p className="mx-auto md:mx-[150px] pt-5 pb-3 text-[14px] md:text-[18px]">
    "I trust no one but Remo Nisha for my skincare needs. Their facials are simply the best, and my skin has never looked better. The products they use are of high quality, and the results speak for themselves."
  </p>
  <p className="text-right md:ml-[1100px]"> — Ritu A.</p>

  <p className="mx-auto md:mx-[150px] pt-5 pb-3 text-[14px] md:text-[18px]">
    The saree draping service here is outstanding! They made sure my saree looked perfect for my friend’s wedding, and I received so many compliments. The staff is incredibly skilled and patient."
  </p>
  <p className="text-right md:ml-[1100px]"> — Meera N.</p>

  <p className="mx-auto md:mx-[150px] pt-5 pb-3 text-[14px] md:text-[18px]">
    "Remo Nisha Beauty Parlour has a warm and welcoming environment. The personalized attention and care they provide make every visit special. Whether it’s a simple haircut or a full bridal makeover, they always deliver the best results."
  </p>
  <p className="text-right md:ml-[1100px]"> — Lakshmi V.</p>
  <p className="mx-[150px] pt-5 pb-3" id="comment"></p>
  <p className="ml-[1100px]" id="name"></p>

  <div className="mx-auto md:mx-[150px]">
    <input
      type="text"
      className="w-full md:w-[800px] h-[60px] md:h-[100px] p-3 rounded text-black font-bold"
      placeholder="#Comments Your Experience"
      required
      id="personcomment"
    />
    <input
      type="text"
      placeholder="Name"
      className="w-full ms-0 md:w-auto p-3 mt-3 md:ms-5  rounded text-black font-bold"
      id="personname"
      required
    />
    <button
      className="bg-purple-600 p-2 mt-3 md:mt-5 rounded-full px-6 text-red-900 font-bold md:ml-5 "
      onClick={commentFun}
    >
      Post
    </button>
  </div>
</div>
<div className="w-full bg-black text-white px-4 py-10 md:px-20">
  <h1 className="font-bold text-[30px] text-center md:text-[50px] text-center md:text-left text-center">
    Book Your Appointment Today!
  </h1>
  <p className="w-full md:w-[800px] lg:w-[1400px] mx-auto font-semibold mt-3 leading-7 text-[14px] md:text-[18px] text-center md:text-left">
    Ready to treat yourself? Book your appointment at Remo Nisha Beauty Parlour today and experience the best in beauty and wellness. Call us at +91 8838038151 or book online at the link below. We can’t wait to make you look and feel your best!
  </p>
</div>
<div className="w-full bg-black text-black flex flex-col md:flex-row justify-center md:justify-around items-center mt-10 p-4">
  <img
    src={apoit1}
    alt="apoitimage"
    className="w-[250px] h-[300px] md:w-[300px] md:h-[400px] m-4 rounded"
  />
  <form className="flex flex-col border border-red-800 rounded p-4 w-full md:w-auto">
    <h1 className="text-white text-center font-bold text-[18px] md:text-[20px] m-5">
      Remo MakeOver
    </h1>
    <input
      type="text"
      placeholder="Name"
      className="px-5 py-2 text-black font-bold m-2 w-full md:w-[300px]"
    />
    <input
      type="text"
      placeholder="Age"
      className="px-5 py-2 text-black font-bold m-2 w-full md:w-[300px]"
    />
    <input
      type="text"
      placeholder="Phone Number"
      className="px-5 py-2 text-black font-bold m-2 w-full md:w-[300px]"
    />
    <input
      type="text"
      placeholder="Address"
      className="px-5 py-2 text-black font-bold m-2 w-full md:w-[300px] h-[80px]"
    />
    <button className="bg-green-800 rounded-full m-3 py-2 w-full md:w-auto">
      Submit
    </button>
  </form>
  <img
    src={apoit2}
    alt="apoit2"
    className="w-[250px] h-[300px] md:w-[300px] md:h-[400px] m-4 rounded"
  />
</div>
<div className="w-full bg-black text-white px-4 py-10 md:px-20">
  <h1 className="font-bold text-[30px] md:text-[50px] md:text-left">
    Follow Us
  </h1>
  <ul>
    <li className="mx-auto md:mx-[100px] lg:mx-[300px] font-semibold my-5 list-disc text-[14px] md:text-[18px] leading-6 text-left mb-4">
      Stay in the loop with all things beauty by following Remo Nisha Beauty
      Parlour on social media! We’re more than just a salon; we’re a community
      of beauty enthusiasts dedicated to helping you look and feel your best.
      Whether you’re searching for the latest beauty tips, exclusive special
      offers, or updates on our newest services and products, our social media
      channels have it all.
    </li>
    <li className="mx-auto md:mx-[100px] lg:mx-[300px] font-semibold my-5 list-disc text-[14px] md:text-[18px] leading-6 text-left">
      Join our vibrant online community today and connect with other beauty
      lovers! Follow us on{" "}
      <a
        className="font-bold text-[16px] md:text-[20px] text-blue-600"
        href="https://www.instagram.com/remo_makeover/"
      >
        Instagram
      </a>
      , and let’s embark on this beautiful journey together. We can’t wait to
      see you there!
    </li>
  </ul>
</div>
<div className="w-full bg-black text-white px-4 py-10 md:px-20">
  <h1 className="text-[30px] md:text-[50px] font-bold text-center md:text-left">
    Contact Us
  </h1>
  <p className="leading-6 md:leading-8 mx-auto md:mx-[100px] lg:mx-[300px] font-bold text-[14px] md:text-[18px] mt-5">
    For any inquiries, please reach out to us at remonisha@gmail.com or visit
    us at Puliyur, Karur. We look forward to serving you!
  </p>
  <div>
    <faFacebook className="facebook" />
  </div>
    <hr className='mt-3 mb-3' />
  <p>&copy; {new Date().getFullYear()} Remo MakeOver. All rights reserved.</p>
</div>
    </div>
  );
}

export default HeroPage;
