import React, { useState } from "react";
import Navbar from './addressNav'; // Reuse Navbar component
import Logo from "../../assets/Images/BabyBoy/logo.png"; // Add more items as per requirement
import Item1 from "../../assets/Images/BabyBoy/1.jpg";
import Item2 from "../../assets/Images/BabyBoy/2.jpg";
import Item3 from "../../assets/Images/BabyBoy/3.jpg";
import Item4 from "../../assets/Images/BabyBoy/4.png";
import Item5 from "../../assets/Images/BabyBoy/5.jpg";
import Item6 from "../../assets/Images/BabyBoy/logo.png";
import Item7 from "../../assets/Images/BabyBoy/7.jpg";
import Item8 from "../../assets/Images/BabyBoy/8.png";
import Item9 from "../../assets/Images/BabyBoy/9.jpg";
import Item10 from "../../assets/Images/BabyBoy/10.png";
import Item11 from "../../assets/Images/BabyBoy/11.png";
import Item12 from "../../assets/Images/BabyBoy/12.jpg";

const BabyBoy = () => {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalItem, setModalItem] = useState(null);

  const items = [
    { id: 1, name: "Knit Cardigan", price: "$30.00", image: Item1 },
    { id: 2, name: "Lined Jogging Trousers", price: "$20.00", image: Item2 },
    { id: 3, name: "Baby Boy Shoes", price: "$25.00", image: Item3 },
    { id: 4, name: "Cozy Baby Jacket", price: "$35.00", image: Item4 },
    { id: 5, name: "Baby Onesie", price: "$15.00", image: Item5 },
    { id: 6, name: "Striped Baby T-shirt", price: "$18.00", image: Item6 },
    { id: 7, name: "Mini Sneakers", price: "$30.00", image: Item7 },
    { id: 8, name: "Comfy Baby Hat", price: "$12.00", image: Item8 },
    { id: 9, name: "Baby Booties", price: "$22.00", image: Item9 },
    { id: 10, name: "Cute Baby Romper", price: "$25.00", image: Item10 },
    { id: 11, name: "Denim Baby Jeans", price: "$27.00", image: Item11 },
    { id: 12, name: "Baby Boy Pajamas", price: "$40.00", image: Item12 },
  ];

  const addToCart = (item) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const itemIndex = updatedCart.findIndex(cartItem => cartItem.id === item.id);

      if (itemIndex === -1) {
        updatedCart.push({ ...item, quantity: 1 });
      } else {
        updatedCart[itemIndex].quantity += 1;
      }

      return updatedCart;
    });

    setModalItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Baby Boy Page Content */}
      <div className="w-2/3 mx-auto my-6">
        {/* Image Section */}
        <div className="mb-6 bg-gray-50 p-4 rounded-lg shadow-sm flex flex-col items-center">
          <img
            src={Logo}
            alt="Baby Boy"
            className="w-1/2 h-auto object-cover rounded-lg"
          />
          <h2 className="text-3xl font-bold mt-4 text-center">Baby Boy Collection</h2>
        </div>
      </div>

      {/* Filter/Category buttons */}
      <div className="px-9">
        <div className="flex space-x-4 mb-6">
          <button className="bg-black text-white py-2 px-4 rounded">All</button>
          <button className="bg-gray-200 py-2 px-4 rounded">Baby Boy</button>
          <button className="bg-gray-200 py-2 px-4 rounded">Baby Girl</button>
          <button className="bg-gray-200 py-2 px-4 rounded">Toddler Boy</button>
        </div>

        {/* Sort/Filter Bar */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <label className="font-semibold">Sort by:</label>
            <select className="bg-gray-100 p-2 rounded-lg">
              <option>Featured</option>
              <option>Best Selling</option>
              <option>Name: A – Z</option>
              <option>Name: Z – A</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Oldest to Newest</option>
              <option>Newest to Oldest</option>
            </select>
          </div>
          <span className="text-sm text-gray-500">{items.length} items</span>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative border p-4 rounded-lg shadow-sm hover:shadow-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-auto object-cover rounded-md"
              />
              <h3 className="mt-2 text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.price}</p>

              {/* Hover Effects */}
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 bg-gray-400/20 bg-opacity-50 transition-all duration-200">
                <button
                  className="bg-black text-white py-2 px-4 rounded-full"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
                <div className="flex space-x-2 ml-4">
                  <button className="text-white">
                    <i className="fas fa-search"></i> {/* Zoom Icon */}
                  </button>
                  <button className="text-white">
                    <i className="fas fa-heart"></i> {/* Heart Icon */}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Modal */}
      {showModal && modalItem && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-xl font-semibold">Product successfully added to your shopping cart</h3>
            <img src={modalItem.image} alt={modalItem.name} className="w-full h-auto mt-4 rounded-lg" />
            <h4 className="mt-2 text-lg font-semibold">{modalItem.name}</h4>
            <p className="text-sm">{modalItem.price}</p>
            <p className="text-sm">Quantity: 1</p>
            <p className="text-sm">Total: {modalItem.price}</p>
            <div className="mt-4 flex space-x-4">
              <button
                onClick={closeModal}
                className="bg-gray-200 py-2 px-4 rounded"
              >
                Continue Shopping
              </button>
              <button
                onClick={() => alert("Redirect to Cart")}
                className="bg-black text-white py-2 px-4 rounded"
              >
                Go to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BabyBoy;