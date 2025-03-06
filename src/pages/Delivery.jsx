import React from 'react';

function Delivery() {
    return (
        <div className="max-w-5xl mx-auto my-10 px-6 lg:px-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-8">Delivery Information</h1>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                So you’ve done your shopping; just how long will it be till you can rock that swanky new Axolotl-themed laptop skin? 
                The calculator below will give you the average amount of days it takes to ship a product to your door and the best time 
                to contact our support team. Please note that every order at Redbubble is custom printed just for you and will take 
                <strong> 1-3 business days </strong> to print prior to shipping.
            </p>

            {/* Considerations Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-3">Things to consider while you wait for your order:</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>We ship in business days: <strong>Monday - Friday</strong>, excluding national holidays.</li>
                    <li>Shipping starts from the date you receive the “Your Order Has Shipped!” email.</li>
                    <li>Manufacturing time takes <strong>1-3 business days</strong> to ensure quality.</li>
                </ul>
            </div>

            <p className="text-lg text-gray-700 mb-6">
                Redbubble is a global company - we work with production and shipping partners worldwide to get your products delivered 
                as soon as possible. Actual delivery times may vary depending on your region.
            </p>

            {/* Contact Redbubble Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-3">When should you contact Redbubble?</h2>
                <p className="text-lg text-gray-700">
                    The calculator above will guide you on when to contact us. If your order hasn’t arrived by the estimated date, it’s 
                    likely still on its way. Rest assured, we’ll help if there are any delays.
                </p>
            </div>

            {/* FAQ Section */}
            <div className="space-y-6">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">1. How much is shipping?</h2>
                    <p className="text-lg text-gray-700">
                        Once you’ve clicked through to Secure Checkout, you can enter your delivery address and choose a shipping 
                        method. Shipping costs will be calculated and displayed at the bottom of the page.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">2. Can I track my order?</h2>
                    <p className="text-lg text-gray-700">
                        We work with a global network of shipping partners including <strong>UPS, FedEx, DHL</strong>, as well as 
                        local postal services like <strong>USPS</strong>. While tracking is available for most orders, in some 
                        cases, it may not be possible. If tracking is available, you’ll find the details on your orders page and in 
                        your shipping confirmation email.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Delivery;
