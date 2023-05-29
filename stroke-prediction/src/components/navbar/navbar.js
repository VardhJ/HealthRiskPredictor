import React from 'react';

function Navbar() {
    return (
        <nav>
            <div className="logo">Health Risk Predictor</div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#how-it-works">How It Works</a></li>
                <li><a href="#why-choose-us">Why Choose Us</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;