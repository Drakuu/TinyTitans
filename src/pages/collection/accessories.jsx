import React, { useState } from "react";
import { Search, ShoppingCart, X } from "lucide-react"; // Lucide Icons
import Navbar from "./addressNav";
import Item1 from "../../../public/assets/Images/Accessories/cable_texture_sweater_1_1200x450_crop_center.jpg";
import Item2 from "../../../public/assets/Images/Accessories/1.jpg";
import Item3 from "../../../public/assets/Images/Accessories/2.jpg";
import Item4 from "../../../public/assets/Images/Accessories/3.jpg";
import Item5 from "../../../public/assets/Images/Accessories/4.jpg";
import Item6 from "../../../public/assets/Images/Accessories/5.jpg";
import Item7 from "../../../public/assets/Images/Accessories/6.jpg";
import Item8 from "../../../public/assets/Images/Accessories/7.jpg";
import Item9 from "../../../public/assets/Images/Accessories/8.jpg";
import { useCart } from "../../context/CartContext"; // ✅ Fixed import

const Accessories = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalItem, setModalItem] = useState(null);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Black");
  const [sortOption, setSortOption] = useState("featured");
  const [alertVisible, setAlertVisible] = useState(false); // ✅ Added alert state
  const { addToCart, cart } = useCart(); // ✅ Now cart length is accessible


  const items = [
    {
      id: 1,
      name: "Cable Texture Sweater",
      price: "$40.00",
      description: "A cozy, stylish sweater with a classic cable-knit design. Made from soft wool, it's warm yet breathable, perfect for layering in chilly weather.",
      material: "100% Wool",
      image: Item9
    },
    {
      id: 2,
      name: "Contrast Dress",
      price: "$45.00",
      description: "A chic contrast dress with a flattering silhouette. Made from a soft cotton blend, it's lightweight, breathable, and ideal for both casual and dressy occasions.",
      material: "Cotton Blend",
      image: Item2
    },
    {
      id: 3,
      name: "Double Breasted Coat",
      price: "$59.00",
      description: "A timeless double-breasted coat with a structured fit. Made from a polyester-wool blend, it provides warmth while maintaining a sleek and polished look.",
      material: "Polyester & Wool",
      image: Item3
    },
    {
      id: 4,
      name: "Embroidered Shirt",
      price: "$39.00",
      description: "A stylish cotton shirt featuring delicate embroidery details. Soft, breathable, and versatile—perfect for casual and semi-formal wear.",
      material: "100% Cotton",
      image: Item4
    },
    {
      id: 5,
      name: "Jacquard Dress",
      price: "$59.00",
      description: "An elegant jacquard-patterned dress with a fitted waist and flowing skirt. The silk-blend fabric adds a touch of luxury, perfect for special occasions.",
      material: "Silk Blend",
      image: Item5
    },
    {
      id: 6,
      name: "Knit Cardigan With Pockets",
      price: "$30.00",
      description: "A soft, lightweight knit cardigan with spacious pockets. Its relaxed fit makes it great for layering over any outfit during cool weather.",
      material: "Acrylic & Wool",
      image: Item6
    },
    {
      id: 7,
      name: "Lined Jogging Trousers",
      price: "$20.00",
      description: "Comfortable jogging trousers with a soft fleece lining. Designed for warmth and flexibility, making them great for both lounging and outdoor wear.",
      material: "Polyester & Cotton",
      image: Item7
    },
    {
      id: 8,
      name: "Jeans",
      price: "$27.00",
      description: "Classic denim jeans with a stretchable fit. Durable, stylish, and versatile—perfect for everyday wear.",
      material: "Denim Cotton",
      image: Item8
    }
  ];
  



  const handleViewItem = (item) => {
    setModalItem(item);
    setShowModal(true);
  };

  // ✅ Add to Cart and Close Modal
  const handleAddToCart = (item) => {
    addToCart(item);
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 2000);
    setShowModal(false); // ✅ Close modal after adding to cart
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedSize("M");
    setSelectedColor("Black");
  };

  const parsePrice = (price) => {
    return parseFloat(price.replace("$", "")) || 0; // ✅ Fixed function
  };

  // Sorting Function
  const sortedItems = [...items].sort((a, b) => {
    switch (sortOption) {
      case "a-z":
        return a.name.localeCompare(b.name);
      case "z-a":
        return b.name.localeCompare(a.name);
      case "low-high":
        return parsePrice(a.price) - parsePrice(b.price); // Convert price string to number
      case "high-low":
        return parsePrice(b.price) - parsePrice(a.price); // Convert price string to number
      case "newest":
        return b.id - a.id; // Simulated newest first by ID
      case "oldest":
        return a.id - b.id; // Simulated oldest first by ID
      default:
        return 0;
    }
  });

  return (
    <>
     {alertVisible && (
  <div className="fixed w-full text-center top-5 left-1/2 transform -translate-x-1/2 bg-green-400 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-500 z-50">
    Item added to cart!
  </div>
)}

      {/* Navbar */}
      <Navbar />
      {/* Success Alert */}

      {/* Accessories Header Section */}
      <div className="w-2/3 mx-auto my-6 text-center">
        <img src={Item1} alt="Accessories" className="w-1/2 mx-auto rounded-lg" />
        <h2 className="text-3xl font-bold mt-4">Accessories</h2>
      </div>

      {/* Filter & Sort Bar */}
      <div className="px-4 md:px-9">
        <div className="flex space-x-4 mb-6 overflow-x-auto">
          <button className="bg-black text-white py-2 px-4 rounded">All</button>
          <button className="bg-gray-200 py-2 px-4 rounded">Baby Boy</button>
          <button className="bg-gray-200 py-2 px-4 rounded">Baby Girl</button>
          <button className="bg-gray-200 py-2 px-4 rounded">Kid Boy</button>
          <button className="bg-gray-200 py-2 px-4 rounded">Kid Girl</button>
          <button className="bg-gray-200 py-2 px-4 rounded">Toddler Girl</button>
        </div>

        {/* Sorting and Filters */}
        <div className="px-4 md:px-9">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="flex items-center space-x-4">
              <label className="font-semibold">Sort by:</label>
              <select
                className="bg-gray-100 p-2 rounded-lg"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="best-selling">Best Selling</option>
                <option value="a-z">Name: A – Z</option>
                <option value="z-a">Name: Z – A</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
                <option value="oldest">Oldest to Newest</option>
                <option value="newest">Newest to Oldest</option>
              </select>
            </div>
            <span className="text-sm text-gray-500">{items.length} items</span>
          </div>

          {/* ✅ Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {sortedItems.map((item) => (
              <div key={item.id} className="group relative border p-4 rounded-lg shadow-sm hover:shadow-lg bg-gray-50">
                <img src={item.image} alt={item.name} className="w-full h-auto object-cover rounded-md" />
                <h3 className="mt-2 text-lg font-semibold">{item.name}</h3>
                {/* <h3 className="mt-2 ">{item.description}</h3> */}                <p className="text-sm text-gray-500">{item.price}</p>

                {/* ✅ Hover Buttons Inside .map() */}
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 bg-black/40 transition-all duration-300 ease-in-out">
                  <div className="flex flex-col space-y-3">
                    <button
                      className="w-full bg-white text-black px-4 py-2 rounded-lg flex justify-center items-center space-x-2 hover:bg-gray-200 transition transform hover:scale-105"
                      onClick={() => handleViewItem(item)}
                    >
                      <Search size={18} /> <span>View</span>
                    </button>

                    <button
                      className="w-full bg-black text-white px-4 py-2 rounded-lg flex justify-center items-center space-x-2 hover:bg-gray-700 transition transform hover:scale-105"
                      onClick={() => handleAddToCart(item)}
                    >
                      <ShoppingCart size={18} /> <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Cart Modal */}
      {showModal && modalItem && (
  <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 px-4">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl relative flex flex-col md:flex-row">
      
      {/* Close Button */}
      <button className="absolute top-3 right-3 text-gray-600 hover:text-black" onClick={closeModal}>
        <X size={24} />
      </button>

      {/* Left Side - Thumbnails & Main Image */}
      <div className="md:w-1/2 flex">
        
        {/* Thumbnails - Small Preview Boxes */}
        <div className="flex flex-col space-y-2 mr-3">
          {[
            "https://placehold.co/100x100", 
            "https://placehold.co/100x100", 
            "https://placehold.co/100x100",
            "https://placehold.co/100x100",
            "https://placehold.co/100x100"
          ].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="w-20 h-20 object-cover rounded-lg cursor-pointer border border-gray-300 hover:border-black"
              onClick={() => setModalItem({ ...modalItem, image: img })} // Clicking updates main image
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="flex justify-center items-center w-full">
          <img
            src={modalItem.image}
            alt={modalItem.name}
            className="w-full max-w-sm h-auto object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Right Side - Details */}
      <div className="md:w-1/2 md:pl-6 flex flex-col justify-center">
        <h4 className="text-2xl font-bold">{modalItem.name}</h4>
        <p className="mt-2 text-sm text-gray-500">{modalItem.description}</p>

        <div className="mt-3">
          <span className="font-semibold">Price:</span>
          <p className="text-lg text-gray-700">${parseFloat(modalItem?.price.replace("$", ""))?.toFixed(2)}</p>
        </div>

        {/* ✅ Size Selection */}
        <div className="mt-4">
          <label className="block font-semibold">Size:</label>
          <select
            className="w-full border rounded-lg p-2"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>

        {/* ✅ Color Selection */}
        <div className="mt-4">
          <label className="block font-semibold">Color:</label>
          <select
            className="w-full border rounded-lg p-2"
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          >
            <option value="Black">Black</option>
            <option value="White">White</option>
            <option value="Blue">Blue</option>
            <option value="Red">Red</option>
            <option value="Pink">Pink</option>
          </select>
        </div>

        {/* ✅ Buttons */}
        <div className="mt-6 flex justify-between">
          <button onClick={closeModal} className="bg-gray-200 py-2 px-4 rounded-lg">Back</button>
          <button className="bg-black text-white py-2 px-6 rounded-lg" onClick={() => handleAddToCart(modalItem)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
)}



    </>

  );
};

export default Accessories;
