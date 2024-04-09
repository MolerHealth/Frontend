import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <div className="content-area">
            <div className="content">
                <p>Moler Health</p>
                <div className="links">
                    <ul>
                        <li>Company</li>
                        <li>Features</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Terms of Service</li>
                        <li>User Agreement</li>
                        <li>Community</li>
                        <li>Guidelines</li>
                    </ul>
                    <ul>
                        <li>Community & Support</li>
                        <li>Get Involved</li>
                        <li>Documentation</li>
                        <li>Contact Us</li>
                        <li>Support</li>
                    </ul>
                    <ul>
                        <li>Resources</li>
                        <li>Blog</li>
                        <li>Privacy</li>
                        <li>Terms of Service</li>
                        <li>User Agreement</li>
                    </ul>
                </div>
            </div>
            <p className="newsletter">Join Our Newsletter</p>
            <div className="subscribe">
                <p>Subscribe now</p>
            </div>
        </div>
    );
};

export default Footer;