import React from 'react';

const Header = () => {
    return (
        <nav className="flex items-center gap-4 md:gap-10 text-sm font-medium text-gray-700">
            {/* <div className="text-xl font-bold tracking-wider">Ta</div> */}
            <a href="#" className="hover:text-emerald-700">About Us</a>
            <a href="#" className="hover:text-emerald-700">Campaign</a>
            <a href="#" className="hover:text-emerald-700">Contact Us</a>
        </nav>
    );
};

export default Header;

