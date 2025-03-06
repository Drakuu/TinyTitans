import React from 'react';
import { Link } from 'react-router-dom';

function TermCondition() {
    return (
        <div className="max-w-5xl mx-auto my-10 px-6 lg:px-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10">
                Privacy Policy & Terms of Use
            </h1>

            {/* General Information */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-3">General Information</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Welcome to our Privacy Policy page! When you use our store services, you trust us with your information. 
                    This Privacy Policy is meant to help you understand what data we collect, why we collect it, and what we do with it. 
                    Our goal is to provide transparency about how we handle your information and how you can manage your privacy.
                </p>
            </section>

            {/* User Rights */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-3">
                    Right to Access, Correct & Delete Data
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    You have the right to access, correct, and delete personal data related to you. If you wish to exercise these 
                    rights, please contact us. We take security measures to protect your data, but we advise users to be aware of 
                    potential risks associated with online activities.
                </p>
            </section>

            {/* Management of Personal Data */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-3">Management of Personal Data</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    You can manage your personal data through your account settings. You can opt-out of promotional emails and control 
                    how we use your data. Certain service-related communications, however, may be mandatory.
                </p>
            </section>

            {/* Data Collection */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Our store collects data to operate effectively and provide the best experience. We gather data from user-provided 
                    information, cookies, and interactions with our services. Additionally, we may obtain demographic data from third 
                    parties for enhanced services.
                </p>
            </section>

            {/* Data Usage */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-3">How We Use Your Information</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    We use collected data to improve services, personalize your experience, and provide relevant promotions. Our 
                    systems are designed to keep your personal information secure and separate from anonymous activity data.
                </p>
            </section>

            {/* Data Sharing */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-3">Sharing Your Information</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    We do not sell your data. We only share necessary information with payment processors, service providers, and 
                    trusted partners to complete transactions and enhance security. If required, we may also disclose information in 
                    compliance with legal obligations.
                </p>
            </section>

            {/* Final Notes */}
            <section className="border-t pt-6 mt-6 text-center">
    <p className="text-lg text-gray-600">
        If you have any questions about our 
        <Link to="/term-condition" className="font-semibold underline text-black hover:text-blue-600 mx-1">
            Privacy Policy
        </Link> 
        or 
        <Link to="/delivery" className="font-semibold underline text-black hover:text-blue-600 mx-1">
            Delivery
        </Link>, feel free to 
        <Link to="/contact" className="font-semibold underline text-black hover:text-blue-600 mx-1">
            Contact Us
        </Link>.
    </p>
</section>
        </div>
    );
}

export default TermCondition;
