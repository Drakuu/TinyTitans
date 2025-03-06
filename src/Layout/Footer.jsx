import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    const footerContent = [
        {
            header: 'YOUR ACCOUNT',
            links: [
                { text: 'Personal info', to: '/account' },
                { text: 'Orders', to: '/orders' },
                { text: 'Credit slips', to: '/credit-slips' },
                { text: 'Addresses', to: '/addresses' },
            ],
        },
        {
            header: 'CUSTOMER SERVICE',
            links: [
                { text: 'Monday to Friday', to: '#' },
                { text: '10am - 6.30pm (New York time)', to: '#' },
                { text: '+(001) 23 45 67 89', to: '#' },
                { text: 'shopify@zemez.io', to: '#' },
            ],
        },
        {
            header: 'OUR GUARANTEES',
            links: [
                { text: 'Shipping in 3 days', to: '#' },
                { text: 'Free returns within 14 days', to: '#' },
                { text: 'Secure payments', to: '#' },
            ],
        },
        {
            header: 'OUR COMPANY',
            links: [
                { text: 'Delivery', to: '/delivery' },
                { text: 'Legal Notice', to: '/term-condition' },
                { text: 'About Us', to: '/about' },
                { text: 'Contact Us', to: '/contact' },
                { text: 'Terms and Conditions', to: '/term-condition' },
            ],
        },
    ];

    return (
        <div className="bg-white py-10 text-left">
            <div className="max-w-7xl mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-16">
                {footerContent.map((section, index) => (
                    <div key={index} className="space-y-3">
                        <h1 className="font-bold text-lg">{section.header}</h1>
                        <div className="space-y-2">
                            {section.links.map((link, linkIndex) => (
                                <Link
                                    key={linkIndex}
                                    to={link.to}
                                    className="block text-gray-600 hover:text-black transition duration-200"
                                >
                                    {link.text}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer Bottom Section */}
            <div className="border-t mt-8 pt-4 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} TinyTitans. All rights reserved.
            </div>
        </div>
    );
}

export default Footer;
