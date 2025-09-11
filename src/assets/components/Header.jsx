import React from 'react';

const Header = () => {
    return (
        <nav className="flex items-center gap-6 md:gap-36 text-sm font-medium text-gray-700">
            <a href="#" className="hover:text-emerald-700 after:content-['•'] after:mx-2 last:after:content-none">
                About Us
            </a>
            <a href="#" className="hover:text-emerald-700 after:content-['•'] after:mx-2 last:after:content-none">
                Campaign
            </a>
            <a href="#" className="hover:text-emerald-700 last:after:content-none">
                Contact Us
            </a>
        </nav>
    );
};

export default Header;
