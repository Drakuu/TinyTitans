import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 my-10">
            {/* Breadcrumbs */}
            <div className="mb-8">
                <ul className="flex space-x-3 text-gray-600 ">
                    <li>
                        <Link to="/" className="hover:text-black">Home</Link>
                    </li>
                    <li>|</li>
                    <li className="text-black font-semibold">Contact Us</li>
                </ul>
            </div>

            {/* Contact Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Side - Contact Info */}
                <div className="space-y-8">
                    {/* Customer Service */}
                    <div>
                        <h1 className="text-xl font-bold mb-2">CUSTOMER SERVICE</h1>
                        <p className="text-gray-700">📞 +09123 456 789</p>
                        <p className="text-gray-600">Monday to Friday | 10am - 6:30pm (New York time)</p>
                    </div>

                    {/* Store Locator */}
                    <div>
                        <h1 className="text-xl font-bold mb-2">STORE LOCATOR</h1>
                        <p className="text-gray-700">📍 521 Fifth Avenue, Pelham, NY 10783</p>
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="space-y-6">
                    <h1 className="text-xl font-bold">Have a question or need assistance? Reach out to us!</h1>
                    <p className="text-gray-600">
                        We are happy to assist with any inquiries. Share your ideas, concerns, or feedback with us.
                    </p>

                    <form className="space-y-4">
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-semibold mb-1">Name</label>
                            <input
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black"
                                placeholder="Enter your name"
                                type="text"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-semibold mb-1">Email</label>
                            <input
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black"
                                placeholder="Enter your email"
                                type="email"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-semibold mb-1">Message</label>
                            <textarea
                                className="w-full h-32 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black"
                                placeholder="Write your message here..."
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full lg:w-36 h-12 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition-all duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
