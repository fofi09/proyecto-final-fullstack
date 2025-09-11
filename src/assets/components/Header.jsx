import React from 'react';

const Header = () => {
    return (
        <nav className="flex items-center gap-6 md:gap-36 text-sm font-medium text-gray-700">
            <a href="#" className="hover:text-emerald-700">
                About Us
            </a>
            <a href="#" className="hover:text-emerald-700">
                Campaign
            </a>
            <a href="#" className="hover:text-emerald-700">
                Contact Us
            </a>
        </nav>
    );
};

export default Header;
