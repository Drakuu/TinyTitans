import React from 'react'
import dp2 from '../../public/assets/Images/home/dp2.png';
import dp4 from '../../public/assets/Images/home/dp4.png';
import dp7 from '../../public/assets/Images/home/dp7.png';
import dp1 from '../../public/assets/Images/home/dp1.png';
import dp3 from '../../public/assets/Images/home/dp3.png';
import dp5 from '../../public/assets/Images/home/dp5.png';
import clothes1 from "../../public/assets/Images/sectionall/clothes1.png";
import clothes2 from "../../public/assets/Images/sectionall/clothes2.png";
import clothes3 from "../../public/assets/Images/sectionall/clothes3.png";
import clothes4 from "../../public/assets/Images/sectionall/clothes4.png";
import clothes16 from "../../public/assets/Images/sectionall/clothes16.png";
import clothes17 from "../../public/assets/Images/sectionall/clothes17.png";
import clothes18 from "../../public/assets/Images/sectionall/clothes18.png";
import clothes19 from "../../public/assets/Images/sectionall/clothes19.png";

function SectionsAll() {

  const headimg = [
    { bgimg: dp7, footer: 'Baby Boy' },
    { bgimg: dp4, footer: 'Baby Girl' },
    { bgimg: dp2, footer: 'Baby Neutral' }
  ];

  const header2 = [
    { bgimg: dp1, para: 'Summer Collection', header: 'New Arrivals' },
    { bgimg: dp3, para: 'Trendy Outfits', header: 'Limited Edition' },
    { bgimg: dp5, para: 'Exclusive Picks', header: 'New Collection' }
  ];

  const header3 = [
    { bgimg: clothes1, header: 'Toddler Boy' },
    { bgimg: clothes2, header: 'Toddler Girl' },
    { bgimg: clothes3, header: 'Kid Girl' },
    { bgimg: clothes4, header: 'Kid Boy' }
  ];

  const header4 = [
    { bgimg: clothes16, header: 'BABY NEUTRAL' },
    { bgimg: clothes17, header: 'BABY GIRL' },
    { bgimg: clothes18, header: 'SALE' },
    { bgimg: clothes19, header: 'BABY BOY' }
  ];

  return (
    <div className="bg-gray-100 py-12">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">Banners Collection</h2>
        <p className="text-gray-500 mt-2">Showcasing our latest collections in style.</p>
      </div>

      {/* First Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-6 lg:px-20">
        {headimg.map((item, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-md group">
            <img src={item.bgimg} alt={item.footer} className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute bottom-4 left-4 text-white text-lg font-semibold bg-black/60 px-3 py-1 rounded">
              {item.footer}
            </div>
          </div>
        ))}
      </div>

      {/* Section Title */}
      <div className="text-center mt-12 mb-10">
        <h2 className="text-4xl font-bold text-gray-800">Banners</h2>
        <p className="text-gray-500 mt-2">Highlighting different sizes and categories.</p>
      </div>

      {/* Second Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6 lg:px-20">
        {header2.map((item, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-md group">
            <img src={item.bgimg} alt={item.header} className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-lg font-semibold">{item.para}</h3>
              <h2 className="text-3xl font-bold">{item.header}</h2>
              <button className="mt-4 px-5 py-2 bg-white text-gray-800 font-semibold rounded-lg hover:bg-black hover:text-white transition">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Section Title */}
      <div className="text-center mt-12 mb-10">
        <h2 className="text-4xl font-bold text-gray-800">Collections</h2>
        <p className="text-gray-500 mt-2">Explore our latest fashion collections.</p>
      </div>

      {/* Third Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 lg:px-20">
        {header3.map((item, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-md group bg-white p-4">
            <img src={item.bgimg} alt={item.header} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold">{item.header}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Section Title */}
      <div className="text-center mt-12 mb-10">
        <h2 className="text-4xl font-bold text-gray-800">New Arrivals</h2>
        <p className="text-gray-500 mt-2">Get the freshest styles before anyone else.</p>
      </div>

      {/* Fourth Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 lg:px-20">
        {header4.map((item, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-md group bg-white p-4">
            <img src={item.bgimg} alt={item.header} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold">{item.header}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionsAll;
