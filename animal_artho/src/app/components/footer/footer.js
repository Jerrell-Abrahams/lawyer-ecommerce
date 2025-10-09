import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-neutral-700 shadow-lg py-6">
            <div className="max-w-4xl mx-auto px-4">
                <p className="text-white text-center text-lg font-semibold mb-3">
                    Lawyer Ecommerce. All rights reserved.
                </p>
                <nav className="flex justify-center gap-3">
                    <a href="/privacy" className="text-white hover:text-yellow-400 transition-colors text-base font-medium">Privacy Policy</a>
                    <a href="/terms" className="text-white hover:text-yellow-400 transition-colors text-base font-medium">Terms of Service</a>
                    <a href="/contact" className="text-white hover:text-yellow-400 transition-colors text-base font-medium">Contact Us</a>
                </nav>
            </div>
        </footer>
    );
}