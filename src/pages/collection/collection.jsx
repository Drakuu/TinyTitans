import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./addressNav";

// Import Images
import Item1 from "../../../public/assets/Images/Collections/1.jpg";
import Item2 from "../../../public/assets/Images/Collections/2.png";
import Item3 from "../../../public/assets/Images/Collections/3.png";
import Item4 from "../../../public/assets/Images/Collections/4.png";
import Item5 from "../../../public/assets/Images/Collections/5.png";
import Item6 from "../../../public/assets/Images/Collections/6.jpg";
import Item7 from "../../../public/assets/Images/Collections/7.png";
import Item8 from "../../../public/assets/Images/Collections/8.jpg";
import Item9 from "../../../public/assets/Images/Collections/1.jpg";
import Item10 from "../../../public/assets/Images/Collections/10.jpg";
import Item11 from "../../../public/assets/Images/Collections/11.jpg";
import Item12 from "../../../public/assets/Images/Collections/12.png";

const Collection = () => {
    const navigate = useNavigate();

    // Data for the collection cards
    const collections = [
        { name: "Accessories", image: Item1 },
        { name: "Baby Boy", image: Item2 },
        { name: "Baby Girl", image: Item3 },
        { name: "Baby Neutral", image: Item4 },
        { name: "Beach Collection", image: Item5 },
        { name: "Kid Boy", image: Item6 },
        { name: "Kid Girl", image: Item7 },
        { name: "New Items", image: Item8 },
        { name: "Sale", image: Item9 },
        { name: "Sale up to -70%", image: Item10 },
        { name: "Toddler Boy", image: Item11 },
        { name: "Toddler Girl", image: Item12 }
    ];

    // Function to handle clicking on a card
    const handleCardClick = (category) => {
        const formattedCategory = category.toLowerCase().replace(/\s+/g, "-");
        navigate(`/${formattedCategory}`);
    };

    return (
        <>
        {/* Navbar */}
        <Navbar />
  
        {/* Page Content */}
        <div className=" lg:w-2/3 mx-auto">
          <h1 className="my-6 text-2xl font-bold">Collection</h1>
  
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {collections.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 flex flex-col items-center border rounded-lg p-4 shadow-lg cursor-pointer hover:shadow-xl transition ease-in delay-200"
                onClick={() => handleCardClick(item.name)}
              >
                {/* Add hover effect */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-auto rounded-md transition-transform transform hover:scale-110"
                />
                <span className="mt-2 text-center text-lg font-bold">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </>
    );
};

export default Collection;