import React from "react";
import { Trash2 } from "lucide-react"; // Icon for remove button
import { useCart } from "../../context/CartContext"; // Import Cart Context

const Cart = () => {
  const { cart, removeFromCart, updateCartItemQuantity } = useCart(); // ✅ Ensure removeFromCart is available

  // Calculate total price correctly
  const totalPrice = cart.reduce((total, item) => 
    total + (parseFloat(item.price.replace("$", "")) * item.quantity || 0), 0
  );

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-lg text-center">Your cart is empty.</p>
      ) : (
        <div className="bg-white p-4 sm:p-6 shadow-lg rounded-lg">
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row justify-between items-center border-b pb-4 mb-4">
              
              {/* Left: Item Image and Name */}
              <div className="flex items-center space-x-4 w-full sm:w-auto">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-500">${parseFloat(item.price.replace("$", "")).toFixed(2)}</p>
                </div>
              </div>

              {/* Middle: Quantity Control */}
              <div className="flex items-center space-x-3 mt-3 sm:mt-0">
                <button
                  className="px-3 py-1 bg-gray-300 rounded-lg hover:bg-gray-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="text-lg font-semibold">{item.quantity}</span>
                <button
                  className="px-3 py-1 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
                  onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>

              {/* Right: Remove Button */}
              <button
                className="text-red-500 hover:text-red-700 transition mt-3 sm:mt-0"
                onClick={() => removeFromCart(item.id)}
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}

          {/* Total Price */}
          <div className="mt-6 text-lg font-bold flex justify-between">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          {/* Checkout Button */}
          <button className="w-full mt-6 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
