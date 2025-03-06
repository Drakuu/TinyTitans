import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import dp1 from '../../public/assets/Images/home/dp1.png';
import dp2 from '../../public/assets/Images/home/dp2.png';
import dp3 from '../../public/assets/Images/home/dp3.png';
import dp4 from '../../public/assets/Images/home/dp4.png'; 
import dp5 from '../../public/assets/Images/home/dp5.png';
import dp6 from '../../public/assets/Images/home/dp6.png';
import dp7 from '../../public/assets/Images/home/dp7.png';
import dp8 from '../../public/assets/Images/home/dp8.png';

function Home() {
    const homeItems = [
        { bgpic: dp1, header: 'New IN', para: "Explore this week’s kidswear pieces curated for you.", size: "col-span-2 row-span-2" },
        { bgpic: dp2, header: 'BACK TO SCHOOL', para: "Comfortable cotton or knitted pieces for casual looks.", size: "col-span-1 row-span-1" },
        { bgpic: dp3, header: 'GIRLS', size: "col-span-1 row-span-2" },
        { bgpic: dp4, header: 'BOYS', size: "col-span-1 row-span-1" },
        { bgpic: dp5, header: 'Shoes & Bags', para: "Explore the new collection of shoes and bags.", size: "col-span-2 row-span-1" },
        { bgpic: dp6, header: 'Special Occasion', size: "col-span-1 row-span-1" },
        { bgpic: dp7, header: 'Hot Prices', size: "col-span-1 row-span-1" },
        { bgpic: dp8, header: 'Underwear & Pajamas', size: "col-span-2 row-span-1" },
    ];

    return (
        <div className="mb-10 px-2 md:px-10 lg:px-16">
            {/* Dynamic Grid Layout */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[320px] sm:auto-rows-[380px] md:auto-rows-[450px] lg:auto-rows-[500px]">
                {homeItems.map((item, index) => (
                    <div key={index} className={`relative group overflow-hidden rounded-lg shadow-lg ${item.size}`}>
                        {/* Background Image */}
                        <img src={item.bgpic} alt={item.header} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />

                        {/* Overlay Content */}
                        <div className="absolute inset-0 bg-black/40 sm:bg-black/50 flex flex-col justify-center items-center text-white text-center px-4 py-6 space-y-4 transition-all duration-300 group-hover:bg-black/20">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{item.header}</h1>
                            {item.para && <p className="hidden sm:block text-sm md:text-base">{item.para}</p>}
                            {/* Shop Now Button - Navigates to Collection Page */}
                            <Link to="/collection">
                                <button className="border-2 border-white px-6 py-2 text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:bg-white hover:text-black">
                                    Shop Now
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
