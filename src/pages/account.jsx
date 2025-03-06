import React, { useState } from "react";
import { Link } from "react-router-dom";
import { User, UserPlus, Lock, X, Eye, EyeOff } from "lucide-react"; // Import Icons

function Account() {
  const [showModal, setShowModal] = useState(null); // "login", "register", or "restore"
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="relative flex flex-col justify-center items-center p-2 lg:p-10">
      {/* Breadcrumb Navigation */}
      <div className="mb-4 text-sm text-gray-600">
        <Link to="/" className="hover:text-black">Home</Link> <span className="mx-2">|</span>
        <span className="font-semibold text-black">Account</span>
      </div>

      {/* Account Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Login - Opens Modal */}
        <button onClick={() => setShowModal("login")} className="account-card">
          <User size={40} />
          <span className="font-semibold text-lg">Log in</span>
        </button>

        {/* Registration - Opens Modal */}
        <button onClick={() => setShowModal("register")} className="account-card">
          <UserPlus size={40} />
          <span className="font-semibold text-lg">Registration</span>
        </button>
      </div>

      {/* Restore Password (Centered Below) */}
      <button onClick={() => setShowModal("restore")} className="account-card mt-6">
        <Lock size={40} />
        <span className="font-semibold text-lg">Restore Password</span>
      </button>

      {/* Login, Register & Restore Password Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/50 px-4" onClick={() => setShowModal(null)}>
          <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md relative" onClick={(e) => e.stopPropagation()}>
            
            {/* Close Button */}
            <button className="absolute top-3 right-3 text-gray-600 hover:text-black" onClick={() => setShowModal(null)}>
              <X size={24} />
            </button>

            {/* Login Form */}
            {showModal === "login" && (
              <>
                <h2 className="text-2xl font-bold text-center mb-6">Account</h2>
                <p className="text-gray-700 font-semibold mb-4">ALREADY REGISTERED?</p>

                {/* Email Field */}
                <div className="mb-4">
                  <label className="block text-gray-600 font-medium">Email address</label>
                  <input type="email" className="input-field" placeholder="Enter your email" />
                </div>

                {/* Password Field with Toggle */}
                <div className="mb-4 relative">
                  <label className="block text-gray-600 font-medium">Password</label>
                  <input type={showPassword ? "text" : "password"} className="input-field pr-10" placeholder="Enter your password" />
                  <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                {/* Sign In Button */}
                <button className="action-btn">SIGN IN</button>
              </>
            )}

            {/* Register Form */}
            {showModal === "register" && (
              <>
                <h2 className="text-2xl font-bold text-center mb-6">Account</h2>
                <p className="text-gray-700 font-semibold mb-4">CREATE AN ACCOUNT</p>

                {/* First Name */}
                <div className="mb-4">
                  <label className="block text-gray-600 font-medium">First name</label>
                  <input type="text" className="input-field" placeholder="Enter your first name" />
                </div>

                {/* Last Name */}
                <div className="mb-4">
                  <label className="block text-gray-600 font-medium">Last name</label>
                  <input type="text" className="input-field" placeholder="Enter your last name" />
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label className="block text-gray-600 font-medium">Email address</label>
                  <input type="email" className="input-field" placeholder="Enter your email" />
                </div>

                {/* Password */}
                <div className="mb-4 relative">
                  <label className="block text-gray-600 font-medium">Password</label>
                  <input type={showPassword ? "text" : "password"} className="input-field pr-10" placeholder="Enter your password" />
                  <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                {/* Confirm Password */}
                <div className="mb-4 relative">
                  <label className="block text-gray-600 font-medium">Confirm password</label>
                  <input type={showConfirmPassword ? "text" : "password"} className="input-field pr-10" placeholder="Confirm your password" />
                  <button type="button" className="password-toggle" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                {/* Register Button */}
                <button className="action-btn">REGISTER</button>
              </>
            )}

            {/* Restore Password Form */}
            {showModal === "restore" && (
              <>
                <h2 className="text-2xl font-bold text-center mb-6">Account</h2>
                <p className="text-gray-700 font-semibold mb-2">RESET PASSWORD</p>
                <p className="text-gray-500 mb-4">We will send you an email to reset your password.</p>

                {/* Email Field */}
                <div className="mb-4">
                  <label className="block text-gray-600 font-medium">Email Address</label>
                  <input type="email" className="input-field" placeholder="Enter your email" />
                </div>

                {/* Submit Button */}
                <button className="action-btn">SUBMIT</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Account;
