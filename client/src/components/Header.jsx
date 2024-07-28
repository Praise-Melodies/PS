import React from 'react';
import ChurchLogo from '../assets/images/ChristianChurchLogo.png'; // Import the image

const Header = () => {
    return (
        <header className="py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="logo">
                    <img src={ChurchLogo} alt="Christian Church Logo" />
                </div>
                <div className="profile-login">
                    <a href="#" className="rounded-full border border-black bg-transparent py-1.5 px-5 text-black transition-all hover:bg-black hover:text-white text-center text-sm font-inter flex items-center justify-center">Login</a>
                </div>
            </div>
        </header>
    );
}

export default Header;
